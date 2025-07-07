import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import AddProductsForm from "../pages/add-products/AddProductsForm";
import ProductDetails from "../pages/product-details/ProductDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <Products></Products>
            },
            {
                path: `/products/:id`,
                element: <ProductDetails></ProductDetails>
            },
            {
                path: "/add-products",
                element: <AddProductsForm></AddProductsForm>
            }
        ]
    },
]);