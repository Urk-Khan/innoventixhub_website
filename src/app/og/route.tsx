import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("title") || "Innoventix Hub").slice(0, 140);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0C1117",
          color: "#F7F4EF",
          padding: 64,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", color: "#FFB547", fontSize: 28, letterSpacing: 4 }}>INNOVENTIX HUB</div>
        <div style={{ display: "flex", fontSize: 56, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>{title}</div>
        <div style={{ display: "flex", color: "#C9D2DE", fontSize: 24 }}>innoventixhub.tech</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
