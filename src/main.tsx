import * as React from "react"
import { createRoot } from "react-dom/client"

import "@/styles/globals.css"
import App from "./App.tsx"

if (import.meta.env.DEV) {
  void import("@axe-core/react").then(async ({ default: axe }) => {
    const ReactDOM = await import("react-dom")
    axe(React, ReactDOM, 1000)
  })
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
