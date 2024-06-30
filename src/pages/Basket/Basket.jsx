import "./Basket.scss"
import Products from "../../assets/data/Products.jsx"
import deletIcon from "../../assets/img/delete.svg"

function Basket({count,setCount}) {
    let subtotal=0;
    const totalPrice= async ()=>{
        Products.filter(item=>item.quantity>0).map((product)=>{
            subtotal=product.price*product.quantity+subtotal;
        })
    }
   totalPrice();

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
            <h1 className="basket-title">Your shopping cart</h1>
            <div className="titles">
                <h6>Product</h6>
                <span>
                    <h6>Quantity</h6>
                    <h6>Total</h6>
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
                            <p>A timeless ceramic vase with 
                            a tri color grey glaze.</p>
                            <h3>£{product.price}</h3>
                            <p className="list-quantity-mobile">{product.quantity}</p>
                        </span>
                    </div>
                    <div className="list-right">
                        <p>{product.quantity}</p>
                        <p>£{product.price*product.quantity}</p>
                    </div>
                    <img onClick={(e)=>{deleteProduct(product.id,e)}} className="delete-icon" src={deletIcon} alt="" />
                </li>
                ))}
            </ul>
            {count==0 &&
                <h4>Your basket is empty</h4>
            }
            <hr />
            <div className="prices">
                <span>
                    <h3>Subtotal</h3>
                    <h2>£{subtotal}</h2>
                </span>
                <p>Taxes and shipping are calculated at checkout</p>
                {count!=0 && <button>Go to checkout</button>}
            </div>
        </div>
    </div>
  )
}

export default Basket