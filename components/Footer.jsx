import styles from '../styles/footer.module.css'
import Image from 'next/image'
import { Link } from "react-scroll";
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { BiMap } from "react-icons/bi";

export default function Footer() {
    return (
        <>
            <footer className={`text-white ${styles.footer} bg-primary-10`}>
                <div className='w-11/12 mx-auto py-20'>
                    <div className="grid grid-cols-4">
                        <div className='text-center col-span-4 lg:col-span-1'>
                            <Link
                                to="home"
                                smooth={true}
                                offset={50}
                                duration={1000}
                            >
                                <Image className='cursor-pointer' src="/images/logoAga.svg" width="180" height="180" alt="Logo AGÁ Empreendimentos" />
                            </Link>
                        </div>
                        <div className={`col-span-2 lg:col-span-1 pb-10 ${styles.decoration}`}>
                            <h3>menu</h3>
                            <ul>
                                <li><Link
                                    to="home"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Home
                                </Link></li>
                                <li><Link
                                    to="portfolio"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Portfólio
                                </Link></li>
                                <li><Link
                                    to="quemSomos"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Quem somos
                                </Link></li>
                                <li><Link
                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                >
                                    Contato
                                </Link></li>
                                <li><a href='./politica' target='bland'>
                                    Politica de privacidade
                                </a></li>
                            </ul>
                        </div>
                        <div className={`col-span-2 lg:col-span-1 pb-10 ${styles.decoration}`}>
                            <h3>grupo hp</h3>
                            <ul>
                                <li><a href='https://www.hpbank.com.br/' target='bland'>
                                    HP Bank
                                </a></li>
                                <li><a href='https://www.hpcap.com.br/' target='bland'>
                                    HP Capital
                                </a></li>
                            </ul>
                        </div>
                        <div className="col-span-2 lg:col-span-1 pb-10">
                            <h3>contato</h3>
                            <ul>
                                <li><FiPhone className={`text-secondary-10 text-2xl`} />&ensp;(21)4040-4148</li>
                                <Link
                                    to="contato"
                                    smooth={true}
                                    offset={50}
                                    duration={1000}
                                    className={`cursor-pointer hidden sm:flex`}
                                ><li><GoMail className={`text-secondary-10 text-2xl`} />&ensp;contato@agaempreendimentos.com</li></Link>
                                <li><BiMap className={`text-secondary-10 text-3xl`} />Av. Pref. Silvio Picanço, 463 - Sala 708/711, Niterói/RJ</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='pb-3 text-center'>
                    <span>TODOS OS DIREITOS RESERVADOS – AGÁ EMPREENDIMENTOS&copy; 2022</span>
                </div>
            </footer>
        </>
    )
}