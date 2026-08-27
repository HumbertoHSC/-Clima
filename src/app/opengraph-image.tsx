import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/site";

export const alt =
  "+Clima Refrigeração — conserto e instalação de ar-condicionado em Tamandaré-PE";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0e13",
          backgroundImage:
            "linear-gradient(to right, #1e2732 1px, transparent 1px), linear-gradient(to bottom, #1e2732 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          padding: "64px 72px",
          fontFamily: "system-ui, sans-serif",
          color: "#dfe6ee",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #63d9f7",
              color: "#63d9f7",
              fontSize: 34,
              fontWeight: 700,
            }}
          >
            +
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 26, fontWeight: 700, color: "#f4f6f8" }}>
              Clima Refrigeração
            </span>
            <span style={{ fontSize: 15, letterSpacing: 3, color: "#8fa0b3" }}>
              TAMANDARÉ · MATA SUL DE PE
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 78, fontWeight: 800, lineHeight: 1, color: "#f4f6f8" }}>
            Seu ar parou de gelar.
          </span>
          <span style={{ fontSize: 78, fontWeight: 800, lineHeight: 1, color: "#e2551f" }}>
            A gente resolve hoje.
          </span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #2a3542",
            paddingTop: 24,
            fontSize: 20,
            color: "#8fa0b3",
          }}
        >
          <span>Instalação · Conserto · Higienização · Carga de gás</span>
          <span style={{ color: "#63d9f7" }}>{BUSINESS.phoneDisplay}</span>
        </div>
      </div>
    ),
    size,
  );
}
