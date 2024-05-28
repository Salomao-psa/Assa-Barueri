import Image from "next/image";
import Logo from "../../../public/Assets/logo.png"


export default function Header(){
    return(<>
     <header className="containerP w-full h-20  bg-blue-700  border-b-4  border-yellow-500">
    <div className="flex items-center justify-between py-1" >
      <Image src={Logo} className=" ml-10 sm:ml-38 md:ml-36 lg:ml-32 xl:ml-32 2xl:ml-36 w-24 h-full " />
      <div className="px-6">
    <input type="text" name="pesquise" id="text" placeholder="Buscar.." className="px-2 rounded-lg" />
      </div>
    </div>
</header>
<nav className="w-full h-12  bg-blue-700 flex items-center justify-center text-white">
    <span className="flex space-x-5">
        <button className="hover:text-yellow-300">SOBRE NÓS</button>
        <button className="hover:text-yellow-300">APP MEU ASSAÍ</button>
        <button className="hover:text-yellow-300">OFERTAS</button>
        
    </span>
</nav>
</>
    )
}