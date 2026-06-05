import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import logoSvgSource from "./assets/somlia-logo-lockup.svg?raw";

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

  it("declares intrinsic dimensions for the active SVG logo asset", () => {
    expect(logoSvgSource).toContain('width="244.488"');
    expect(logoSvgSource).toContain('height="190.735"');
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
