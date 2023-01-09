import Image from 'next/image'
import { GoMail } from "react-icons/go";
import styles from "../styles/footer.module.css"
import { Link } from "react-scroll";

export default function ItaipuMall() {
    return (
        <div className={`${styles.quemSomos}`}>
            <div className="grid grid-cols-2">
                <div className="col-span-2 xl:col-span-1 w-3/4 xl:w-3/4 2xl:w-2/4 m-auto py-10">
                    <h2 className={`text-secondary-10 uppercase text-3xl mb-10 font-semibold ${styles.footer}`}>itaipu mall</h2>
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
                        <button type="" className="mt-24 w-full px-6 py-2.5 text-secondary-20 font-light text-2xs leading-tight uppercase border-2 border-secondary-20 hover:bg-secondary-20 hover:text-white transition duration-300 ease-in-out">descubra mais sobre esse empreendimento</button>
                    </Link>
                </div>
                <div className="hidden xl:block col-span-1 bg-itaipuMall bg-cover" id='portfolio'></div>
            </div>
            {/* <div className="grid grid-cols-2 gap-10 w-4/5 mx-auto py-16">
                <div className="col-span-2 xl:col-span-1">
                    <div className="max-w-lg mx-auto">
                        <Image src="/images/itaipu2.png" layout='responsive' width={100} height={100} alt="Imagem ilustrativa" />
                    </div>
                    <p className='lg:hidden text-2xl text-justify font-light py-5 leading-10'>
                        Com cerca de 14 mil m², shopping terá mais de 20 estabelecimentos diversificados, dentre os quais: supermercado, academia, farmácia e pet shop. Além de um amplo estacionamento coberto, o ITAIPU MALL também contará com uma confortável praça de alimentação.
                    </p>
                </div>
                <div className="col-span-2 xl:col-span-1 mx-auto">
                    <ul className='sm:text-2xl'>
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
            </div> */}
        </div>
    )
}