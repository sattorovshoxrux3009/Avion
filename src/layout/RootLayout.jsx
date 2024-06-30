import Footer from "../sections/Footer/Footer.jsx"
import Navbar from "../sections/Navbar/Navbar.jsx"
import { Outlet } from "react-router-dom"

function RootLayout({count,setCount}) {
  return (
    <div>
      <header><Navbar count={count} setCount={setCount}/></header>

      <main><Outlet/></main>

      <footer><Footer/></footer>   
    </div>
  )
}

export default RootLayout