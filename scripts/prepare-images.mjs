import sharp from "sharp";
import { mkdirSync } from "fs";

const FLYER = "WhatsApp Image 2026-08-27 at 09.15.51.jpeg";
const LOGO = "WhatsApp Image 2026-08-27 at 09.14.38.jpeg";
mkdirSync("public/images", { recursive: true });
mkdirSync("public/brand", { recursive: true });

const crops = [
  { out: "public/images/tecnico.jpg", src: FLYER, left: 636, top: 40, width: 583, height: 900 },
  { out: "public/images/unidade.jpg", src: FLYER, left: 420, top: 620, width: 620, height: 340 },
  { out: "public/images/fluxo.jpg", src: FLYER, left: 430, top: 860, width: 600, height: 300 },
  { out: "public/images/ambiente.jpg", src: FLYER, left: 900, top: 60, width: 319, height: 460 },
];

for (const c of crops) {
  const pipe = sharp(c.src).extract({ left: c.left, top: c.top, width: c.width, height: c.height });
  if (c.out.endsWith(".png")) await pipe.png({ quality: 92 }).toFile(c.out);
  else await pipe.jpeg({ quality: 90, mozjpeg: true }).toFile(c.out);
  console.log("ok", c.out);
}

await sharp(LOGO).resize(600, 600).jpeg({ quality: 92 }).toFile("public/brand/selo.jpg");
console.log("ok public/brand/selo.jpg");
