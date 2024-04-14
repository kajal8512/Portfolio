import { createRoot } from "react-dom/client"; // Correct import

import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root")); // Use createRoot
root.render(<App />);
