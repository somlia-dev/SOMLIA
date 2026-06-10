import { describe, expect, it } from "vitest";
import indexHtml from "../index.html?raw";

describe("social metadata", () => {
  it("declares the approved global Open Graph and Twitter metadata", () => {
    expect(indexHtml).toContain("<title>SOMLIA | Build proof of progress</title>");
    expect(indexHtml).toContain('name="description"');
    expect(indexHtml).toContain("Learn practical skills, apply them through real projects, and build proof companies can trust.");
    expect(indexHtml).toContain('property="og:type"');
    expect(indexHtml).toContain('content="website"');
    expect(indexHtml).toContain('property="og:title"');
    expect(indexHtml).toContain('content="SOMLIA | Build proof of progress"');
    expect(indexHtml).toContain('property="og:image"');
    expect(indexHtml).toContain('content="https://somlia.com/og-somlia.png"');
    expect(indexHtml).toContain('property="og:image:width" content="1200"');
    expect(indexHtml).toContain('property="og:image:height" content="630"');
    expect(indexHtml).toContain('property="og:image:alt"');
    expect(indexHtml).toContain("SOMLIA — Build proof of progress through practical projects, feedback, and trusted proof.");
    expect(indexHtml).toContain('name="twitter:card" content="summary_large_image"');
    expect(indexHtml).toContain('name="twitter:title" content="SOMLIA | Build proof of progress"');
    expect(indexHtml).toContain('name="twitter:description"');
    expect(indexHtml).toContain("Build proof of progress through practical projects, feedback, and verified outcomes.");
    expect(indexHtml).toContain('name="twitter:image" content="https://somlia.com/og-somlia.png"');
    expect(indexHtml).toContain('name="twitter:image:alt"');
  });

  it("points global previews to the approved PNG asset", () => {
    expect(indexHtml).toContain("/og-somlia.png");
  });
});
