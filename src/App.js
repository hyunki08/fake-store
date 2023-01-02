import Products from "./pages/Products";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layouts/Layout";
import { productsLoader, rootLoader } from "./utils/routerLoaders";
import Error from "./pages/Error";
import { Pages } from "./constants/Nav";

const pagesInfo = Pages.reduce(
  (acc, v) => ({ ...acc, [v.name]: { path: v.path.slice(1) } }),
  {}
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: rootLoader,
    errorElement: <Error />,
    children: [
      { index: true, element: <Products /> },
      {
        path: pagesInfo["ProductsByCategory"].path,
        loader: productsLoader,
        element: <Products />,
      },
      { path: pagesInfo["Product"].path, element: <Product /> },
      { path: pagesInfo["Cart"].path, element: <Cart /> },
      { path: pagesInfo["SignIn"].path, element: <SignIn /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
