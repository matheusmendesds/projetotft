function criarTabela({itens}:any){
    return (
        <>
            <table className="tabela">
                <thead className="tabela-titulo">
                    <tr>
                        <th className="coluna-id">Id</th>
                        <th className="linha-titulo ">Nome</th>
                        <th className="linha-titulo ">Item Um</th>
                        <th className="linha-titulo ">Item Dois</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itens.map((item:any) =>(
                            <tr>
                                <td className="linha-id borda-tabela">{item.id}</td>
                                <td className="linha-cont borda-tabela bg-violet-800">{item.nome}</td>
                                <td className="linha-cont borda-tabela bg-violet-900">{item.itemum}</td>
                                <td className="linha-cont borda-tabela bg-violet-900">{item.itemdois}</td>  
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default criarTabela