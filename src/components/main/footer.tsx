import Image from "next/image"
import whats from "../../../public/Assets/whats.svg"
import ph from "../../../public/Assets/ph.svg"
import next from "../../../public/Assets/next.svg"
import css from "../../../public/Assets/css.svg"
import Rh from '../../../public/Assets/rh.png'
export default function footer (){
    
    return(
        <>
      <footer>
        <div className="p-10 w-full bg-blue-700 text-gray-200  bottom-0  border-t-8 border-yellow-300">
            {/*mx-auto, resumidamente adiciona margem no eixo X  X<- Elemento ->X  , auto = automatico de forma que o navegador/browser calcula isso igualmente em ambas direções eixos, Ja max-w-7xl seria largura maxima de ate 1280 pixeis pra delimitar a largura em dispositivos maiores para que nao se extenda infinito,*/}
            <div className="max-w-8xl mx-auto ">
                {/*Definindo grid de colunas em diferentes telas com espaçamento de 8px */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 ">
                
                <div className="mb-5 ">
                <h2 className="text-[2em] text-center ">Contatos</h2> 
                <div className="flex space-x-3 justify-center">
                <Image src={whats} className="size-[50px] " alt="WhatsappIcon" />
             
                </div>
                <h1 className="font-lato text-center font-bold "><strong className="text-blue-100">Email: </strong> salomao.psa3@gmail.com</h1>
                
                <h1 className="font-lato text-center font-bold"><strong className="text-blue-100">Whatsapp:  </strong>+55 11 960386314</h1>
                </div>
                
                <div className="mb-5 ">
               <h2 className="text-[2em] text-center  ">Tecnologias Usadas</h2>
               <div className="flex space-x-3 justify-center">
               <Image src={next} className="size-[50px]" alt="icone nextJS" />
               <Image src={css} className="size-[50px]" alt="Icone taiwindCSS"/>
               <Image src={ph} className="size-[50px]"alt="Icone Photoshop" />
               </div>
               
                </div>
                <div className="mb-5">
                <Image src={Rh} className="rounded-[2em] border-2 border-green-500" alt="Me contrata RH"/>
                </div>
               
            </div>
            </div>
        </div>
      </footer>

        </>
    )
}