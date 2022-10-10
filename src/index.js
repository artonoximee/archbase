import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import 'jquery';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import ErrorPage from './components/ErrorPage';
import LogIn from './components/auth/LogIn';
import Register from './components/auth/Register';

import {UserContextProvider} from "./context/userContext"

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserContextProvider><App /></UserContextProvider>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        element: <LogIn />
      },
      {
        path: "register",
        element: <Register />
      },
    ]
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
