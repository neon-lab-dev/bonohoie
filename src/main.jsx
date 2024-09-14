import React from 'react'
import ReactDOM from "react-dom/client";
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { Toaster } from 'sonner'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    <Toaster position="top-center" reverseOrder={false} />
  </React.StrictMode>
);