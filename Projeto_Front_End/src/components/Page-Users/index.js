import './style.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Userlist = () => {

    const [ users, setUsers ] = useState([]);
    const [ search, setSearch ] = useState('');
    const [ result, setResult ] = useState([]);


    useEffect(() => {
        axios.get('https://randomuser.me/api/?results=100')
            .then((res) => setUsers(res.data.results))
    }, [])

    useEffect(() => {
        const results = users.filter((resp) => 
            resp.email.toLowerCase().includes(search)
        );
        setResult(results)
    
        
    }, [users, search])

    useEffect(() => {
        const results = users.filter((resp) => 
            resp.email.toLowerCase().includes(search)
        );
        setResult(results)
    
        
    }, [users, search])


    return (
        <>
        <title> React - Userlist </title>
        <div className='container-search'>
                <input type='search' placeholder='Search for Email...' onChange={(e) => setSearch(e.target.value)}/>
            </div>
        <div className="container-userlist-table">
            <div className='container'>
                <table className='table-users'>
                    <thead className='thead-users'>
                        <tr className='tr-thead-users'>
                            <th className='th-users'>Image</th>
                            <th className='th-users'>Name</th>
                            <th className='th-users'>Username</th>
                            <th className='th-users'>E-mail</th>
                            <th className='th-users'>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.length <= 0 ? <tr><td>Nada encontrado...</td></tr> : (
                            result.map((user) => (
                                <tr className='tr-tbody-users' key={user.login.sha256}>
                                    <td className='tdImg'><a href={user.picture.medium}><img className='img-user' src={user.picture.medium} alt="img-user"/></a></td>
                                    <td className='tdValues'>{`${user.name.title} ${user.name.first} ${user.name.last}`}</td>
                                    <td className='tdValues'>{user.login.username}</td>
                                    <td className='tdValues'>{user.email}</td>
                                    <td className='tdAge'>{user.dob.age} anos</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )    
}

export default Userlist;