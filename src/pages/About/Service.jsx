import "./Service.scss"
import { NavLink } from "react-router-dom"

import serviceImg1 from "../../assets/img/service1.png"
import serviceImg2 from "../../assets/img/service2.png"

function Service() {
  return (
    <div className="service">
        <div className="container">
          <h1>Sifat va ajoyib mijozlarga xizmat ko'rsatish servisiga asoslangan do'kon</h1>
          <ul>
            <li>
              <h2>Toshkentda 50 dan ortiq savdo nuqtalari va do'konlarga egamiz</h2>
              <p>Biz Uzumni ishga tushurganimizda g'oya oddiy edi. Yuqori sifatli va hamyonbop mahsulotlarni ommaviy bozor uchun olib chiqdik</p>
              <p>Chet elda ishlab chiqarilgan mahsulotlarimiz sizni uyingizni qulayliklarga boyitishiga ishonamiz. Xalqimizning qulayligi uchun har bir viloyatda va shaharda o'nlab do'konlarimizni joylashtirdik. Sizdan ishonch bizdan sifat</p>
              <NavLink to='/product'><button>Mahsulotlar</button></NavLink>
            </li>
            <li>
              <img src={serviceImg1} alt="" />
            </li>
            <li>
              <img src={serviceImg2} alt="" />
            </li>
            <li>
              <h2>Bizning xizmatlarimiz juda maxfiyligi yuqori.</h2>
              <p>Har bir foydalanuvchi mijozimizning malumotlari maxfiy tarzda saqlanadi. Uning karta malumotlari, to'lovlar bilan bog'liq muammo yuzaga kelganda kompaniyamiz butun xarajatlarni qoplab beradi.</p>
              <p>Bizni tanlaganingizdan xursandmiz. Sizdan ishonch bizdan sifat.</p>
              <NavLink to='/product'><button>Mahsulotlar</button></NavLink>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Service