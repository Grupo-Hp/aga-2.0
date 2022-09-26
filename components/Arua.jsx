import Image from 'next/image'
import styles from '../styles/footer.module.css'

export default function Arua() {
    return (
        <div className="grid grid-cols-2 bg-arua">
            <div className={`lg:col-span-1 col-span-2 order-1 ${styles.footer}`}>
                <h2 className='text-3xl p-10 uppercase lg:hidden'>novo empreendimento em charitas</h2>
                <div className={`${styles.aruaImage}`}></div>
            </div>
            <div className="lg:col-span-1 col-span-2 order-2">
                <div className={`p-10 bg-white hidden lg:flex ${styles.footer}`}>
                    <h2 className='text-3xl uppercase'>novo empreendimento em charitas</h2>
                </div>
                <div className='p-10 2xl:w-3/5 text-2xl text-justify font-light'>
                    <p>
                        Um novo conceito arquitetônico próximo a uma das praias mais belas de Niterói. Nosso projeto estará localizado na Região de São Francisco, em Charitas.
                    </p>
                    <p className='py-5'>
                        O empreendimento terá em seu entorno restaurantes, casas de festas, praças e outros diversos pontos importantes do bairro. Em breve, mais informações sobre este empreendimento.
                    </p>
                    <p>
                        Cadastre seu e-mail e receba todas as notificações.
                    </p>
                    <button type="" className="mt-5 w-full px-6 py-2.5 text-primary-10 font-light text-2xs leading-tight uppercase border border-primary-20 hover:bg-primary-10 hover:text-white transition duration-300 ease-in-out">quero receber notificações</button>

                </div>
            </div>
        </div>
    )
}