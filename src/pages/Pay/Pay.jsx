import "./Pay.scss"
import creditCard from "../../assets/img/credit-card.svg"
import payFile from "../../assets/img/pay-file.svg"
import payEllips1 from "../../assets/img/pay-ellips1.svg"
import payEllips2 from "../../assets/img/pay-ellips.svg"
import back from "../../assets/img/back.svg"
import hrImg from "../../assets/img/Hr.png"
import Products from "../../assets/data/Products.jsx"
import { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';


function Pay({subtotal,setSubtotal,setCount}) {
  const navigate = useNavigate();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [checking,setChecking]=useState(false)
  const [checked,setChecked]=useState(false)

  function goPay(e){
    e.preventDefault();
    setChecking(true)
    setTimeout(() => {
      setChecking(false)
      setChecked(true)
      setTimeout(() => {
        setChecked(false);
        Products.filter(item=>item.quantity>0).map((product)=>{
          product.quantity=0;
          setSubtotal(0);
          setCount(0);
        })
        navigate('/');
      }, 3000);
    }, 3000);
  }

  // useEffect(()=>{
  //   setTimeout(() => {
  //     setChecked(false)
  //     setChecking(false)
  //   }, 3000);
  // },[checked,checking])
  // setTimeout(() => {
  //   navigate('/basket');
  //   console.log("ssad");
  // }, 3000);
  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    value = value.replace(/(.{4})/g, "$1 ").trim(); 
    setCardNumber(value);
  };

  // Sanani formatlash
  const handleExpiryDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); 
    if (value.length > 2) {
      value = value.slice(0, 2) + "/" + value.slice(2, 4);
    }
    setExpiryDate(value);
  };

  return (
    <>
   <div className="pay">
    <div className="wrapper">
      {(!checking && !checked)  &&
        <>
        <NavLink to="/basket"><img src={back} alt=""  className="closeIcon"/></NavLink>
        <h1><span>Savdo</span>Pal</h1>
        <div className="pay-inner">
          <div className="pay-left">
            <span>
              <img src={creditCard} alt="" />
              <h2>To'lov</h2>
            </span>
            <p>To'lovni amalga oshirish uchun malumotlarni to'liq kiriting</p>
            <form onSubmit={(e)=>{goPay(e)}}>
                  <label>
                Karta raqam
                <input
                  required
                  type="text"
                  maxLength="19"
                  minLength="19"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                  placeholder="XXXX XXXX XXXX XXXX"
                />
              </label>
              <label>
                Amal qilish muddati
                <input
                  required
                  type="text"
                  maxLength="5"
                  minLength="5"
                  value={expiryDate}
                  onChange={handleExpiryDateChange}
                  placeholder="MM/YY"
                />
              </label>
              <button type="submit">To'lash</button>
            </form>
          </div>
          <div className="pay-right">
            <div className="rectangle"></div>
            <div className="pay-right-wrapper"> 
              <div className="pay-top">
                <h2>To'lov haqida</h2>
                <ul>
                  <li>
                    <h3>Buyurtma №</h3>
                    <h3>To'lov miqdori</h3>
                    <h3>QQS</h3>
                    <h3>QQS miqdori</h3>
                  </li>
                  <li>
                    <h4>11458523</h4>
                    <h4>{subtotal.toLocaleString("ru-RU")} so'm</h4>
                    <h4>10%</h4>
                    <h4>{(subtotal*0.1).toLocaleString("ru-RU")} so'm</h4>
                  </li>
                </ul>
              </div>
              <span>
                <img src={payEllips1} alt="" className="ellips1" />
                <img src={payEllips2} alt="" className="ellips2" />
                <img src={hrImg} alt=""  className="hrImg"/>
                <div>
                  <h3>Umumiy tolov</h3>
                  <h2>{(subtotal*1.1).toLocaleString("ru-RU")} so'm</h2>
                </div>
                <img src={payFile} alt="" />
              </span>
            </div>
            
          </div>
        </div>
        </>
      }
   </div>
   </div>
    {checking && 
      <div className="pay-for-checking">
        <div className="wrapper-for-checking">
          <div className="checking">
            <h1><span>Savdo</span>Pal</h1>
            <p>Iltimos kuting sizning to'lovingiz tasdiqlanmoqda</p>
            <div className="loading-spinner">
              <svg className="spinner" viewBox="0 0 50 50">
                <circle
                  className="path"
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  strokeWidth="5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    }
      {checked && 
        <div className="pay-for-checking">
          <div className="wrapper-for-checking">
            <div className="checked">
              <h1><span>Savdo</span>Pal</h1>
              <p>To'lov muvaffaqqiyatli amalga oshirildi.</p>
              <div><div></div></div>
            </div>
          </div>
        </div>
      }
    
   </>
  )
}

export default Pay