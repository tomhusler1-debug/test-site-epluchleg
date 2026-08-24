import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "#F08A00",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#F7F4EC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21c-4-3-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-3 8-7 11z" />
          <path d="M12 21V10" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
