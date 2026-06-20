import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";
import footerLogoSvgSource from "./assets/full-logo-somlia.svg?raw";
import symbolNameLogoSvgSource from "./assets/symbol-name-logo-somlia.svg?raw";
import symbolSvgSource from "./assets/symbol-somlia.svg?raw";
import transparentSymbolSvgSource from "./assets/somlia-symbol-transparent.svg?raw";

const submitWaitlistSignup = vi.fn();
const scrollIntoView = vi.fn();

vi.mock("./lib/waitlist", () => ({
  submitWaitlistSignup,
}));

function renderAt(path: string) {
  window.history.pushState({}, "", path);
  return render(<App />);
}

const routeMetadataCases = [
  {
    path: "/",
    title: "SOMLIA | Build proof of progress",
    description: "Learn practical skills, apply them through real projects, and build proof companies can trust.",
    canonical: "https://somlia.com/",
    robots: "index,follow",
  },
  {
    path: "/roadmap",
    title: "SOMLIA Roadmap | From proof of progress to opportunity",
    description:
      "Explore how SOMLIA is being built from practical learning and community feedback toward trusted proof profiles, company briefs, and future opportunities.",
    canonical: "https://somlia.com/roadmap",
    robots: "index,follow",
  },
  {
    path: "/roadmap/",
    title: "SOMLIA Roadmap | From proof of progress to opportunity",
    description:
      "Explore how SOMLIA is being built from practical learning and community feedback toward trusted proof profiles, company briefs, and future opportunities.",
    canonical: "https://somlia.com/roadmap",
    robots: "index,follow",
  },
  {
    path: "/privacy-policy",
    title: "Privacy Policy | SOMLIA",
    description:
      "Read how SOMLIA collects, uses, shares, and protects personal information for its early-access website and waitlist.",
    canonical: "https://somlia.com/privacy-policy",
    robots: "noindex,follow",
  },
  {
    path: "/privacy-policy/",
    title: "Privacy Policy | SOMLIA",
    description:
      "Read how SOMLIA collects, uses, shares, and protects personal information for its early-access website and waitlist.",
    canonical: "https://somlia.com/privacy-policy",
    robots: "noindex,follow",
  },
  {
    path: "/unknown-path",
    title: "SOMLIA | Build proof of progress",
    description: "Learn practical skills, apply them through real projects, and build proof companies can trust.",
    canonical: "https://somlia.com/",
    robots: "index,follow",
  },
];

