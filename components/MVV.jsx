import styles from '../styles/footer.module.css'
import Image from 'next/image'

export default function MVV() {
    return (
        <div className={`${styles.mvv}`}>
            <div className="container mx-auto grid grid-cols-3 gap-x-10">
                <div className="col-span-1">
                    <h3>missão</h3>
                    <Image src="/images/AGA_site_12.png" width="300" height="320" alt="Imagem ilustrativa" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis maxime et earum libero hic, cumque id itaque est similique dolore illum, omnis nostrum quaerat exercitationem assumenda. Quod nam saepe est? Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate veniam aperiam doloribus, molestiae repellendus nam ut rerum laborum nemo natus, hic dolores incidunt facere ab? Vitae a illo velit numquam?
                    </p>
                </div>
                <div className="col-span-1">
                    <h3>visão</h3>
                </div>
                <div className="col-span-1">
                    <h3>valores</h3>
                </div>
            </div>
        </div>
    )
}