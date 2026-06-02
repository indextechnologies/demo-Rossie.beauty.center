import sharp from "sharp";
import { resolve } from "path";

const input = resolve("public/rossie-logo.jpeg");
const output = resolve("public/rossie-logo.png");

const { data, info } = await sharp(input)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const pixels = new Uint8Array(data);

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  // Mark near-white pixels as fully transparent (threshold: 215/255)
  if (r > 215 && g > 215 && b > 215) {
    pixels[i + 3] = 0;
  }
}

await sharp(Buffer.from(pixels.buffer), {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile(output);

console.log(`Done → ${output}`);
