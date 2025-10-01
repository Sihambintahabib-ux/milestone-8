import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Root from './components/Root.jsx';
import Projects from "./components/project/Projects.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    // element: <h1>Element : Hello , I am / path root .</h1>,
    Component : Root,
    children : [
      {index:true, Component: Home},
      { path: 'header' ,Component: Header},
      { path: 'home' ,Component: Home},
      { path: 'projects' ,Component: Projects },
    ]
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
