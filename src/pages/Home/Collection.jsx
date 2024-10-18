import "./Collection.scss"
import { NavLink } from "react-router-dom"

function Collection() {
    const collection=[
        {
            img: 'https://images.uzum.uz/crrdrik0u44g6jopetsg/original.jpg',
            title: "O'yin kompyuteri",
            price: 4690000
        },
        {
            img: 'https://images.uzum.uz/cr85a6msbq7g1s9bdimg/original.jpg',
            title: "O'yin sichqonchasi",
            price: 159000
        },
        {
            img: 'https://images.uzum.uz/crga01e0t1lqb8ar5bu0/original.jpg',
            title: "Oyin quloqchinlari",
            price: 175000
        },
        {
            img: 'https://images.uzum.uz/cqqsj2nfrr8a72r7pal0/original.jpg',
            title: "Monitor Xtech",
            price: 1099000
        }
    ]

  return (
    <div className="collection">
        <div className="container">
            <ul>
                {collection.map((item,index)=>(
                    <li key={index}>
                        <img src={item.img} alt="" />
                        <h5>{item.title}</h5>
                        <h6>{item.price.toLocaleString("ru-RU")} so'm</h6>
                    </li>
                ))}
            </ul>
            <NavLink to='/product'><button>Mahsulotlarni ko'rish</button></NavLink>
        </div>
    </div>
  )
}

export default Collection