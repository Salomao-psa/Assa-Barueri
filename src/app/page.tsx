import Image from "next/image";
import New from '../../public/Assets/new.png'
export default function Home() {
  return (
    
    <>
    <div className="carousel">
      <Image src={New} alt="Nova unidade do Assái em Barueri "/>
      </div>
    <div className="mx-auto px-10 z-50">
    <div className="unidade grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-200 mt-2 border-2 border-orange-900 rounded-lg">
      <div className="mb-5 text-center border-2 border-orange-600">
        
        <h2 className="text-center text-[36px] text-blue-600">Assaí Barueri Avenida do Café</h2>
        <p className="text-center text-blue-600 font-lato">Av. Mário Sadanori Doi - Jardim dos Camargos </p>
        <p className="text-center text-blue-600">Barueri - São Paulo  </p>
        <p >Telefone: (11)7297-1747
Televendas: (11) 4133-8877 <br />
Espaço do Cliente: 0800 773 2322</p>
<p className="font-lato">E-mail: lojabarueri.televendas@assai.com.br</p>
<h2>Horário de funcionamento:</h2><br/>
<p className="font-lato">Segunda a Sábado: das 07:00 às 22:00<br/>
Domingos e Feriados: das 08:00 às 20:00 </p>
      </div>

      <div className="mb-5 text-center border-2 border-orange-600">
      <h2 className="text-center text-[36px] text-blue-600">Assaí Carapicuíba</h2>
        <p className="text-center text-blue-600 font-lato">Avenida Desembargador Doutor Eduardo Cunha De Abreu, 1.455 Vila  </p>
        <p className="text-center text-blue-600">Municipal - Carapicuíba São Paulo - 06328-330 </p>
        <p >Telefone: (11)4189-9600
        Televendas: (11)4189-9602<br />
        Espaço do Cliente: 0800 773 2322</p>
<p className="font-lato">E-mail: loja096.televendas@assai.com.br</p>
<h2>Horário de funcionamento:</h2><br/>
<p className="font-lato">Segunda a Sábado: das 07:00 às 22:00<br/>
Domingos e Feriados: das 08:00 às 20:00 </p>
      </div>

      <div className="mb-5 text-center border-2 border-orange-600">
      <h2 className="text-center text-[36px] text-blue-600">Assaí Osasco</h2>
        <p className="text-center text-blue-600 font-lato">Avenida dos Autonomistas, 1.687 Vila Yara - Osasco </p>
        <p className="text-center text-blue-600">São Paulo - 06020-015 </p>
        <p >Telefone: (11) 3411-5606
        Televendas: (11) 3411-5611<br />
        Espaço do Cliente: 0800 773 2322</p>
<p className="font-lato">E-mail: loja009.televendas@assai.com.br</p>
<h2>Horário de funcionamento:</h2><br/>
<p className="font-lato">Segunda a Sábado: das 07:00 às 22:00<br/>
Domingos e Feriados: das 08:00 às 20:00 </p>
      </div>
    </div>
    </div>
    </>
    
  );
}
