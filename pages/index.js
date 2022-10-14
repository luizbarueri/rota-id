
export default function Home() {
    
    const id = '1'

    return (
        <div>
            <div>Olá, acho que meu logo não pode ser carregado sem css</div>
            <ol>
                <li><a href="./produtos/1">Produto 1</a></li>
                <li><a href="./produtos/1">Produto 2</a></li>
                <li><a href={"./database/" + id}>cliente id = {id} em db.json</a></li>
            </ol>
            <div>
                <label>Entre com um ID:</label><input id="id" type="number"></input>
            </div>
        </div>

    )
}