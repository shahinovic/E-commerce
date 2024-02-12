import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import TokenContextProvider from "./Context/Token.jsx";
import CounterContextProvider from "./Context/Counter.jsx";
import UserContextProvider from "./Context/User.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <TokenContextProvider>
        <CounterContextProvider>
          <App />
        </CounterContextProvider>
      </TokenContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
