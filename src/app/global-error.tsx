"use client";

import { useEffect } from "react";

// Last-resort fallback that replaces the root layout, so it can't rely on the site's CSS,
// fonts or components. It is deliberately self-contained.
export default function GlobalError({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <head>
        <title>Something went wrong | BPPF</title>
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          background: "#ffffff",
          color: "#1C1D1B",
          textAlign: "center",
        }}
      >
        <main style={{ maxWidth: 480 }}>
          <h1 style={{ margin: 0, fontSize: 28, color: "#11261C" }}>Something went wrong</h1>
          <p style={{ marginTop: 16, lineHeight: 1.6, color: "#57534e" }}>
            The site hit an unexpected problem. Please try again in a moment.
          </p>
          <button
            type="button"
            onClick={() => retry()}
            style={{
              marginTop: 24,
              padding: "12px 28px",
              border: 0,
              borderRadius: 9999,
              background: "#9EE839",
              color: "#0B1A13",
              fontSize: 16,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
