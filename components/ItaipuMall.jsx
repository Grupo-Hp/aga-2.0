import Image from 'next/image'
import { GoMail } from "react-icons/go";
import styles from "../styles/footer.module.css"
import { Link } from "react-scroll";

export default function ItaipuMall() {
    return (
        <div className={`${styles.quemSomos}`}>
            <div className="grid grid-cols-2">
                <div className="col-span-1 w-2/4 m-auto">
                    <h2 className={`text-secondary-10 uppercase text-3xl mb-10 font-semibold ${styles.footer}`}>itaípu mall</h2>
                    <p className='text-2xl text-justify font-light leading-10'>
                        Requinte e luxo transformados em arquitetura. Localizado em uma das áreas mais nobres de Niterói, o novo projeto da Agá Empreendimentos, o ITAIPU MALL, abre espaço para as maiores e mais importantes lojas do Brasil.
                    </p>
                    <p className='text-2xl text-justify font-light py-5 leading-10'>
                        Com cerca de 14 mil m2, shopping terá mais de 20 estabelecimentos diversificados, dentre os quais: supermercado, academia, farmácia e pet shop. Além de um amplo estacionamento coberto, o ITAIPU MALL também contará com uma confortável praça de alimentação.
                    </p>
                </div>
                <div className="col-span-1" id='portfolio'>
                    <Image src="/images/itaipu1.png" layout='responsive' width={100} height={100} alt="Imagem ilustrativa" />
                </div>
            </div>
            <div className="grid grid-cols-2 container mx-auto py-16">
                <div className="col-span-1 max-w-lg">
                    <Image src="/images/itaipu2.png" layout='responsive' width={100} height={100} alt="Imagem ilustrativa" />

                </div>
                <div className="col-span-1">
                    <ul className='text-2xl'>
                        <li className='text-secondary-20 flex mt-8'><GoMail className={`text-primary-10 text-4xl`} />&ensp;contato@agaempreendimentos.com</li>
                        <li className='text-secondary-20 flex mt-8'><GoMail className={`text-primary-10 text-4xl`} />&ensp;contato@agaempreendimentos.com</li>
                        <li className='text-secondary-20 flex mt-8'><GoMail className={`text-primary-10 text-4xl`} />&ensp;contato@agaempreendimentos.com</li>
                        <li className='text-secondary-20 flex mt-8'><GoMail className={`text-primary-10 text-4xl`} />&ensp;contato@agaempreendimentos.com</li>
                    </ul>
                    <Link to="contato"
                        smooth={true}
                        offset={50}
                        duration={1000}>
                        <button type="" className="mt-24 w-full px-6 py-2.5 text-secondary-20 font-light text-2xs leading-tight uppercase border-2 border-secondary-20 hover:bg-secondary-20 hover:text-white transition duration-300 ease-in-out">descubra mais sobre esse empreendimento</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}