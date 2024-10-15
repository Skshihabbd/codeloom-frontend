import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Root/Router";
import Authorization from "./Component/Authorization";

createRoot(document.getElementById("root")).render(
  <Authorization>
    <RouterProvider router={router} />
  </Authorization>
);
