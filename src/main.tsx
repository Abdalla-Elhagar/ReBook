import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { myStore } from "./store.ts";
import { Provider } from "react-redux";
import { HashRouter  } from "react-router";

import { localUsers } from "./data";

localStorage.getItem("garduationProjectUsers")
  ? null
  : localStorage.setItem("garduationProjectUsers", JSON.stringify(localUsers));


createRoot(document.getElementById("root")!).render(
  <HashRouter>
    <Provider store={myStore}>
      <App />
    </Provider>
  </HashRouter>
);
