import Image from 'next/image'
import { GoMail } from "react-icons/go";
import styles from "../styles/footer.module.css"
import { Link } from "react-scroll";

export default function ItaipuMall() {
    return (
        <div className={`${styles.quemSomos}`} id='private'>
            <div className={`grid grid-cols-2`}>
                <div className={`hidden bg-private-equity xl:block col-span-1 bg-cover bg-right`}>
                </div>
                <div className="col-span-2 xl:col-span-1 w-3/4 xl:w-3/4 2xl:w-2/4 m-auto py-10">
                    <h2 className={`text-primary-10 uppercase text-3xl mb-10 font-semibold ${styles.footer}`}>private equity</h2>
                    <p className='text-2xl text-justify font-light leading-10'>
                        Private Equity é uma modalidade de investimento na qual um investidor aporta um valor específico, obtendo lucro após a venda do empreendimento. Trata-se de uma aplicação a médio e longo prazo, que garantem retornos superiores diante os modelos de investimento tradicionais.
                    </p>
                    <p className='hidden lg:flex text-2xl text-justify font-light py-5 leading-10'>
                        Garanta agora sua cota no Condomínio Residencial Aruã e faça parte de um dos maiores investimentos do Rio de Janeiro. Entre em contato agora e descubra como fazer parte deste empreendimento.
                    </p>
                    <Link to="contato"
                        smooth={true}
                        offset={50}
                        duration={1000}>
                        <button type="" className="mt-24 w-full px-6 py-2.5 text-primary-20 font-light text-2xs leading-tight uppercase border-2 border-primary-20 hover:bg-primary-20 hover:text-white transition duration-300 ease-in-out">descubra mais sobre private equity</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}