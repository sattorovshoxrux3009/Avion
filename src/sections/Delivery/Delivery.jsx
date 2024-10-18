import "./Delivery.scss"
import delivery from "../../assets/img/delivery.svg"
import xicon from '../../assets/img/xicon.svg'

function Delivery({setShowDelivery}) {
  
  return (
    <div className="delivery">
        <div className="container">
            <img src={delivery} alt="" />
            <p>200 000 so'm va undan yuqori buyurtmalar uchun yetkazib berish bepul</p>
            <img className="x-icon" onClick={()=>{setShowDelivery(false)}} src={xicon} alt="" />
        </div>        
    </div>
  )
}

export default Delivery