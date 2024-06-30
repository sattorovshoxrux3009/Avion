import "./Product.scss"
import Products from "../../assets/data/Products.jsx"
import xicon from "../../assets/img/xmark-solid.svg"
import { useState,useRef } from "react"

function Product({count,setCount}) {

  const [selected,setSelected]=useState(false)
  const [selectedId,setSelectedId]=useState(0)

  const myref=useRef(null)

  function selectProduct(id){
    setSelected(true);
    setSelectedId(id);
    myref.current?.scrollIntoView({ behavior: "smooth",block: "end" });
  }

  function plusNumber(){
    if(Products[selectedId].quantity<Products[selectedId].left){
      Products[selectedId].quantity=Products[selectedId].quantity+1;
      setCount(count+1)
    }
  }
  function subsNumber(){
    Products[selectedId].quantity=Products[selectedId].quantity-1;
    setCount(count-1)
  }
  
  return (
    <div className="product">
      <div className="product-top">
        <div className="container">
          <div className="product-title">
              <h1>All products</h1>
          </div>  
        </div>
      </div>
      <div className="container">
          {selected &&
            <> 
              <div ref={myref} className="selected-product">
                <img onClick={()=>{setSelected(false)}} className="xicon" src={xicon} alt="" />
                <img className="product-img" src={Products[selectedId].img} alt="" />
                <span>
                  <h2>{Products[selectedId].name}</h2>
                  <h4>£{Products[selectedId].price}</h4>
                  <hr />
                  <p className="product-description">Product description</p>
                  <p>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                  <p>Dimensions</p>
                  <ul className="product-sizes">
                    <li>
                      <p>Height</p>
                      <p>{Products[selectedId].height}cm</p>
                    </li>
                    <hr />
                    <li>
                      <p>Width</p>
                      <p>{Products[selectedId].width}cm</p>
                    </li>
                    <hr />
                    <li>
                      <p>Depth</p>
                      <p>{Products[selectedId].depth}cm</p>
                    </li>
                  </ul>
                  <p>Pieces left</p>
                  <p className="product-left">{Products[selectedId].left}</p>
                  {Products[selectedId].quantity==0 && <button className="add-btn" onClick={()=>{plusNumber()}}>Add to cart</button>}
                  {Products[selectedId].quantity!=0 && 
                    <div className="buttons">
                      <button onClick={()=>{subsNumber()}}>-</button>
                      <p>{Products[selectedId].quantity}</p>
                      <button onClick={()=>{plusNumber()}}>+</button>
                    </div>
                  }
                </span>
              </div>
              <hr className="line"/>
            </>
          }
          <ul className="product-list">
            {Products.map((item)=>(
              <li onClick={()=>{selectProduct(item.id)}} key={item.id}>
                <img src={item.img} alt="" />
                <h3>{item.name}</h3>
                <p>£{item.price}</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Product