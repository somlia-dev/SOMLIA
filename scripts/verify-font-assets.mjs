import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import { resolve } from "node:path";

const expected = {
  archiveHash: "d9be0b962f58c6c62bdf5c797b5840ceb92a354935b7cb4b5ca0e9a92cae2360",
  fontHash: "8084b2c8663b16b9774a1ceb5889dba1a42ce06273745f1a4661939cce088cae",
  fontSize: 33_212,
  licenseHash: "ab0fa4cf6ad58ad81273b34d1a7d82da9b0cccc95eb7fb19cc148e46c0705102",
};

const checkingDist = process.argv.includes("--dist");
const assetRoot = checkingDist ? resolve("dist/fonts/mozilla-text") : resolve("public/fonts/mozilla-text");
const fontPath = resolve(assetRoot, "MozillaText[wght].woff2");
const licensePath = resolve(assetRoot, "OFL.txt");
const provenancePath = resolve(assetRoot, "README.md");

async function sha256(path) {
  return createHash("sha256").update(await readFile(path)).digest("hex");
}

const [fontHash, fontStats, licenseHash, provenance] = await Promise.all([
  sha256(fontPath),
  stat(fontPath),
  sha256(licensePath),
  readFile(provenancePath, "utf8"),
]);

if (fontHash !== expected.fontHash || fontStats.size !== expected.fontSize) {
  throw new Error(`Mozilla Text WOFF2 integrity check failed for ${fontPath}`);
}

if (licenseHash !== expected.licenseHash) {
  throw new Error(`Mozilla Text OFL integrity check failed for ${licensePath}`);
}

const requiredProvenance = [
  "Mozilla Text",
  "Copyright 2025 The Mozilla-Text-Type.Git Project Authors",
  "SIL Open Font License, Version 1.1",
  "https://github.com/mozilla/mozilla-text-type",
  "https://github.com/mozilla/mozilla-text-type/releases/download/v1.00/mozilla-text-type-v1.00.zip",
  "https://raw.githubusercontent.com/google/fonts/main/ofl/mozillatext/METADATA.pb",
  "5ff275ec4906665df3126ad88c70ffd19d770335",
  expected.archiveHash,
  expected.fontHash,
  expected.licenseHash,
  "fonts/webfonts/MozillaText[wght].woff2",
  "public/fonts/mozilla-text/MozillaText[wght].woff2",
  "public/fonts/mozilla-text/OFL.txt",
  "/fonts/mozilla-text/MozillaText[wght].woff2",
  "/fonts/mozilla-text/OFL.txt",
  "2026-07-21",
];

for (const value of requiredProvenance) {
  if (!provenance.includes(value)) {
    throw new Error(`Mozilla Text provenance record is missing: ${value}`);
  }
}

if (!checkingDist) {
  const styles = await readFile(resolve("src/styles.css"), "utf8");

  const requiredCss = [
    '@font-face',
    'font-family: "Mozilla Text"',
    'url("/fonts/mozilla-text/MozillaText%5Bwght%5D.woff2") format("woff2")',
    'font-style: normal',
    'font-weight: 200 700',
    'font-display: swap',
    'font-family: "Mozilla Text", Inter, ui-sans-serif, system-ui',
  ];

  for (const declaration of requiredCss) {
    if (!styles.includes(declaration)) {
      throw new Error(`Missing approved Mozilla Text CSS declaration: ${declaration}`);
    }
  }

  const forbiddenFontHosts = ["fonts.googleapis.com", "fonts.gstatic.com", "github.com/mozilla/mozilla-text-type/releases", "fontcdn"];
  for (const host of forbiddenFontHosts) {
    if (styles.includes(host)) {
      throw new Error(`External font host found in landing CSS: ${host}`);
    }
  }
}

console.log(`Mozilla Text ${checkingDist ? "distribution" : "source"} integrity verified.`);
