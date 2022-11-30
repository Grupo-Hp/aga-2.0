import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <div className={`h-[80vh] flex items-center border-b-8 border-secondary-20 ${styles.header}`}>
            <div className="flex justify-center w-8/12 mx-auto">
                <div className="grid grid-cols-2 gap-20">
                    <div className="hidden lg:col-span-1 lg:flex items-center order-2 md:order-1">
                        <Image src="/images/AGA_site_12.png" width="576" height="505" alt="Imagem ilustrativa" />
                    </div>
                    <div className="col-span-2 lg:col-span-1 flex items-center order-1 md:order-2">
                        <h1 className='text-white text-4xl sm:text-6xl font-light max-w-sm text-center lg:text-left'>REQUINTE E SOFISTICAÇÃO EM FORMA DE TRAÇOS</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}