import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom'

import '../src/assets/css/index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import TheWorld from './containers/TheWorld'
import TheProcess from './containers/TheProcess'
import TheAuthor from './containers/TheAuthor'
import BeBrave from './containers/BeBrave'
import LangContextProvider from './context/langContext'

const router = createHashRouter([    //`Router` elements array
  {
    element:<Root />,
    path:"/",
    children: [
      {
        path:"/",
        element: <BeBrave />
      },
      {
        path:"/theworld",
        element: <TheWorld />
      },
      {
        path:"/theprocess",
        element: <TheProcess />
      },       
      {
        path:"/theauthor",
        element: <TheAuthor />
      }
    ],
    errorElement:<ErrorPage /> 
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangContextProvider>
    <RouterProvider router={router}>  
    </RouterProvider>
    </LangContextProvider>
  </React.StrictMode>,
)
