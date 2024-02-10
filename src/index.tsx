import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { LazyAbout } from "@/components/pages/about/About.lazy";
import { LazyShop } from "@/components/pages/shop/Shop.lazy";
import App from "@/components/App";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

if (!root) {
  throw new Error("root not found");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyAbout />
          </Suspense>
        ),
      },

      {
        path: "/shop",
        element: (
          <Suspense fallback={"Loading..."}>
            <LazyShop />
          </Suspense>
        ),
      },
    ],
  },
]);

root.render(<RouterProvider router={router} />);
