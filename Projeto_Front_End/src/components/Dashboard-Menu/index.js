import { Link, useLocation } from 'react-router-dom';
import './style.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = (props) => {

    var [ showElement, setShowElement ] = useState('');

    const local = useLocation();

    function seePathPc(path) {
        if(local.pathname === path) {
            return `container-itens-pc-actived`;
        } else {
            return `container-itens-pc`;
        }
    }

    function seePathMovel(path) {
        if(local.pathname === path) {
            return `container-itens-movel-actived`;
        } else {
            return `container-itens-movel`;
        }
    }

    const logout = () => {
        localStorage.clear()
    }

    useEffect(() => {
        setShowElement(true)
    }, [])


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
            <div className='container-title-page'>
                <h1>
                    {props.title}
                </h1>
            </div>
            <div className='menu-pc'>
                <ul className='container-pc'>
                    <li className='perfil-pc'>
                        <img width="100" height="100" src="https://img.icons8.com/ios/100/user--v1.png" alt="user--v1"/>   
                        <p className='nome-pc'>{result.nome}</p>
                        <p className='email-pc'>{result.email}</p> 
                    </li>
                    <Link to='/administrator'>
                        <li className={`${seePathPc('/administrator') }`}>
                            <h3> Area Administrator </h3>                       
                        </li>
                    </Link>
                    <Link to='/userlist'>
                        <li className={`${seePathPc('/userlist')}`}>
                            <h3> User List </h3>
                        </li>
                    </Link>
                    <Link to='/customers'>
                        <li className={`${seePathPc('/customers')}`}>
                            <h3> Customers List </h3>
                        </li>
                    </Link>
                    <Link to='/register'>
                        <li className={`${seePathPc('/register')}`}>
                            <h3> Register Customer </h3>
                        </li>
                    </Link>
                    <Link to='/' onClick={logout}>
                        <li className='container-logout-pc'>
                            <h3> Logout </h3>
                        </li>
                    </Link>
                </ul>
            </div>

            <div className='container-menu-movel'>
                <img 
                    className={showElement === true ? 'menu-movel-icone' : 'menu-movel-icone-disable'} 
                    src="https://img.icons8.com/ios-filled/50/menu--v1.png" 
                    onClick={ () => setShowElement(false) } 
                    alt="menu--v1"
                />
                <div className={ showElement === false ? 'menu-movel' : 'menu-movel-disable' }>
                    <img 
                        className='menu-movel-icone' 
                        src="https://img.icons8.com/color/100/cancel--v1.png"
                        onClick={ () => setShowElement(true) } 
                        alt="close"
                    />
                    <ul className='container-movel'>
                        <li className='perfil-movel'>
                            <img src="https://img.icons8.com/ios/100/user--v1.png" alt="user--v1"/>   
                            <p className='nome-movel'>Nicolas Silva</p>
                            <p className='email-movel'>nicolasnilo14@gmail.com</p>
                        </li>
                        <Link to="/" onClick={ () => setShowElement(true) }>
                            <li className={`${seePathMovel('/')}`}>
                                <h3> Area Administrator </h3>                       
                            </li>
                        </Link>
                        <Link to="/userlist" onClick={ () => setShowElement(true) }>
                            <li className={`${seePathMovel('/userlist')}`}>
                                <h3> User List </h3>                       
                            </li>
                        </Link>
                        <Link to="/customers" onClick={ () => setShowElement(true) }>
                            <li className={`${seePathMovel('/customers')}`}>
                                <h3> Customers List </h3>                       
                            </li>
                        </Link>
                        <Link to="/register" onClick={ () => setShowElement(true) }>
                            <li className={`${seePathMovel('/register')}`}>
                                <h3> Register Customer </h3>                       
                            </li>
                        </Link>
                        <Link>
                            <li className='container-logout-movel'>
                                <h3> Logout </h3>                       
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Dashboard;