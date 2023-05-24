import './style.css';
import foto from '../../asserts/foto.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Admin = () => {

    const [ result, setResult ] = useState([]);
    
    const username = localStorage.username
    
    const get = () => {
        axios.get(`http://localhost:4000/admin/username/${username}`)
        .then((res) => setResult(res.data[0]))
    }


    
    //console.log(result)

    useEffect(() => {
        get()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(result)

    return (
        <>
            <title>React - Admin</title>
            <div className='container-admin-info'>
                <div className='container-info'>
                    <ul>
                        <li> 
                            <h1>Nome Completo</h1>
                            <p>{result.nome}</p>
                        </li>
                        <li>
                            <h1>Data de Nascimento</h1>
                            <p>{result.nascimento}</p>
                        </li>
                        <li> 
                            <h1>E-mail Pessoal</h1>
                            <p>{result.email}</p>
                        </li>
                        <li>
                            <h1>Token Admin</h1>
                            <p>{result.adminToken}</p>
                        </li>
                    </ul>
                </div>
                <div className='container-photo'>
                    <img src={foto} alt="Foto"/>
                </div>
            </div>
        </>    
    )
}

export default Admin;