import { ImageResponse } from "next/og";
import { profile } from "@/data/resume";

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
          justifyContent: "center",
          padding: "90px",
          background: "#F7F4EC",
          color: "#14110F",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 14, height: 14, background: "#C8341E" }} />
          <span style={{ fontSize: 22, letterSpacing: 4, textTransform: "uppercase", color: "#6B6258" }}>
            Software Developer · Distributed Systems · AI-Driven Solutions
          </span>
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 116,
            fontWeight: 700,
            textTransform: "uppercase",
            lineHeight: 1,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div style={{ marginTop: 36, width: 120, height: 5, background: "#C8341E" }} />
        <div style={{ marginTop: 30, fontSize: 28, color: "#6B6258" }}>
          Kathmandu, Nepal — building resilient, AI-driven systems.
        </div>
      </div>
    ),
    { ...size }
  );
}
