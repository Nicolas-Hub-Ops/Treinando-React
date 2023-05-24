import { useState } from 'react';
import './style.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {

    const [ nome, setNome ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ nascimento, setNascimento ] = useState('');
    const [ password, setPassword ] = useState('');

    const navigate = useNavigate();

    const create = async (e) => {
        e.preventDefault()
        try {
            const object = {
                nome,
                username,
                email,
                nascimento,
                password
            }

            const post = await axios({
                url: "http://localhost:4000/new/admin/",
                method: "post",
                data: object
            })
            
            console.log(post);
            navigate('/');
        } catch (error) {
            alert('Error')
            console.log(error);
        }
    }

    return (
        <>
            <div className='container-signup'>
                <div className="container-title-signup">
                    <h1>Sign</h1>
                    <h2>-up</h2>
                </div>
                <form
                    onSubmit={create} 
                    className='container-form-signup'>
                    <input 
                        name='nome' 
                        onChange={(e) => setNome(e.target.value)} 
                        type='text' 
                        placeholder='Full Name' 
                        className='username'
                        required/>
                    <br />
                    <input 
                        name='username' 
                        onChange={(e) => setUsername(e.target.value)} 
                        type='text' 
                        placeholder='Username' 
                        className='username'
                        required/>
                    <br />
                    <input 
                        name='email' 
                        onChange={(e) => setEmail(e.target.value)} 
                        type='email' 
                        placeholder='email@dominio.com' 
                        className='username'
                        required/>
                    <br />
                    <input 
                        name='nascimento' 
                        onChange={(e) => setNascimento(e.target.value)} 
                        type='text' 
                        placeholder='dd/mm/aaaa' 
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
                    <button type='submit' className='button-signin'>Submit</button>
                    <br />
                    <Link to='/' className='button-signin'>Sign Up</Link>
                </form>
            </div>
        </>
    )
}

export default Signup;