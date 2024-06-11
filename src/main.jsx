import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from './Redux/Store.js'
import { Provider } from 'react-redux'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Display from './components/Display.jsx'
import Cart from './components/Cart.jsx'
import ProductInfo from './components/ProductInfo.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element={<App/>}>
      <Route path='shop' element={<Display/>}/>
      <Route path='cart' element={<Cart/>}/>
      <Route path='product/:id' element={<ProductInfo/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>

  </React.StrictMode>,
)
