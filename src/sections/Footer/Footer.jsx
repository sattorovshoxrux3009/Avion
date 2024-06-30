import "./Footer.scss"
import linkedin from "../../assets/img/linkedin.svg"
import facebook from "../../assets/img/facebook.svg"
import instagram from "../../assets/img/instagram.svg"
import skype from "../../assets/img/skype.svg"
import twitter from "../../assets/img/twitter.svg"
import pinterest from "../../assets/img/pinterest.svg"

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <span className="footer-list">
          <ul>
            <li>
              <h3>Menu</h3>
              {['New arrivals','Best sellers','Recently viewed','Popular this week','All products'].map((link,index)=>(
                <a key={index} href="#">{link}</a>
              ))}
            </li>
            <li>
              <h3>Categories</h3>
              {['Crockery','Furniture','Homeware','Plant pots','Chairs',''].map((link,index)=>(
                <a key={index} href="#">{link}</a>
              ))}
            </li>
            <li>
              <h3>Our company</h3>
              {['About us','Vacancies','Contact us','Privacy','Returns policy'].map((link,index)=>(
                <a key={index} href="#">{link}</a>
              ))}
            </li>
          </ul>
          <form>
            <h1>Join our mailing list</h1>
            <input type="email" placeholder="your@email.com" required />
            <button>Sign up</button>
          </form>
        </span>
        <hr/>
        <span className="footer-links">
            <p>Copyright 2024 Avion LTD</p>
            <div className="links">
              <a href="#"><img src={linkedin}/></a>              
              <a href="#"><img src={facebook}/></a>              
              <a href="#"><img src={instagram}/></a>
              <a href="#"><img src={skype}/></a>
              <a href="#"><img src={twitter}/></a>             
              <a href="#"><img src={pinterest}/></a>
            </div>
        </span>
      </div>
    </div>
  )
}

export default Footer