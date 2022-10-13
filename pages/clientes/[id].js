import { useRouter } from 'next/router';

function Clientes() {
    const router = useRouter();
    const id = router.query.id

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <div>ID: {id}</div>
        </div>
    )
}

export default Clientes;