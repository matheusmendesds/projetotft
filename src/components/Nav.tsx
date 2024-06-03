import React from "react";
import Link from "next/link";

export default function Nav(props:any) {
    const { visivel } = props;
    return(
        <>
            <header>
                <h1>TFT Help!</h1>
            </header>
            <nav className="flex relative">
                <ul className={`${visivel ? "w-full sm:w-48" : "w-0"} transition-width duration-500 flex flex-col font-bold h-screen fixed pt-20 right-0 bg-half-transparent justify-center items-center`}>
                    <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:bg-menu hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}><Link href={"/"}>Home</Link></li>
                    <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:bg-menu hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}><Link href={"/Tabela/Tabela"}>Tabelas</Link></li>
                    <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:bg-menu hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}><Link href={"/"}></Link>Alguma coisa Aqui</li>
                    <li className={`${visivel ? 'flex' : 'hidden'} text-white hover:bg-menu hover:text-salmon w-full sm:w-32 m-1 p-5 justify-center`}><Link href={"/Contato/Contato"}>CONTATO</Link></li>
                </ul>
            </nav>
        </>
    )
}   


