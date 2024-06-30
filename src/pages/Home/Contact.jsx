import "./Contact.scss"
import check from "../../assets/img/check.svg"

function Contact() {
  return (
    <div className="contact">
        <div className="container">
            <h1>Join the club and get the benefits</h1>
            <p>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
            <div>
                {["Exclusive offers","Free events","Large discounts"].map((text,index)=>(
                    <span key={index}>
                        <img src={check} alt="" />
                        <h4>{text}</h4>
                    </span>
                ))}
            </div>
            <form>
                <input type="email" required placeholder="your@email.com" />
                <button type="submit">Sign up</button>
            </form>
        </div>
    </div>
  )
}

export default Contact