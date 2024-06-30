import './Main.scss'
import image from '../../assets/img/wooden.jpg'
import { NavLink } from 'react-router-dom'

function Main() {
  return (
    <div className='main'>
        <div className="container">
            <div>
                <h1>Luxury homeware for people who love timeless design quality</h1>
                <p>With our new collection, view over 400 bespoke pieces from homeware through to furniture today</p>
                <NavLink to='/product'><button>View collection</button></NavLink>
                
            </div>
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default Main