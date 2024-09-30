import { createBrowserRouter } from "react-router-dom";
import MainLayout from './../layouts/MainLayout';
import Home from "../pages/Home/Home";
import React from 'react';
import { FAQ } from '../pages/FAQ/FAQ';
import WishListedItems from "../pages/WishListedItems/WishListedItems";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import AllProducts from "../pages/AllProducts/AllProducts";
import NoMatch from "../pages/NoMatch";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import AboutUs from "../pages/AboutUs/AboutUs";
import { TermsCondition } from "../pages/TermsCondition/TermsCondition";


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
          element: <TermsCondition/>
      },
      {
          path: "/product-details/:id",
          element: <ProductDetails/>,
          loader : ({params}) => fetch(`https://bonohomebackend.vercel.app/api/v1/product/${params.id}`)
      },
      {
          path: "/all-products/category/:category",
          element: <AllProducts/>,
          
      },
      {
          path: "/all-products",
          element: <AllProducts/>,
      },
    ],
  },
]);
