import Image from 'next/image'
import { GoMail } from "react-icons/go";

export default function ItaipuMall() {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="col-span-1">
                    <h4>itaipu mall</h4>
                    <p>
                        Requinte e luxo transformados em arquitetura. Localizado em uma das áreas mais nobres de Niterói, o novo projeto da Agá Empreendimentos, o ITAIPU MALL, abre espaço para as maiores e mais importantes lojas do Brasil. Com cerca de 14 mil m2, shopping terá mais de 20 estabelecimentos diversificados, dentre os quais: supermercado, academia, farmácia e pet shop. Além de um amplo estacionamento coberto, o ITAIPU MALL também contará com uma confortável praça de alimentação.
                    </p>
                </div>
                <div className="col-span-1">
                    <Image src="/images/itaipu1.png" layout='responsive' width={100} height={100} alt="Imagem ilustrativa" />
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="col-span-1 max-w-lg">
                    <Image src="/images/itaipu2.png" layout='responsive' width={100} height={100} alt="Imagem ilustrativa" />

                </div>
                <div className="col-span-1">
                    <ul>
                        <li className='text-secondary-20'><GoMail className={`text-primary-10 text-2xl`} />&ensp;contato@agaempreendimentos.com</li>
                    </ul>
                    <button type="" className="mt-5 w-full px-6 py-2.5 text-secondary-20 font-light text-2xs leading-tight uppercase border border-secondary-20 hover:bg-secondary-20 hover:text-white transition duration-300 ease-in-out">descubra mais sobre esse empreendimento</button>
                </div>
            </div>
        </>
    )
}