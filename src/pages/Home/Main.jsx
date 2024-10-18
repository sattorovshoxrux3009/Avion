import './Main.scss'
import image from '../../assets/img/wooden.jpg'
import { NavLink } from 'react-router-dom'

function Main() {
  return (
    <div className='main'>
        <div className="container">
            <div>
                <h1>Doimiy sifatni yaxshi ko'radigan odamlar uchun premium sinfga tegishli mahsulotlar</h1>
                <p>Bizning yangi kolleksiyamiz bilan bugungi kunda uy jihozlaridan tortib maishiy texnikagacha bo'lgan 50 dan ortiq tovarlarni korishingiz mumkin</p>
                <NavLink to='/product'><button>Mahsulotlarni ko'rish</button></NavLink>   
            </div>
        </div>
        <img src={image} alt="" />
    </div>
  )
}

export default Main