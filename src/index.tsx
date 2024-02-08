import ReactDOM from "react-dom/client";
import App from "./components/App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

if (!root) {
  throw new Error("root not found");
}

root.render(<App />);
