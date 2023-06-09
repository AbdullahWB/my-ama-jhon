import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './Components/Shop/Shop';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Inventory from './Components/Inventory/Inventory';
import Login from './Components/Login/Login';
import cartProductLoader from './Loaders/cartProductsLoaders';
import Checkout from './Components/ProceedCheckout/Checkout';
import SingUp from './Components/SingUp/SingUp';
import AuthProvider from './Components/Provider/AuthProvider';
import PrivetRout from './Routs/PrivetRout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>,
        loader: ()=> fetch('http://localhost:3000/totalProducts')
      },
      {
        path: '/orders',
        element: <Orders></Orders>,
        loader: cartProductLoader,
      },
      {
        path: '/inventory',
        element: <Inventory></Inventory>
      },
      {
        path: 'checkout',
        element: <PrivetRout><Checkout></Checkout></PrivetRout>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/singUp',
        element: <SingUp></SingUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
