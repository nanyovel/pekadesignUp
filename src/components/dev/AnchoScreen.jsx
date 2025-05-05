import React from "react";

export default function AnchoScreen() {
  const ancho = window.screen.width;
  return <h2>{ancho}</h2>;
}
