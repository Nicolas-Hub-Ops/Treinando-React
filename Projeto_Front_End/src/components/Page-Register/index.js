import './style.css';

const Register = () => {

    return (
        <>
            <title> React - Register </title>
            <div className='container-all-form'>
            <form 
                method='post'
                action='http://localhost:4000/new/client' 
                encType='multipart/form-data' 
                target='http://localhost:3000/customers'
                className='container-form'>
                <fieldset className='container-photo-form'>
                    <input type='file' name='file' placeholder='Photo' required/>
                </fieldset>
                <fieldset className='container-name-form'>
                    <input name='nome' placeholder='Full name' required/>
                </fieldset>
                <fieldset className='container-name-form'>
                    <input name='email' type='email' placeholder='E-mail' required/>
                </fieldset>
                <fieldset className='container-name-form'>
                    <input name='telefone' placeholder='Phone Number' required/>
                </fieldset>
                <fieldset className='container-name-form'>
                    <input name='CPF' placeholder='CPF' required/>
                </fieldset>
                <fieldset className='container-name-form'>
                    <input name='endereco' placeholder='Location' required/>
                </fieldset>
                <div className='container-button-form'>
                    <button 
                        className='button-form'
                        >Submit</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Register;