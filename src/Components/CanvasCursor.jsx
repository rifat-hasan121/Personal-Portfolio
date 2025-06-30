import React from "react";
import useCanvasCursor from "./useCanvasCursor";

export default function CanvasCursor() {
  // Run the custom hook
  useCanvasCursor();

  return (
    <canvas
      id="canvas"
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none z-50"
    />
  );
}
