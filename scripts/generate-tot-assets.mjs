import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const WIDTH = 1200;
const HEIGHT = 900;
const source = readFileSync("app/tot/page.tsx", "utf8");
const cardMatches = [...source.matchAll(/\{\s*id:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*title:\s*"[^"]+",\s*options:\s*\[([\s\S]*?)\],\s*\},/g)];

const palettes = {
  home: [
    [35, 58, 48],
    [105, 28, 42],
    [205, 36, 46],
  ],
  travel: [
    [194, 62, 48],
    [36, 70, 56],
    [220, 44, 42],
  ],
  city: [
    [225, 38, 34],
    [18, 70, 54],
    [292, 36, 42],
  ],
  style: [
    [330, 34, 42],
    [42, 34, 62],
    [180, 24, 36],
  ],
  "free-time": [
    [145, 35, 40],
    [28, 54, 55],
    [260, 26, 42],
  ],
  food: [
    [8, 68, 50],
    [46, 78, 54],
    [128, 34, 38],
  ],
  hobby: [
    [268, 42, 44],
    [172, 48, 42],
    [32, 58, 52],
  ],
  inner: [
    [205, 38, 42],
    [90, 30, 43],
    [280, 24, 40],
  ],
};

function hash(value) {
  let result = 2166136261;
  for (const char of value) {
    result ^= char.charCodeAt(0);
    result = Math.imul(result, 16777619);
  }
  return result >>> 0;
}

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0;
  let g = 0;
  let b = 0;

  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];

  return [
    Math.round((r + m) * 255),
    Math.round((g + m) * 255),
    Math.round((b + m) * 255),
  ];
}

function mix(a, b, t) {
  return [
    Math.round(a[0] + (b[0] - a[0]) * t),
    Math.round(a[1] + (b[1] - a[1]) * t),
    Math.round(a[2] + (b[2] - a[2]) * t),
  ];
}

function addShape(pixel, color, alpha) {
  pixel[0] = Math.round(pixel[0] * (1 - alpha) + color[0] * alpha);
  pixel[1] = Math.round(pixel[1] * (1 - alpha) + color[1] * alpha);
  pixel[2] = Math.round(pixel[2] * (1 - alpha) + color[2] * alpha);
}

function makeImageBuffer(category, questionId, optionId) {
  const seed = hash(`${category}:${questionId}:${optionId}`);
  const palette = palettes[category] ?? palettes.inner;
  const base = palette[seed % palette.length];
  const accent = palette[((seed >>> 8) % palette.length)];
  const top = hslToRgb((base[0] + (seed % 28)) % 360, base[1], Math.min(base[2] + 18, 72));
  const bottom = hslToRgb((accent[0] + 180 + (seed % 20)) % 360, accent[1], Math.max(accent[2] - 10, 24));
  const horizon = 0.48 + ((seed % 18) - 9) / 100;
  const data = Buffer.alloc(WIDTH * HEIGHT * 3);

  for (let y = 0; y < HEIGHT; y++) {
    const v = y / (HEIGHT - 1);
    for (let x = 0; x < WIDTH; x++) {
      const u = x / (WIDTH - 1);
      const grain = (((x * 17 + y * 31 + seed) % 29) - 14) / 255;
      const color = mix(top, bottom, Math.min(1, v * 1.08));

      color[0] = Math.max(0, Math.min(255, color[0] + grain * 255));
      color[1] = Math.max(0, Math.min(255, color[1] + grain * 210));
      color[2] = Math.max(0, Math.min(255, color[2] + grain * 180));

      if (v > horizon) {
        addShape(color, hslToRgb(base[0], Math.max(base[1] - 16, 18), Math.max(base[2] - 22, 18)), 0.62);
      }

      const sunX = 0.2 + ((seed >> 4) % 55) / 100;
      const sunY = 0.16 + ((seed >> 11) % 22) / 100;
      const sunDistance = Math.hypot(u - sunX, v - sunY);
      if (sunDistance < 0.09) addShape(color, [255, 230, 166], 0.58 * (1 - sunDistance / 0.09));

      if (category === "city") {
        const blockWidth = 0.045 + ((seed >> (x % 13)) % 20) / 1000;
        const column = Math.floor(u / blockWidth);
        const blockHeight = 0.2 + ((hash(`${optionId}:${column}`) % 35) / 100);
        if (v > 0.8 - blockHeight && v < 0.86) addShape(color, [22, 24, 33], 0.8);
        if (v > 0.8 - blockHeight && ((x + y + column) % 57) < 4) addShape(color, [255, 210, 120], 0.4);
      } else if (category === "food") {
        const plate = Math.hypot((u - 0.5) / 0.34, (v - 0.62) / 0.22);
        if (plate < 1) addShape(color, [245, 238, 220], 0.64);
        if (plate < 0.72) addShape(color, hslToRgb(accent[0], accent[1] + 8, accent[2]), 0.5);
      } else if (category === "style") {
        const stripe = Math.floor((u + v * 0.35) * 7);
        if (stripe % 2 === 0) addShape(color, hslToRgb((base[0] + 48) % 360, base[1], base[2] + 10), 0.28);
      } else {
        const ridge = horizon - 0.1 + Math.sin(u * 8 + (seed % 7)) * 0.035;
        if (v > ridge && v < horizon + 0.08) addShape(color, hslToRgb(accent[0], accent[1], Math.max(accent[2] - 18, 16)), 0.48);
      }

      const vignette = Math.min(1, Math.hypot(u - 0.5, v - 0.5) * 1.1);
      addShape(color, [18, 20, 24], vignette * 0.16);

      const index = (y * WIDTH + x) * 3;
      data[index] = color[0];
      data[index + 1] = color[1];
      data[index + 2] = color[2];
    }
  }

  return Buffer.concat([Buffer.from(`P6\n${WIDTH} ${HEIGHT}\n255\n`), data]);
}

let created = 0;
let existing = 0;

for (const [, questionId, category, optionsBlock] of cardMatches) {
  const optionIds = [...optionsBlock.matchAll(/\[\s*"([^"]+)"/g)].map((match) => match[1]);

  for (const optionId of optionIds) {
    const extension = questionId === "dream-home" ? "png" : "jpg";
    const output = join("public", "tot", questionId, `${optionId}.${extension}`);

    if (existsSync(output)) {
      existing += 1;
      continue;
    }

    mkdirSync(dirname(output), { recursive: true });

    const ppm = join("/private/tmp", `tot-${questionId}-${optionId}.ppm`);
    writeFileSync(ppm, makeImageBuffer(category, questionId, optionId));
    execFileSync("sips", ["-s", "format", "jpeg", ppm, "--out", output], {
      stdio: "ignore",
    });
    rmSync(ppm, { force: true });
    created += 1;
  }
}

console.log(`TOT assets: ${created} created, ${existing} already present.`);
