import "./Footer.scss"
import linkedin from "../../assets/img/linkedin.svg"
import facebook from "../../assets/img/facebook.svg"
import instagram from "../../assets/img/instagram.svg"
import telegram from "../../assets/img/telegram.svg"
import { NavLink } from 'react-router-dom'

function Footer() {
  function scrollTop(){
    window.scrollY(0)
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
          <form>
            <h1>Jamoamizga qo'shiling</h1>
            <input type="email" placeholder="sizning@email.com" required />
            <button>Qo'shilish</button>
          </form>
        </span>
        <hr/>
        <span className="footer-links">
            <p>Mualliflik huquqi 2024 Uzum LTD</p>
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