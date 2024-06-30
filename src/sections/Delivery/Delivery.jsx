import "./Delivery.scss"
import delivery from "../../assets/img/delivery.svg"
import xicon from '../../assets/img/xicon.svg'

function Delivery({setShowDelivery}) {
  
  return (
    <div className="delivery">
        <div className="container">
            <img src={delivery} alt="" />
            <p>Free delivery on all orders over £50 with code easter checkout</p>
            <img className="x-icon" onClick={()=>{setShowDelivery(false)}} src={xicon} alt="" />
        </div>        
    </div>
  )
}

export default Delivery