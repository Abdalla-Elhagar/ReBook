import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { myStore } from "./store.ts";
import { Provider } from "react-redux";
import { HashRouter  } from "react-router-dom";


createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Provider store={myStore}>
      <App />
    </Provider>
  </HashRouter>
);
