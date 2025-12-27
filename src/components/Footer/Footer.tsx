import mainLogoImg from "../../assets/mainLayout/icon.png"

export default function Footer() {
  return (
   <footer className="bg-slate-100 w-full rounded-xl p-5 flex justify-between items-center ">
    <div className="img">
        <img src={mainLogoImg} alt="main logo"  className="w-20 h-20 rounded-full"/>
    </div>
    <div className="rights">
        <p className="text-2xl text-yellow-700 font-bold">All Copy Rights Is Saved </p>
    </div>
   </footer>
  )
}
