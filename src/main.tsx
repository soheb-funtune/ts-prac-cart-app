import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ShopingCartProvider } from "./context/ShopingCartContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ShopingCartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ShopingCartProvider>
  </React.StrictMode>
);
