import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LoginPage } from './components/LoginPage/LoginPage';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Page404 } from './components/Page404/Page404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <Page404 />,
  },
  {
    path: "/dashboard",
    element: <App />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