describe("App routing", () => {
  it("renders the landing page by default", () => {
    renderAt("/");

    expect(screen.getByRole("heading", { name: /build proof of progress/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /be early to the platform/i })).toBeInTheDocument();
  });

  it("uses the wave pattern instead of the retired hero grid", () => {
    const { container } = renderAt("/");

    expect(screen.getByTestId("hero-wave-pattern")).toHaveClass("hero-wave-pattern");
    expect(container.innerHTML).not.toContain("linear-gradient");
    expect(container.innerHTML).not.toContain("bg-[size:84px_84px]");
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

  it("links to the official SOMLIA social accounts from accessible footer icons", () => {
    renderAt("/");

    const xLink = screen.getByRole("link", { name: "Follow SOMLIA on X" });
    const linkedInLink = screen.getByRole("link", { name: "Follow SOMLIA on LinkedIn" });

    expect(xLink).toHaveAttribute("href", "https://x.com/SomliaOfficial");
    expect(linkedInLink).toHaveAttribute("href", "https://www.linkedin.com/company/126893968");

    for (const link of [xLink, linkedInLink]) {
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noreferrer noopener");
    }
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

  it("renders the approved example company brief preview without live paid-marketplace claims", () => {
    const { container } = renderAt("/");

    expect(screen.getByRole("heading", { name: /example company brief: automate inbound request triage/i })).toBeInTheDocument();
    expect(screen.getByText("Example brief / early access preview")).toBeInTheDocument();
    expect(screen.getByText(/AI\/no-code operations automation for a small B2B company\/operator/i)).toBeInTheDocument();
    expect(screen.getByText("Use sample data only.")).toBeInTheDocument();
    expect(screen.getByText("No real customer PII.")).toBeInTheDocument();
    expect(screen.getByText(/Proof added: AI operations automation, workflow design/i)).toBeInTheDocument();

    expect(container).not.toHaveTextContent(/paid opportunities are live/i);
    expect(container).not.toHaveTextContent(/earn money today/i);
    expect(container).not.toHaveTextContent(/get paid now/i);
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

describe("Route metadata", () => {
  beforeEach(() => {
    document.head.innerHTML = `
      <meta name="description" content="stale description" />
      <meta name="description" content="duplicate description" />
      <meta name="robots" content="stale robots" />
      <meta name="robots" content="duplicate robots" />
      <link rel="canonical" href="https://example.com/stale" />
      <link rel="canonical" href="https://example.com/duplicate" />
      <meta property="og:title" content="SOMLIA | Build proof of progress" />
      <meta property="og:image" content="https://somlia.com/og-somlia.png" />
      <meta name="twitter:title" content="SOMLIA | Build proof of progress" />
      <meta name="twitter:image" content="https://somlia.com/og-somlia.png" />
    `;
  });

  it.each(routeMetadataCases)("sets the approved metadata for $path", ({ path, title, description, canonical, robots }) => {
    renderAt(path);

    expect(document.title).toBe(title);
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute("content", description);
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute("href", canonical);
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute("content", robots);

    expect(document.head.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.head.querySelectorAll('meta[name="robots"]')).toHaveLength(1);

    expect(document.head.querySelector('meta[property="og:title"]')).toHaveAttribute(
      "content",
      "SOMLIA | Build proof of progress",
    );
    expect(document.head.querySelector('meta[property="og:image"]')).toHaveAttribute(
      "content",
      "https://somlia.com/og-somlia.png",
    );
    expect(document.head.querySelector('meta[name="twitter:title"]')).toHaveAttribute(
      "content",
      "SOMLIA | Build proof of progress",
    );
    expect(document.head.querySelector('meta[name="twitter:image"]')).toHaveAttribute(
      "content",
      "https://somlia.com/og-somlia.png",
    );
  });
});

describe("Waitlist form", () => {
  beforeEach(() => {
    submitWaitlistSignup.mockReset();
    scrollIntoView.mockReset();
    Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
      configurable: true,
      value: scrollIntoView,
    });
  });

  it("moves company task interest into the waitlist with Company selected and the message field focused", () => {
    renderAt("/");

    fireEvent.click(screen.getByRole("button", { name: "Share a company task" }));

    expect(screen.getByLabelText("I am a")).toHaveValue("Company");
    expect(screen.getByLabelText("Short message")).toHaveFocus();
    expect(screen.getByLabelText("Short message")).toHaveAttribute(
      "placeholder",
      "What small task or business problem would you like contributors to solve? (Optional)",
    );
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
  });

  it("keeps all existing waitlist roles available after company task preselection", () => {
    renderAt("/");

    fireEvent.click(screen.getByRole("button", { name: "Share a company task" }));

    expect(screen.getAllByRole("option").map((option) => option.textContent)).toEqual([
      "Learner",
      "Company",
      "Investor / Partner",
    ]);

    fireEvent.change(screen.getByLabelText("I am a"), { target: { value: "Investor / Partner" } });
    expect(screen.getByLabelText("I am a")).toHaveValue("Investor / Partner");
    expect(screen.getByLabelText("Short message")).toHaveAttribute(
      "placeholder",
      "Tell us what you want to learn, build, or prove.",
    );
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

    fireEvent.click(screen.getByRole("button", { name: "Share a company task" }));
    fireEvent.change(screen.getByLabelText("Name"), { target: { value: "Ada Lovelace" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "Ada@Example.com" } });
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

    expect(
      await screen.findByText(
        "Thanks — your company interest is recorded. We’ll follow up about early company pilots and how briefs may work.",
      ),
    ).toBeInTheDocument();
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
