import "./Basket.scss"
import Products from "../../assets/data/Products.jsx"
import deletIcon from "../../assets/img/delete.svg"
import { useEffect } from "react"
import { NavLink } from "react-router-dom"

function Basket({count,setCount,subtotal,setSubtotal}) {
    
    const totalPrice= async ()=>{
        Products.filter(item=>item.quantity>0).map((product)=>{
            setSubtotal(product.price*product.quantity+subtotal);
        })
    }
   useEffect(()=>{
    totalPrice();
   },[]) 

   function deleteProduct(id,e){
        e.target.parentElement.classList.add('deleteAnimate');
        setTimeout(() => {
            setCount(count- Products[id].quantity);
            Products[id].quantity=0;
        }, 500);
   }
    
  return (
    <div className="basket">
        <div className="container">
            <h1 className="basket-title">Savat</h1>
            <div className="titles">
                <h6>Mahsulot</h6>
                <span>
                    <h6>Soni</h6>
                    <h6>Qiymati</h6>
                </span>
            </div>
            <hr />
            <ul>
                {count!=0 && Products.filter(item=>item.quantity>0).map((product)=>(
                <li id="list" key={product.id}>
                    <div className="list-left">
                        <img src={product.img} alt="" />
                        <span>
                            <h2>{product.name}</h2>
                            <p>{product.description.slice(0,50)} ...</p>
                            <h3>{product.price.toLocaleString("ru-RU")} so'm</h3>
                            <p className="list-quantity-mobile">{product.quantity}</p>
                        </span>
                    </div>
                    <div className="list-right">
                        <p>{product.quantity}</p>
                        <p>{product.price*product.quantity.toLocaleString("ru-RU")} so'm</p>
                    </div>
                    <img onClick={(e)=>{deleteProduct(product.id,e)}} className="delete-icon" src={deletIcon} alt="" />
                </li>
                ))}
            </ul>
            {count==0 &&
                <h4>Sizning savatingiz bo'sh</h4>
            }
            <hr />
            <div className="prices">
                <span>
                    <h3>Umumiy qiymat</h3>
                    <h2>{subtotal.toLocaleString("ru-RU")} so'm</h2>
                </span>
                <p>Soliqlar va jo'natmalar kassada hisoblanadi</p>
                {count!=0 && <NavLink to='/basket/pay'><button onClick={()=>{}}>To'lov qilish</button></NavLink>}
            </div>
        </div>
    </div>
  )
}

export default Basket