import { useState } from 'react'
import { FiPhone } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from '../styles/footer.module.css'


export default function Contato() {

    const [dataForm, setDataForm] = useState({
        empresa: 'AGÁ Empreendimentos',
        imagem: 'Aga',
        site: 'https://www.agaempreendimentos.com.br/',
        nome: '',
        email: '',
        telefone: '',
        assunto: '',
        mensagem: ''
    })

    const onChangeInput = e => setDataForm({ ...dataForm, [e.target.name]: e.target.value })

    const sendContact = async e => {
        e.preventDefault()

        try {
            await fetch('https://api.grupohp.com.br/send', {
                method: 'POST',
                body: JSON.stringify(dataForm),
                headers: { 'Content-Type': 'application/json' }
            })
            alert('Dados enviado com sucesso!')
        } catch (error) {
            alert('Ocorreu um erro')
        }
    }

    return (
        <div className={`border-t-4 border-secondary-10 ${styles.footer}`}>
            <div className="container mx-auto px-12 py-12 w-8/12">
                <div>
                    <div className="grid grid-cols-2 gap-10 mt-4">
                        <div className="col-span-2 xl:col-span-1">
                            <h4 className='text-3xl text-primary-10 pb-3'>Fale conosco</h4>
                            <p className='text-xl xl:max-w-lg'>Estamos dispostos a sanar quaisquer dúvidas que possam surgir. Caso queira falar conosco, basta preencher o formulário ao lado.</p>
                            <div className='xl:flex xl:flex-col hidden'>
                                <div className='py-7 border-y-2 my-7 list-none'>
                                    <h2 className='text-2xl'>Nossos contatos</h2>
                                    <ul>
                                        <li><FiPhone className={`text-primary-10 text-2xl`} />&ensp;(21)4040-4148</li>
                                        <li><GoMail className={`text-primary-10 text-2xl`} />&ensp;contato@agaempreendimentos.com</li>
                                    </ul>
                                </div>
                                <div>
                                    <h2 className='text-2xl'>Siga-nos</h2>
                                    <div className="flex col-span-1 text-3xl pt-6">
                                        <a href="https://m.facebook.com/profile.php?id=100076179913014" target='blank'><FaFacebookF className="text-primary-10 hover:cursor-pointer hover:duration-300  hover:text-primary-20" /></a>
                                        <a href="https://instagram.com/agaempreendimentos" target='blank'><FaInstagram className="text-primary-10 hover:cursor-pointer hover:duration-300 hover:text-primary-20 mx-3" /></a>
                                        <a href="https://www.linkedin.com/company/agaempreendimentos/" target='blank'><FaLinkedinIn className="text-primary-10 hover:cursor-pointer hover:duration-300 hover:text-primary-20" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 xl:col-span-1">
                            <h4 className='text-3xl text-primary-10 pb-3 hidden xl:flex '>Fale conosco</h4>
                            <form onSubmit={sendContact}>

                                <div className="form-group mb-6">

                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="nome" onChange={onChangeInput} value={dataForm.nome} placeholder="Digite seu nome*" />

                                </div>

                                <div className="form-group mb-6">
                                    <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="email" onChange={onChangeInput} value={dataForm.email} placeholder="Digite seu e-mail*" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="col-span-2 md:col-span-1 form-group mb-6">

                                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="telefone" onChange={onChangeInput} value={dataForm.telefone} placeholder="Digite seu principal telefone*" />

                                    </div>

                                    <div className="col-span-2 md:col-span-1 form-group mb-6">

                                        <div className="flex">
                                            <div className="mb-3 w-full">
                                                <select className="form-select block w-full px-3 py-1.5 text-base text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" aria-label="Default select example" name='assunto' value={dataForm.assunto} onChange={onChangeInput}>
                                                    <option defaultValue>Escolhe o tipo de assunto:</option>
                                                    <option value="Comercial">Comercial</option>
                                                    <option value="Elogio">Elogio</option>
                                                    <option value="Reclamações">Reclamações</option>
                                                    <option value="Dúvidas">Dúvidas</option>
                                                    <option value="Sugestões">Sugestões</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group mb-6">

                                    <textarea className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-primary-20 focus:outline-none" name="mensagem" rows="7" onChange={onChangeInput} value={dataForm.mensagem} placeholder="Escreva aqui..." required ></textarea>

                                    <button type="submit" className="mt-2 w-full px-6 py-2.5 text-primary-10 font-medium text-xs leading-tight uppercase border border-primary-20 hover:bg-primary-10 hover:text-white transition duration-300 ease-in-out">Enviar</button>

                                </div>
                            </form>
                            <div className='grid grid-cols-2 gap-x-24 xl:hidden mt-10 pt-10 border-t-2'>
                                <div className="col-span-1">
                                    <h2 className='text-2xl'>Nossos contatos</h2>
                                    <ul>
                                        <li><FiPhone className={`text-primary-10 text-2xl`} />&ensp;(21)4040-4148</li>
                                        <li><GoMail className={`text-primary-10 text-2xl`} />&ensp;contato@agaempreendimentos.com</li>
                                    </ul>
                                </div>
                                <div className='col-span-1 text-2xl'>
                                    <h2>Siga-nos</h2>
                                    <div className="flex pt-6">
                                        <a href="https://m.facebook.com/profile.php?id=100076179913014" target='blank'><FaFacebookF className="text-primary-10 hover:cursor-pointer hover:duration-300  hover:text-primary-20" /></a>
                                        <a href="https://instagram.com/agaempreendimentos" target='blank'><FaInstagram className="text-primary-10 hover:cursor-pointer hover:duration-300 hover:text-primary-20 mx-3" /></a>
                                        <a href="https://www.linkedin.com/company/agaempreendimentos/" target='blank'><FaLinkedinIn className="text-primary-10 hover:cursor-pointer hover:duration-300 hover:text-primary-20" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}