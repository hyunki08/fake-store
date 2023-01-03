import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products";
import Product from "./pages/Product";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";
import Layout from "./components/layouts/Layout";
import Error from "./pages/Error";
import { productsLoader } from "./utils/routerLoaders";
import { Pages } from "./constants/Nav";

const pagesInfo = Pages.reduce(
  (acc, v) => ({ ...acc, [v.name]: { path: v.path.slice(1) } }),
  {}
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout header footer />,
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
    ],
  },
  {
    path: pagesInfo["SignIn"].path,
    element: <Layout />,
    children: [{ index: true, element: <SignIn /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
