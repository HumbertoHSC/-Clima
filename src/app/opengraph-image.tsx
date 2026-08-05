import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "+Clima — Ar-condicionado em Tamandaré e Mata Sul de PE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const [bold, extraBold] = await Promise.all([
    readFile(join(process.cwd(), "assets-og/PlusJakartaSans-Bold.ttf")),
    readFile(join(process.cwd(), "assets-og/PlusJakartaSans-ExtraBold.ttf")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #14335A 0%, #0d2440 100%)",
          fontFamily: "'Plus Jakarta Sans'",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#E08C5B",
            }}
          />
          <div style={{ display: "flex", fontSize: 48, fontWeight: 700, color: "#ffffff" }}>
            +Clima
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 60,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 980,
          }}
        >
          Conforto térmico que sua família merece
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 30,
            fontWeight: 700,
            color: "#bcd0e0",
            maxWidth: 900,
          }}
        >
          Instalação, manutenção e higienização de ar-condicionado em Tamandaré, PE
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Plus Jakarta Sans", data: bold, style: "normal", weight: 700 },
        { name: "Plus Jakarta Sans", data: extraBold, style: "normal", weight: 800 },
      ],
    }
  );
}
