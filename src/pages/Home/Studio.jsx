import "./Studio.scss"
import { NavLink } from "react-router-dom"

import studio from "../../assets/img/studio.png"

function Studio() {
  return (
    <div className="studio">
        <div className="container">
            <div>
                <h1>It started with a small idea</h1>
                <p>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                <NavLink to='/product'><button>View collection</button></NavLink>
            </div>
            <img src={studio} alt="" />
        </div>
    </div>
  )
}

export default Studio