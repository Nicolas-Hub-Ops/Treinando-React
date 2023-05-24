import { useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    
    const navigate = useNavigate();

    const logar = async (e) => {
        e.preventDefault()
        const object = {
            username,
            password
        }

        try {
            const post = await axios({
                url: "http://localhost:4000/admin/login",
                method: "post",
                data: object
            })
            if(post.data.auth) {
                localStorage.setItem("username", username)
                navigate('/administrator')
            } 
        } catch (error) {
            console.log(error.response)
           setError('*username ou senha inválida*')
        }

    }


    return (
        <>
            <div className='container-signin'>
                <div className="container-title-signin">
                    <h1>Sign</h1>
                    <h2>-in</h2>
                </div>
                <form
                    onSubmit={logar} 
                    className='container-form-signin'>
                    <input 
                        name='username' 
                        onChange={(e) => setUsername(e.target.value)} 
                        type='name' 
                        placeholder='Username' 
                        className='username'
                        required/>
                    <br />
                    <input 
                        name='password' 
                        onChange={(e) => setPassword(e.target.value)} 
                        type='password' 
                        placeholder='Passoword' 
                        className='password'
                        required/>
                    <br />
                    <span style={{ color: 'red' }}>{error}</span>
                    <br />
                    <button className='button-signin'>Submit</button>
                    <br />
                    <Link to='/signup' className='button-signup'>Sign Up</Link>
                </form>
            </div>
        </>
    )
}

export default Signin;