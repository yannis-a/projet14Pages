import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import "./styles/app.scss";
import "./styles/styles-ag_grid/ag-grid.min.css";
import "./styles/styles-ag_grid/ag-theme-alpine.min.css";
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
      </HashRouter>
    </PersistGate>
  </Provider>
);
