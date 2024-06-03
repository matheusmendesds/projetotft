import { useState } from "react"
import Icone from "./Icone";
import Nav from './Nav';

export default function Menu(){
    const [visivel, setVisivel] = useState(false);
    return(
        <nav className="absolute z-20 w-full">
            <Icone visivel={visivel} setVisivel={setVisivel}/>
            <Nav visivel={visivel}/>
        </nav>
    )
}
/*<div>
            <div className="menu-header">TFT HELP</div>
            <nav className="flex gap-1">
                <Link href={"/"}>Home</Link>
                <Link href={"TabelaItens/Tabela"}>Tabela de Itens</Link>
                <Link href={""}>Campeões</Link>
                <Link href={""}>Contato</Link>
            </nav>
            <div>

            </div>
       </div> */