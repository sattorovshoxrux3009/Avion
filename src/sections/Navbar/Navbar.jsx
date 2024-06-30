import "./Navbar.scss"

import { useEffect, useState } from "react"
import { Form, NavLink } from "react-router-dom"

import search from "../../assets/img/Search.svg"
import shoppingCart from "../../assets/img/ShoppingCart.svg"
import xicon from "../../assets/img/xmark-solid.svg"
import searchWhite from '../../assets/img/search-white.svg'
import hamburger from "../../assets/img/hamburger.svg"

import Delivery from "../Delivery/Delivery.jsx"
import Products from "../../assets/data/Products.jsx"

function Navbar({count,setCount}) {

  const [page,setPage]=useState("Home")
  const [showDelivery,setShowDelivery]=useState(false)
  const [showSearch,setShowSearch]=useState(false)
  const [showSearchList,setShowSearchList]=useState(false)
  const [inputValue,setInputValue]=useState('')
  const [showNavbar,setShowNavbar]=useState(false)

  useEffect(()=>{
    if(page=='About' || page== 'Product'){
      setShowDelivery(true)
    }
    else{
      setShowDelivery(false)
    }
  },[page])

  function searchProduct(e){
    e.preventDefault();
    setShowSearch(false)
    setShowSearchList(true)
  }
  
  function closeSearch(){
    setShowSearch(false)
    setShowSearchList(false)
  }
  
  function plusNumber(id){
    console.log(id)
    if(Products[id].quantity<Products[id].left){
      Products[id].quantity=Products[id].quantity+1;
      setCount(count+1)
    }
  }
  function subsNumber(id){
    Products[id].quantity=Products[id].quantity-1;
    setCount(count-1)
  }

  const links=[
    {
      text:"Home",
      to:"/"
    },
    {
      text:"About",
      to:"/about"
    },
    {
      text:"Privacy",
      to:"/privacy"
    },
    {
      text:"Product",
      to:"/product"
    },
  ]

  return (
    <>
    {showDelivery && <Delivery setShowDelivery={setShowDelivery} showDelivery={showDelivery}/>}
    <div className={showDelivery ? "navbar mtop":"navbar"}>
      <div className="container">
        <div>
          <span>
            {showSearch==false && <img onClick={()=>{setShowSearch(true)}} src={search} alt=""/>}
            {showSearch==true && 
            <Form onSubmit={(e)=>{searchProduct(e)}}>
              <input placeholder="Search..." onChange={(e)=>{setInputValue(e.target.value)}} type="text" />
              <button type="submit">
                <img src={searchWhite} alt="" />
              </button>
            </Form>
            }
            <img className="hamburger" onClick={()=>{setShowNavbar(true)}} src={hamburger} alt="" />
          </span>
          <h1>Avion</h1>
          <NavLink to='/basket' onClick={()=>{setPage('Basket');setShowSearchList(false)}}><img src={shoppingCart} alt="" /><p>{count}</p></NavLink>  
        </div>
        <hr/>
        <nav>
          {links.map((link,index)=>(
            <NavLink  key={index} onClick={(e)=>{setPage(e.target.innerHTML);setShowSearchList(false)}} to={link.to}>{link.text}</NavLink>
          ))}
        </nav>    
      </div>
    </div>
    {showSearchList && 
     <div className="search-list">
      <div className="container">
        <h1>Search of '{inputValue}'</h1>
        <img className="x-icon" onClick={()=>{closeSearch()}} src={xicon} alt="" />
        <ul>
          {Products.filter(item=>item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase())).map((item)=>(
            <li key={item.id}>
              <img src={item.img} alt="" />
              <h4>{item.name}</h4>
              <p>£{item.price}</p>
              {Products[item.id].quantity==0 && <button className="add-btn" onClick={()=>{plusNumber(item.id)}}>Add to cart</button>}
              {Products[item.id].quantity!=0 && 
                <div className="buttons">
                  <button onClick={()=>{subsNumber(item.id)}}>-</button>
                  <p>{Products[item.id].quantity}</p>
                  <button onClick={()=>{plusNumber(item.id)}}>+</button>
                </div>
              }
            </li>
          ))}
        </ul>
      </div>
     </div>
    }
    {showNavbar && 
      <div className={showNavbar ? "active navbar-mobile" :"navbar-mobile"}>
        <div className="wrapper">
          <h1>Avion</h1>
          <img src={xicon} onClick={()=>{setShowNavbar(false)}} alt="" />
          {links.map((link,index)=>(
            <NavLink  key={index} onClick={(e)=>{setPage(e.target.innerHTML);setShowSearchList(false);setShowNavbar(false)}} to={link.to}>{link.text}</NavLink>
          ))}
          <NavLink onClick={(e)=>{setPage(e.target.innerHTML);setShowSearchList(false);setShowNavbar(false)}} to='/basket' >Basket</NavLink>
        </div>
      </div>
    }
    </>
  )
}

export default Navbar