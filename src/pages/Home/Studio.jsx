import "./Studio.scss"
import { NavLink } from "react-router-dom"

import studio from "../../assets/img/studio.png"

function Studio() {
  return (
    <div className="studio">
        <div className="container">
            <div>
                <h1>Do'konimiz kichik fikr orqasidan yaratildi</h1>
                <p>Hozirda rivojlangan do'konimiz 2022-yilda Toshkentdagi kichik bir studiyada boshlangan</p>
                <NavLink to='/product'><button>Mahsulotlarni ko'rish</button></NavLink>
            </div>
            <img src={studio} alt="" />
        </div>
    </div>
  )
}

export default Studio