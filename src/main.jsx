import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Element : HELLO FROM REACT ROUTER</div>,
  },
  {
    path: "app",
    element: <div>Element : HELLO FROM app</div>
    // Component: App
  },
  {
    path: "header",
    element: <div>Element:  HELLO FROM Header</div>
    // Component: Header
  },
  {
    path: "home",
    // element: <div>Element : HELLO FROM home</div>
    Component: Home 
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
