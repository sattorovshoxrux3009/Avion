import "./Differents.scss"
import differentImg1 from "../../assets/img/different1.svg"
import differentImg2 from "../../assets/img/different2.svg"
import differentImg3 from "../../assets/img/different3.svg"
import differentImg4 from "../../assets/img/different4.svg"

export default function Differents() {
  const cards=[
    {
      img: differentImg1,
      title: "1 kunda yetkazib berish",
      text: "Soat 15:00 dan oldin buyurtma bering va buyurtmani ertasi kuni qo'lingizga oling"
    },
    {
      img: differentImg2,
      title: "Mashhur brendlar",
      text: "Dunyo bo'yicha taniqli brendlarning mahsulotlari bizning do'konimizda mavjud"
    },
    {
      img: differentImg3,
      title: "Arzon narx",
      text: "Bunday sifat uchun bundanda yaxshiroq narxni topa olmaysiz"
    },
    {
      img: differentImg4,
      title: "Mustahkam qadoqlash",
      text: "Mahsulotga shikast yetmasligi uchun mustahkam qadoqlash vositalaridan foydalanamiz"
    },
  ]

  return (
    <div className="differents">
        <div className="container">
            <h1>Bizning do'konimiz nimasi bilan farq qiladi?</h1>
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
