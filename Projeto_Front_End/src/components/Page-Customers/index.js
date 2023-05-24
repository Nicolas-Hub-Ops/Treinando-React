import { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';

const Customers = () => {

    const [ customers, setCustomers ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ result, setResult ] = useState([])
    

    const delUsers = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:4000/delete/client/${id}`);
            const data = res.data;
            console.log(data)
            
        } catch (error) {
            console.log(error)   
        }
    }

    
    useEffect(() => {
        axios.get('http://localhost:4000/list/client/')
            .then((res) => setCustomers(res.data))
        
            console.log(customers)
    }, [customers])

    useEffect(() => {
        const results = customers.filter((resp) => 
            resp.Nome.toLowerCase().includes(search)
        );
        setResult(results)
    }, [search, customers])

    return (
        <>
            <title> React - Customers </title>
            <div className='container-search'>
                <input type='search' placeholder='Search for Name...' onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className='container-area-customers'>
                <ul>
                    {
                        result.length <= 0 ? <h1> Nada foi encontrado </h1> : (
                            result.map((customer) => (
                                <li className='painel-customer' key={customer._id}>
                                    
                                    <div className='container-apresentacao'>
                                        <img className='image-customer' src={`http://localhost:4000/files/${customer.Foto}`} alt='foto'/>
                                        <h1 className='name-customer'>{`${customer.Nome}`}</h1>
                                    </div>

                                    <div className='container-buttons'>
                                        <div className='button-put'>
                                            <input type='button' value='Alterar'/>
                                        </div>
                                        <div className='button-del'>
                                            <input 
                                                type='button' 
                                                value='Apagar'
                                                onClick={() => {
                                                    delUsers(customer._id)
                                                }}
                                                />
                                        </div>
                                    </div>
                                </li>
                            ))
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default Customers;