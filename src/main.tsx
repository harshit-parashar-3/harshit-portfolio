import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Enables scroll-reveal styles only when JS is running,
// so content is never hidden if scripts fail to load.
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")!).render(<App />);
