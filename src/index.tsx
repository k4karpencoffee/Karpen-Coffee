import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

// index.html isn't editable in this project, so the document settings are applied once at startup.
// interactive-widget=resizes-content: the on-screen keyboard shrinks the layout instead of overlaying it,
// so Chrome Android keeps the focused field and the navbar in view without any manual scrolling.
const VIEWPORT = "width=device-width, initial-scale=1.0, viewport-fit=cover, interactive-widget=resizes-content";
let viewportMeta = document.querySelector<HTMLMetaElement>('meta[name="viewport"]');
if (!viewportMeta) {
  viewportMeta = document.createElement("meta");
  viewportMeta.name = "viewport";
  document.head.appendChild(viewportMeta);
}
viewportMeta.content = VIEWPORT;
document.documentElement.lang = "id";
document.title = "Karpen Coffee";

const rootEl = document.getElementById("root");
if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
}