import Image from 'next/image'
import { GoMail } from "react-icons/go";
import styles from "../styles/footer.module.css"
import { Link } from "react-scroll";

export default function ItaipuMall() {
    return (
        <div className={`${styles.quemSomos}`}>
            <div className="grid grid-cols-2">
                <div className="hidden xl:block col-span-1" id='portfolio'>
                    <Image src="/images/itaipu1.png" layout='responsive' width={100} height={100} alt="Imagem ilustrativa" />
                </div>
                <div className="col-span-2 xl:col-span-1 w-3/4 xl:w-3/4 2xl:w-2/4 m-auto py-10">
                    <h2 className={`text-primary-10 uppercase text-3xl mb-10 font-semibold ${styles.footer}`}>private equity</h2>
                    <p className='text-2xl text-justify font-light leading-10'>
                        Requinte e luxo transformados em arquitetura. Localizado em uma das áreas mais nobres de Niterói, o novo projeto da Agá Empreendimentos, o ITAIPU MALL, abre espaço para as maiores e mais importantes lojas do Brasil.
                    </p>
                    <p className='hidden lg:flex text-2xl text-justify font-light py-5 leading-10'>
                        Com cerca de 14 mil m², shopping terá mais de 20 estabelecimentos diversificados, dentre os quais: supermercado, academia, farmácia e pet shop. Além de um amplo estacionamento coberto, o ITAIPU MALL também contará com uma confortável praça de alimentação.
                    </p>
                    <Link to="contato"
                        smooth={true}
                        offset={50}
                        duration={1000}>
                        <button type="" className="mt-24 w-full px-6 py-2.5 text-primary-20 font-light text-2xs leading-tight uppercase border-2 border-primary-20 hover:bg-primary-20 hover:text-white transition duration-300 ease-in-out">saiba mais</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}