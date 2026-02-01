import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Enable hot module replacement
if ((import.meta as any).hot) {
  (import.meta as any).hot.accept();
}
