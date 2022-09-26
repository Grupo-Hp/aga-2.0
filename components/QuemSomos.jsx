import styles from '../styles/footer.module.css'
import Image from 'next/image'

export default function QuemSomos() {
    return (
        <div className={`${styles.quemSomos}`}>
            <div className='w-8/12 mx-auto py-10'>
                <div className={`grid lg:grid-cols-2 gap-10`}>
                    <div className='flex items-center'>
                        <div className="col-span-2 lg:col-span-1 md:text-xl font-light leading-8 text-justify">
                            <h2 className={`text-secondary-10 uppercase text-3xl mb-3 font-semibold ${styles.footer}`}>quem somos</h2>
                            <p className="mb-5 order-1">
                                Somos a Agá Empreendimentos, referencial para quem busca refinamento e requinte arquitetônico. Estamos localizados em Icaraí, uma das áreas mais importantes da cidade de Niterói. Atuamos com Projetos, Reformas, Construção e Incorporação Imobiliária, tendo amplo destaque no cenário Fluminense.
                            </p>
                            <p className='hidden xl:flex'>
                                Nosso trabalho é baseado pela transparência, sendo pautado pela qualidade de vida. Buscamos sempre imprimir em nossos projetos o padrão Agá Empreendimentos, que é norteado pela sofisticação, elegância e aprumo técnico. A Agá Empreendimentos carrega o DNA da inovação e a busca pelo cuidado social e ambiental.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2 lg:col-span-1 order-2">
                        <Image src="/images/queSomos.png" width="865" height="929" alt="Imagem ilustrativa" />
                    </div>
                </div>
                <div className='md:text-xl font-light leading-8 mt-5 xl:hidden order-3 text-justify'>
                    <p>
                        Nosso trabalho é baseado pela transparência, sendo pautado pela qualidade de vida. Buscamos sempre imprimir em nossos projetos o padrão Agá Empreendimentos, que é norteado pela sofisticação, elegância e aprumo técnico. A Agá Empreendimentos carrega o DNA da inovação e a busca pelo cuidado social e ambiental.
                    </p>
                </div>
            </div>
        </div>
    )
}