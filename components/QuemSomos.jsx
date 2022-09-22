import styles from '../styles/footer.module.css'

export default function QuemSomos() {
    return (
        <div className={`${styles.quemSomos}`}>
            <div className={`w-6/12 mx-auto py-10 gap-10 grid grid-cols-2`}>
                <div className="col-span-1 text-justify text-xl font-light leading-8">
                    <h2 className={`text-secondary-10 uppercase text-3xl mb-3 font-semibold ${styles.footer}`}>quem somos</h2>
                    <p className="mb-5">
                        Somos a Agá Empreendimentos, referencial para quem busca refinamento e requinte arquitetônico. Estamos localizados em Icaraí, uma das áreas mais importantes da cidade de Niterói. Atuamos com Projetos, Reformas, Construção e Incorporação Imobiliária, tendo amplo destaque no cenário Fluminense.
                    </p>
                    <p>
                        Nosso trabalho é baseado pela transparência, sendo pautado pela qualidade de vida. Buscamos sempre imprimir em nossos projetos o padrão Agá Empreendimentos, que é norteado pela sofisticação, elegância e aprumo técnico. A Agá Empreendimentos carrega o DNA da inovação e a busca pelo cuidado social e ambiental.
                    </p>
                </div>
                <div className="col-span-1">
                    imagem
                </div>
            </div>
        </div>
    )
}