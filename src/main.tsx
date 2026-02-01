import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Dynamically set favicon to respect Vite BASE_URL in prod
(() => {
  const href = `${import.meta.env.BASE_URL}favicon.svg`;
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  link.href = href;
})();

const root = createRoot(document.getElementById("root")!);
root.render(<App />);

// Enable hot module replacement
if ((import.meta as any).hot) {
  (import.meta as any).hot.accept();
}
