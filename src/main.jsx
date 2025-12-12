import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import store from "./stores/store.js";
import App from "./App.jsx";
import AppAdmin from "./AppAdmin.jsx";
import "bootstrap/dist/css/bootstrap.min.css";

const userData = JSON.parse(localStorage.getItem("user"));
const role = userData?.role || "user";

const RootApp = role === "admin" ? AppAdmin : App;

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <RootApp />
      </StrictMode>
    </BrowserRouter>
  </Provider>
);
