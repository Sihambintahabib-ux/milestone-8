## what is router : 
router : define different path of a webpage, is based on SPA(Single Page Application) , render the components for different url or path 

## INSTRUCTION OF Install React-router   
- Downoad : ` npm i react-router `
- Create ROUTER and RENDER : add these code into ` main.jsx `
``` 
import React from "react";
import ReactDOM from "react-dom/client";

 import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom"; 



const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello World</div>,
  },
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
```


- ![alt text](image.png)


---

## CREATE DIFFERENT PATH : 
 CREATE `createBrowserRouter ([ array of path ])` FUNCTION : <br>
 ```
const router = createBrowserRouter([
  {
    path: "/", // root path , define path or url
    element: <div>Hello World</div>, // elements : html-tag name  
    Component: Header; // components name only  
  },
]); 
```
## CREATE DIFFERENT PATH (Nested path): 
 CREATE `createBrowserRouter ([ array of path ])` FUNCTION : <br>
 ```
const router = createBrowserRouter([
  {
    path: "/", // root path , define path or url
    element: <div>Hello World</div>, // elements : html-tag name  
    Component: Header; // components name only  
  },
]); 
```

