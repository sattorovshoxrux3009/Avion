import './App.scss'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'

// Pages
import Home from "./pages/Home/Home.jsx"
import About from "./pages/About/About.jsx"
import Privacy from "./pages/Privacy/Privacy.jsx"
import Product from "./pages/Product/Product.jsx"
import PageError from './pages/PageError/PageError.jsx'
import Basket from './pages/Basket/Basket.jsx'
import Pay from "./pages/Pay/Pay.jsx"

// Layouts
import RootLayout from "./layout/RootLayout.jsx"
import { useState } from 'react'

function App() {
  const [count,setCount]=useState(0)
  const [subtotal,setSubtotal]=useState(0)

  const routes=createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout count={count} setCount={setCount}/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/product' element={<Product count={count} setCount={setCount}/>}/>
        <Route path='/basket' element={<Basket count={count} setCount={setCount} subtotal={subtotal} setSubtotal={setSubtotal}/>}/>
        <Route path='/basket/pay' element={<Pay subtotal={subtotal} setSubtotal={setSubtotal} setCount={setCount}/>}/>
        <Route path='*' element={<PageError/> }/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={routes}/>
    </>
  )
}

export default App
