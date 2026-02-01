import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Enable hot module replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
