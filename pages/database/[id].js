import { useRouter } from 'next/router';
const db = require('./db.json')

function Database() {
    const router = useRouter();
    const id = router.query.id

    return (
        <div>
            <h1>Lista de Clientes</h1>
            <div>ID: {JSON.stringify(db.find((cliente) => cliente.id === id))}</div>
        </div>
    )
}

export default Database;