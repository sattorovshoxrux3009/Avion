import "./Service.scss"
import { NavLink } from "react-router-dom"

import serviceImg1 from "../../assets/img/service1.png"
import serviceImg2 from "../../assets/img/service2.png"

function Service() {
  return (
    <div className="service">
        <div className="container">
          <h1>A brand built on the love of craftmanship, quality and outstanding customer service</h1>
          <ul>
            <li>
              <h2>From a studio in London to a global brand with over 400 outlets</h2>
              <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
              <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
              <NavLink to='/product'><button>Get in touch</button></NavLink>
            </li>
            <li>
              <img src={serviceImg1} alt="" />
            </li>
            <li>
              <img src={serviceImg2} alt="" />
            </li>
            <li>
              <h2>Our service isn’t just personal, it’s actually hyper personally exquisite</h2>
              <p>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
              <p>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
              <NavLink to='/product'><button>Get in touch</button></NavLink>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Service