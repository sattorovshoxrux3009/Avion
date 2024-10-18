import "./Contact.scss"
import check from "../../assets/img/check.svg"

function Contact() {
  return (
    <div className="contact">
        <div className="container">
            <h1>Jamoamizga qo'shiling va imtiyozlarga ega bo'ling</h1>
            <p>Hamkorlik qilish uchun pastda o'z email manzilingizni qoldiring. Mutaxasislarimiz siz bilan bog'lanishadi!</p>
            <div>
                {["Eksklyuziv takliflar","Bepul seminarlar","Katta chegirmalar"].map((text,index)=>(
                    <span key={index}>
                        <img src={check} alt="" />
                        <h4>{text}</h4>
                    </span>
                ))}
            </div>
            <form>
                <input type="email" required placeholder="sizning@email.com" />
                <button type="submit">Qo'shilish</button>
            </form>
        </div>
    </div>
  )
}

export default Contact