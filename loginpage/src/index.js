import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LoginPage } from './components/LoginPage/LoginPage';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Page404 } from './components/Page404/Page404';
import AirportList from './components/AirportsList/AirportsList';
import store from './redux/store'
import AirportDetails from './components/AirportDetails/AirportDetails';
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
    errorElement: <Page404 />,
  },
  {
    path: '/airport',
    element: <App />,
    children: [
      {
        path: 'list',
        element: <AirportList />,
      },
      {
        path: 'details/:id',
        element: <AirportDetails />,
      },
    ],
  },
]);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
