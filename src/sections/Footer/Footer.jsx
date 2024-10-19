import "./Footer.scss"
import linkedin from "../../assets/img/linkedin.svg"
import facebook from "../../assets/img/facebook.svg"
import instagram from "../../assets/img/instagram.svg"
import telegram from "../../assets/img/telegram.svg"
import { NavLink } from 'react-router-dom'
import { useState } from "react"

function Footer() {
  const [emailValue,setEmailValue]=useState("")
  function scrollTop(){
    window.scrollY(0)
  }
  let bot={
    TOKEN: "8135441285:AAEppK5L4XCO-wJ9MG7P7624YrnXNeZFLIQ",
    chatID: "5055000310",
    message: `SavdoPal jamoangizga qo'shilish so'rovi yuborildi
    %0AXabar yuboruvchi email manzili: ${emailValue}`
  };
  function sendMessage(e){
    e.preventDefault();
    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
    {
      method: "GET",
    })
    .then(
        (success)=>{
            if (success.status == 200) {
                // handleSucces()
            } 
        },
        (error)=>{
            console.log(error)
        }
    )
    setEmailValue("");
  }
  return (
    <div className="footer">
      <div className="container">
        <span className="footer-list">
            <ul>
              <li>
                <h3>Menyu</h3>
                <NavLink onClick={()=>{scrollTop()}} to='/product'>Barcha mahsulotlar</NavLink> 
                <a target="_blank" href="https://t.me/sattorov_shoxrux">Telegram</a>  
                <a target="_blank" href="https://www.linkedin.com/in/shohruh-sattorov-4a821b2b3">Linkedin</a>              
                <a target="_blank" href="https://www.facebook.com/sattorovshoxrux3009">Facebook</a>              
                <a target="_blank" href="https://www.instagram.com/sattorov__shoxrux">Instagram</a>
              </li>
              <li>
                <h3>Turlar</h3>
                {['Crockery','Furniture','Homeware','Plant pots','Chairs',''].map((link,index)=>(
                  <a key={index} href="#">{link}</a>
                ))}
              </li>
              <li>
                <h3>Onlayn do'kon</h3>
                <NavLink onClick={()=>{scrollTop()}} to='/about'>Biz haqimizda</NavLink> 
                <NavLink onClick={()=>{scrollTop()}} to='/about'>Maxfiylik siyosati</NavLink> 
              </li>
            </ul>
          <form onSubmit={(e)=>{sendMessage(e)}}>
            <h1>Jamoamizga qo'shiling</h1>
            <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} type="email" placeholder="sizning@email.com" required />
            <button type="submit">Qo'shilish</button>
          </form>
        </span>
        <hr/>
        <span className="footer-links">
            <p>Mualliflik huquqi 2024 SavdoPal LTD</p>
            <div className="links">
              <a target="_blank" href="https://www.linkedin.com/in/shohruh-sattorov-4a821b2b3"><img src={linkedin}/></a>              
              <a target="_blank" href="https://www.facebook.com/sattorovshoxrux3009"><img src={facebook}/></a>              
              <a target="_blank" href="https://www.instagram.com/sattorov__shoxrux"><img src={instagram}/></a>
              <a target="_blank" href="https://t.me/sattorov_shoxrux"><img src={telegram}/></a>
            </div>
        </span>
      </div>
    </div>
  )
}

export default Footer