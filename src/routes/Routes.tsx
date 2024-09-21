import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home/Home";
import AboutUs from "../pages/AboutUs";
import React from 'react';
import { FAQ } from './../pages/FAQ';
import WishListedItems from "../pages/WishListedItems/WishListedItems";
import { TandC } from "../pages/TandC";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AllProducts from "../pages/AllProducts/AllProducts";
import NoMatch from "../pages/NoMatch";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
          path: "/about-us",
          element: <AboutUs/>
      },
      {
          path: "/faq",
          element: <FAQ/>
      },
      {
          path: "/wish-listed-items",
          element: <ProtectedRoute><WishListedItems/></ProtectedRoute>
      },
      {
          path: "/terms-condition",
          element: <TandC/>
      },
      {
          path: "/product-details/:id",
          element: <ProtectedRoute><ProductDetails/></ProtectedRoute>,
          loader : ({params}) => fetch(`https://bonohomebackend.vercel.app/api/v1/product/${params.id}`)
      },
      {
          path: "/all-products",
          element: <AllProducts/>
      },
    ],
  },
]);
