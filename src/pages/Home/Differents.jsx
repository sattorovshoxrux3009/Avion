import "./Differents.scss"
import differentImg1 from "../../assets/img/different1.svg"
import differentImg2 from "../../assets/img/different2.svg"
import differentImg3 from "../../assets/img/different3.svg"
import differentImg4 from "../../assets/img/different4.svg"

export default function Differents() {
  const cards=[
    {
      img: differentImg1,
      title: "Next day as standard",
      text: "Order before 3pm and get your order the next day as standard"
    },
    {
      img: differentImg2,
      title: "Made by true artisans",
      text: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
      img: differentImg3,
      title: "Unbeatable prices",
      text: "For our materials and quality you won’t find better prices anywhere"
    },
    {
      img: differentImg4,
      title: "Recycled packaging",
      text: "We use 100% recycled to ensure our footprint is more manageable"
    },
  ]

  return (
    <div className="differents">
        <div className="container">
            <h1>What makes our brand different</h1>
            <ul>
              {cards.map((card,index)=>(
                <li key={index}>
                  <img src={card.img} alt="" />
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </li>
              ))}
            </ul>
        </div>
    </div>
  )
}
