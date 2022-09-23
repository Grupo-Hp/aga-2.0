import styles from '../styles/footer.module.css'
import Image from 'next/image'

export default function MVV() {
    return (
        <div className={`${styles.mvv}`}>

            <div className="container mx-auto hidden xl:grid grid-cols-3 gap-x-10 my-14">
                <div className="col-span-3 lg:col-span-1">
                    <h3>missão</h3>
                    <Image src="/images/missao.png" width="380" height="253" alt="Imagem ilustrativa" />
                    <p className='w-4/5 leading-7'>
                        Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros.
                    </p>
                </div>
                <div className="col-span-3 lg:col-span-1">
                    <h3>visão</h3>
                    <Image src="/images/visao.png" width="380" height="253" alt="Imagem ilustrativa" />
                    <p className='w-4/5 leading-7'>
                        Ser referência no mercado de Construção Civil em comprometimento, ética profissional e qualidade, se consolidando como uma marca forte e única.
                    </p>
                </div>
                <div className="col-span-3 lg:col-span-1">
                    <h3>valores</h3>
                    <Image src="/images/valores.png" width="380" height="253" alt="Imagem ilustrativa" />
                    <p className='w-4/5 leading-7'>
                        Ética, Transparência e Integridade, buscando sempre as melhores soluções de mercado e construindo relacionamento de longo prazo com nossos clientes, parceiros e colaboradores; Sustentabilidade e Responsabilidade Social, contribuindo sócio e economicamente para as comunidades em que atuamos; Inovação, buscando sempre soluções técnicas mais adequadas e economicamente mais favoráveis.
                    </p>
                </div>
            </div>

            {/* MODO TABLET */}

            <div className="container hidden md:grid gap-y-10 mx-auto my-14 xl:hidden">
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="col-span-1">
                        <Image src="/images/missao.png" width="380" height="253" alt="Imagem ilustrativa" />
                    </div>
                    <div className="col-span-1">
                        <h3>missão</h3>
                        <p>
                            Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="col-span-1">
                        <Image src="/images/visao.png" width="380" height="253" alt="Imagem ilustrativa" />
                    </div>
                    <div className="col-span-1">
                        <h3>visão</h3>
                        <p>
                            Ser referência no mercado de Construção Civil em comprometimento, ética profissional e qualidade, se consolidando como uma marca forte e única.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-10">
                    <div className="col-span-1">
                        <Image src="/images/valores.png" width="380" height="253" alt="Imagem ilustrativa" />
                    </div>
                    <div className="col-span-1">
                        <h3>valores</h3>
                        <p>
                            Ética, Transparência e Integridade, buscando sempre as melhores soluções de mercado e construindo relacionamento de longo prazo com nossos clientes, parceiros e colaboradores; Sustentabilidade e Responsabilidade Social, contribuindo sócio e economicamente para as comunidades em que atuamos; Inovação, buscando sempre soluções técnicas mais adequadas e economicamente mais favoráveis.
                        </p>
                    </div>
                </div>
            </div>

            {/* MODO MOBILE */}

            <div className="container mx-auto my-14 md:hidden w-1/2">
                <div className='mb-16'>
                    <h3>missão</h3>
                    <Image src="/images/missao.png" width="380" height="253" alt="Imagem ilustrativa" />
                    <p>
                        Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros.
                    </p>
                </div>
                <div className='mb-16'>
                    <h3>visão</h3>
                    <Image src="/images/visao.png" width="380" height="253" alt="Imagem ilustrativa" />
                    <p>
                        Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros.
                    </p>
                </div>
                <div className='mb-16'>
                    <h3>valores</h3>
                    <Image src="/images/valores.png" width="380" height="253" alt="Imagem ilustrativa" />
                    <p>
                        Entregar produtos de excelência, respeitando todas as normas de Segurança, Qualidade e Meio ambiente, que superem as expectativas de nossos clientes e parceiros.
                    </p>
                </div>
            </div>
        </div>
    )
}