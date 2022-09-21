import React, { useState } from "react";
import Image from "next/image";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="shadow-sm py-7 w-full bg-primary-10 border-b z-50">
                <div className="w-full container mx-auto">
                    <div className="flex items-center h-20 w-full">
                        <div className="flex items-center  mx-20  justify-between w-full">
                            <div className="flex justify-center items-center flex-shrink-0 ">
                                <a href="./"><Image
                                    src="/images/logoAga.svg"
                                    width={120}
                                    height={120}
                                    alt="Logo da AGÁ EMPREENDIMENTOS"

                                /></a>
                            </div>
                            <div className="hidden lg:block">
                                <div className="ml-10 flex items-baseline space-x-10 uppercase">
                                    <a href="./"
                                        className='hover:text-secondary-20 duration-300 rounded-md cursor-pointer text-white'
                                    >
                                        Página inicial
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}