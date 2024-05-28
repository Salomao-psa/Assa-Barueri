import type { Metadata } from "next";
{/*So Pesquisa no google font o nome de alguma font, deve funcionar como uma especie de cdn ou foi baixado um pacote de fonts junto com o next, abaixo tem a importação de um array com as fonts*/}
import { Lato, Lilita_One } from "next/font/google";
import "./globals.css";

import  Header  from '../components/main/Header';
import Footer from "../components/main/footer";
{/* duas constantes pra usar no corpo do nosso projeto*/}
const lato = Lato({ subsets: ["latin"],weight:['400','700'] });
const lilita = Lilita_One({subsets:["latin"],weight:['400']})
export const metadata: Metadata = {
  title: "Assaí Atacadista Portifolio",
  description: "Quero me canditar a vaga, Não apenas gosto de Ti, Como me vejo nessa Area no futuro, Então resolvi fazer uma ''copia'' do Site do Assai pra usar como Curriculo/Portifolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (<>
  
    <html lang="pt-br">
      {/*não esquecer de adiconar no waiwind.config em themee-extend-family fonts e as fonts(conceito cascata a ultima font adicionada ao corpo sera a font ''padrão'' do projeto).*/}
      <body className={`${lato.className} ${lilita.className}`}><Header/>{children}<Footer/></body>
    </html></>
  );
}
