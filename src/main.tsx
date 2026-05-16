import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initMetaPixel } from "./lib/meta-pixel";

// Initialize Meta Pixel
initMetaPixel();

createRoot(document.getElementById("root")!).render(<App />);
