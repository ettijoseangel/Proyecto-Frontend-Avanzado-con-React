import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import History from "./History.jsx";
import { ChatProvider } from "./context/global-context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChatProvider>
    <div className="grid grid-cols-[auto_1fr] h-screen">
      <History />
      <App />
    </div>
    </ChatProvider>
  </StrictMode>
);
