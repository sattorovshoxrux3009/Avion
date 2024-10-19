import "./Contact.scss"
import check from "../../assets/img/check.svg"
import { useState } from "react"

function Contact() {
    const [emailValue,setEmailValue]=useState("")
    let bot={
    TOKEN: "8135441285:AAEppK5L4XCO-wJ9MG7P7624YrnXNeZFLIQ",
    chatID: "5055000310",
    message: `SavdoPal jamoangizga qo'shilish so'rovi yuborildi
    %0AXabar yuboruvchi email manzili: ${emailValue}`
    };
    function sendMessage(e){
    e.preventDefault();
    fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${bot.message} `,
    {
        method: "GET",
    })
    .then(
        (success)=>{
            if (success.status == 200) {
                // handleSucces()
            } 
        },
        (error)=>{
            console.log(error)
        }
    )
    setEmailValue("");
      }
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
            <form onSubmit={(e)=>{sendMessage(e)}}>
                <input value={emailValue} onChange={(e) => setEmailValue(e.target.value)} type="email" required placeholder="sizning@email.com" />
                <button type="submit">Qo'shilish</button>
            </form>
        </div>
    </div>
  )
}

export default Contact