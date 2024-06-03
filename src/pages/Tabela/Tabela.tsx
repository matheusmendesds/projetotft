
import Menu from "@/components/Menu"
import criarTabela from "@/components/Itens"
const campeoes=[
   {id:"",nome:"",origin:"",classe:"",custo:"",vida:"",dano:""},
]
const itens=[
    {id:1,nome:"Efeito Azul",itemum:"Lagrima da Deusa",itemdois:"Lagrima da Deusa"},
    {id:2,nome:"Capuz da Morte",itemum:"Bastão Desneciessariamente",itemdois:"Bastão Desneciessariamente"},
    {id:3,nome:"Manopla Adornada",itemum:"Luva Pugilista",itemdois:"Bastão Desneciessariamente"},
    {id:4,nome:"Limiar da Noite",itemum:"Espada G.p.C",itemdois:"Cota de Malha"},
    {id:5,nome:"Hand of Justice",itemum:"Luva Pugilista",itemdois:"Lágrima da Noite"},
    {id:6,nome:"Gume do Infinito",itemum:"Espada G.p.C",itemdois:"Luva Pugilista"},
    {id:7,nome:"Redenção",itemum:"Lágrima da Deusa",itemdois:"Cinto do Gigante"},
    {id:8,nome:"Placa Gargolitica",itemum:"Cota de Malha",itemdois:"Capa Negatron"},
    {id:9,nome:"Armadura de Warmog",itemum:"Cinto do Gigante",itemdois:"Cinto do Gigante"},
    {id:10,nome:"Pistola Limiar",itemum:"Espada G.p.C",itemdois:"Bastão Desneciessariamente"},
    {id:12,nome:"Lamina Mortal",itemum:"Espada G.p.C",itemdois:"Espada G.p.C"},
    {id:13,nome:"Mata-Gigantes",itemum:"Espada G.p.C",itemdois:"Arco recurvo"},
    {id:14,nome:"Lança de Shojin",itemum:"Espada G.p.C",itemdois:"Lágrima da Deusa"},
    {id:15,nome:"Colete Espinnhoso",itemum:"Cota de Malha",itemdois:"Cota de Malha"},
    {id:16,nome:"Elmo Adaptativo",itemum:"Lágrima da Deusa",itemdois:"Capa Negatron"},
    {id:17,nome:"Ultimo Sussurro",itemum:"Arco Recurvo",itemdois:"Luva Pugilista"},
    {id:18,nome:"Canhão Fumegante",itemum:"Arco recurvo",itemdois:"Arco Recurvo"},
    {id:19,nome:"Faca de Statik",itemum:"Lágrima da Deusa",itemdois:"Arco Recurvo"},
    {id:20,nome:"Juramento de Protetor",itemum:"Cota de malha",itemdois:"Lagrima da Deusa"},
    {id:21,nome:"Sedento por Sangue",itemum:"Espada G.p.C",itemdois:"Capa Negatron"},
    {id:22,nome:"Determinação Titanica",itemum:"Cota de Malha",itemdois:"Arco Recurvo"},
    {id:23,nome:"Quebra-Guarda",itemum:"Cinto do Gigante",itemdois:"Luva Pugilista"},
    {id:24,nome:"Stemmaguarda",itemum:"Bastão Desne.",itemdois:"Cota de malha"},
    {id:25,nome:"Colhetor Noturno",itemum:"Luva Pugilista",itemdois:"Cota de Malha"},
    {id:26,nome:"Mercurio",itemum:"Capa Negatron",itemdois:"Luva Pugilista"},
    {id:27,nome:"Lamina Mortal",itemum:"Espada G.p.C",itemdois:"Espada G.p.C"},
    {id:28,nome:"Capa de Fogo Solar",itemum:"Cota de Malha",itemdois:"Cinto do Gigante"},
    {id:29,nome:"Luvas do ladrão",itemum:"Luva Pugilista",itemdois:"Luva Pugilista"},
    {id:30,nome:"Cajado do Arcanjo",itemum:"Lágrima da Deusa",itemdois:"Bastão Desne."},
    {id:31,nome:"Centelha Ionica",itemum:"Bastão Desne.",itemdois:"Capa Negatron"},
    {id:32,nome:"Dente de Na'Shor",itemum:"Arco Recurvo",itemdois:"Cinto do Gigante"},
    {id:33,nome:"Coroa do Estrategista",itemum:"spatula",itemdois:"spatula"},
    {id:34,nome:"Furacão de Runaan",itemum:"Arco Recurvo",itemdois:"Capa Negatron"},
    {id:35,nome:"Garra do Dragão",itemum:"Capa Negatron",itemdois:"Capa Negatron"},
    {id:36,nome:"Lâmina da furia de Guinsoo",itemum:"Bastão Desne",itemdois:"Arco Recurvo"},
    {id:37,nome:"Morellonomicon",itemum:"Bastão desne.",itemdois:"Cinto do Gigante"},
    {id:38,nome:"Proteção Imutável",itemum:"Capa Negatron",itemdois:"Cinto do Gigante"},
    {id:39,nome:"Sinal de Sterak",itemum:"Espada G.p.C",itemdois:"Cinto do Gigante"}
    ]

export default function Tabela(){
    return(
        <div>
            <div className="flex">
                <Menu/>
            </div>
            <div>
                {criarTabela({itens})}
            </div>
        </div>
    )
}