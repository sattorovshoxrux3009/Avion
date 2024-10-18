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
              <h1>Barcha mahsulotlar</h1>
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
                  <h4>{Products[selectedId].price.toLocaleString("ru-RU")} so'm</h4>
                  <hr />
                  <p className="product-description">Mahsulot tavsifi</p>
                  <p><strong>{Products[selectedId].description}</strong></p>
                  <p>O'lchamlari</p>
                  <ul className="product-sizes">
                    <li>
                      <p>Bo'yi</p>
                      <p>{Products[selectedId].height} sm</p>
                    </li>
                    <hr />
                    <li>
                      <p>Eni</p>
                      <p>{Products[selectedId].width} sm</p>
                    </li>
                    <hr />
                    <li>
                      <p>Balandligi</p>
                      <p>{Products[selectedId].depth} sm</p>
                    </li>
                  </ul>
                  <p>Mavjud: </p>
                  <p className="product-left">{Products[selectedId].left} ta</p>
                  {Products[selectedId].quantity==0 && <button className="add-btn" onClick={()=>{plusNumber()}}>Savatga qo'shish</button>}
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
                <p>{item.price.toLocaleString("ru-RU")} so'm</p>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}

export default Product