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
                <div className='container mx-auto'>
                    <div className="w-11/12 mx-auto grid grid-cols-4">
                        <div className='text-center py-32 col-span-4 lg:col-span-2'>
                            <Link
                                to="home"
                                smooth={true}
                                offset={50}
                                duration={1000}
                            >
                                <Image src="/images/logoAga.svg" width="180" height="180" alt="Logo AGÁ Empreendimentos" />
                            </Link>
                        </div>
                        <div className={`col-span-2 lg:col-span-1 pb-10 my-auto ${styles.decoration}`}>
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
                        <div className="col-span-2 lg:col-span-1 pb-10 my-auto">
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
                                <li><BiMap className={`text-secondary-10 text-4xl`} />&ensp;Rua Miguel de Frias, 77 - Sala 1601, Niterói/RJ</li>
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