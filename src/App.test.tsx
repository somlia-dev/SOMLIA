import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import footerLogoSvgSource from "./assets/full-logo-somlia.svg?raw";
import symbolNameLogoSvgSource from "./assets/symbol-name-logo-somlia.svg?raw";
import symbolSvgSource from "./assets/symbol-somlia.svg?raw";
import transparentSymbolSvgSource from "./assets/somlia-symbol-transparent.svg?raw";

const submitWaitlistSignup = vi.fn();

vi.mock("./lib/waitlist", () => ({
  submitWaitlistSignup,
}));

function renderAt(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

describe("App routing", () => {
  it("renders the landing page by default", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { name: /build proof of progress/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /be early to the platform/i })).toBeInTheDocument();
  });

  it("uses SVG assets for every active SOMLIA logo", () => {
    renderAt("/");

    expect(screen.getAllByAltText("SOMLIA logo")).toHaveLength(2);
    for (const logo of screen.getAllByAltText("SOMLIA logo")) {
      expect(logo).toHaveAttribute("src", expect.stringContaining(".svg"));
    }
  });

  it("uses the approved SVG mapping for rendered logo and symbol assets", () => {
    const { container } = renderAt("/");

    const logos = screen.getAllByAltText("SOMLIA logo");
    expect(logos[0]).toHaveAttribute("src", expect.stringContaining("symbol-name-logo-somlia.svg"));
    expect(logos[1]).toHaveAttribute("src", expect.stringContaining("full-logo-somlia.svg"));

    const imageSources = Array.from(container.querySelectorAll("img")).map((image) => image.getAttribute("src") ?? "");
    expect(imageSources).toEqual(expect.arrayContaining([expect.stringContaining("symbol-somlia.svg")]));
    expect(imageSources).toEqual(expect.arrayContaining([expect.stringContaining("somlia-symbol-transparent.svg")]));
    expect(imageSources).not.toEqual(expect.arrayContaining([expect.stringMatching(/\.(png|webp)(\?|$)/i)]));
  });

  it("declares intrinsic dimensions for the active SVG brand assets", () => {
    expect(symbolNameLogoSvgSource).toContain('width="834.899"');
    expect(symbolNameLogoSvgSource).toContain('height="150"');
    expect(footerLogoSvgSource).toContain('width="244.488"');
    expect(footerLogoSvgSource).toContain('height="190.735"');
    expect(symbolSvgSource).toContain('width="232"');
    expect(symbolSvgSource).toContain('height="214"');
    expect(transparentSymbolSvgSource).toContain('width="146"');
    expect(transparentSymbolSvgSource).toContain('height="150"');
  });

  it("renders the roadmap page for /roadmap", () => {
    renderAt("/roadmap");

    expect(screen.getByRole("heading", { name: /building the bridge from learning to earning in stages/i })).toBeInTheDocument();
    expect(screen.getByText("Phase 01")).toBeInTheDocument();
  });

  it("renders the privacy policy page for /privacy-policy", () => {
    renderAt("/privacy-policy");

    expect(screen.getByRole("heading", { name: /how somlia handles personal information/i })).toBeInTheDocument();
    expect(screen.getByText("June 4, 2026")).toBeInTheDocument();
  });
});

describe("Waitlist form", () => {
  beforeEach(() => {
    submitWaitlistSignup.mockReset();
  });

  it("shows a skeleton loading state while waitlist submission is pending", async () => {
    let resolveSignup!: () => void;
    submitWaitlistSignup.mockReturnValue(
      new Promise<void>((resolve) => {
        resolveSignup = resolve;
      }),
    );
    renderAt("/");

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada Lovelace" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "ada@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /join early access/i }));

    expect(screen.getByRole("status", { name: "Saving waitlist signup" })).toBeInTheDocument();
    expect(screen.getByTestId("waitlist-submit-skeleton")).toBeInTheDocument();

    resolveSignup();

    expect(await screen.findByText("Thanks. Your interest is logged for early access.")).toBeInTheDocument();
  });

  it("submits entered waitlist details and shows success feedback", async () => {
    submitWaitlistSignup.mockResolvedValue(undefined);
    renderAt("/");

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada Lovelace" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "Ada@Example.com" } });
    fireEvent.change(screen.getByLabelText("I am a"), { target: { value: "Company" } });
    fireEvent.change(screen.getByLabelText("Short message"), { target: { value: "We want to submit company briefs." } });
    fireEvent.click(screen.getByRole("button", { name: /join early access/i }));

    await waitFor(() => {
      expect(submitWaitlistSignup).toHaveBeenCalledWith({
        name: "Ada Lovelace",
        email: "Ada@Example.com",
        role: "Company",
        message: "We want to submit company briefs.",
      });
    });

    expect(await screen.findByText("Thanks. Your interest is logged for early access.")).toBeInTheDocument();
  });

  it("shows the waitlist helper error message when submission fails", async () => {
    submitWaitlistSignup.mockRejectedValue(new Error("This email is already on the early access list."));
    renderAt("/");

    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada Lovelace" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "ada@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /join early access/i }));

    expect(await screen.findByText("This email is already on the early access list.")).toBeInTheDocument();
  });
});
