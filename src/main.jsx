import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Formulary } from './components/Formulary';
import { Header } from './routers/Header';
import { Error404 } from './routers/Error404';
import './index.css';

const root = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "form/:number?",
        element: <Formulary title= "Title from props"/>
      }
    ],
    errorElement: <Error404/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router = {root}/>
  </React.StrictMode>,
)

