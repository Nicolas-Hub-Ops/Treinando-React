import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

/* ELEMENTS */
import Dashboard from './components/Dashboard-Menu';
import Userlist from './components/Page-Users';
import Admin from './components/Page-Admin';
import Customers from './components/Page-Customers';
import Register from './components/Page-Register';
import Signin from './components/Signin';
import Signup from './components/Signup';

function App() {

  const Private = ({ Page, Titulo }) => {
    return localStorage.username ? (
      <>
          <Dashboard title={Titulo} />
          <div className='container-page'>
            <Page />
          </div>
      </>
    ) : 
      <>
        <Signin />
      </>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route 
            path='/' 
            element={ 
              <>
                <Signin />
              </>
            }
            />
            <Route 
            path='/signup' 
            element={ 
              <>
                <Signup />
              </>
            }
            />
        <Route 
            path='/administrator' 
            element={ 
              <>
              <Private Page={Admin} Titulo={"Area do Administrador"} />
              </>
            }
            />
          <Route 
            path='/userlist' 
            element={ 
              <>
              <Private Page={Userlist} Titulo={"User List"} />
              </>
            }
            />
            <Route 
            path='/customers' 
            element={ 
              <>
              <Private Page={Customers} Titulo={"Customers"} />
              </>
            }
            />
            <Route 
            path='/register' 
            element={ 
              <>
              <Private Page={Register} Titulo={"Register"} />
              </>
            }
            />
          <Route path='*' element={<h1> Not Found </h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
