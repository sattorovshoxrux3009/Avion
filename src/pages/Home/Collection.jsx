import "./Collection.scss"
import { NavLink } from "react-router-dom"

import  collectionImg1 from "../../assets/img/collection1.png"
import  collectionImg2 from "../../assets/img/collection2.png"
import  collectionImg3 from "../../assets/img/collection3.png"
import  collectionImg4 from "../../assets/img/collection4.png"

function Collection() {
    const collection=[
        {
            img: collectionImg1,
            title: "The Dandy chair",
            price: 250
        },
        {
            img: collectionImg2,
            title: "Rustic Vase Set",
            price: 155
        },
        {
            img: collectionImg3,
            title: "The Silky Vase",
            price: 125
        },
        {
            img: collectionImg4,
            title: "The Lucy Lamp",
            price: 399
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
                        <h6>£{item.price}</h6>
                    </li>
                ))}
            </ul>
            <NavLink to='/product'><button>View collection</button></NavLink>
        </div>
    </div>
  )
}

export default Collection