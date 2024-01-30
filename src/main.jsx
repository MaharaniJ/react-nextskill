import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { ContextProvider } from "./context/ContextProvider";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
    <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ContextProvider>
  </React.StrictMode>
);
