import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/bookstorelogo.png";
import login from "../assets/Group 15.png";
import '../login.css'
//https://codepen.io/chouaibblgn45/pen/ZXKdXR
const Login = () => {
    //hacer una estructura/objeto donde guarde los usuario y contraseña
    const users = ["gina", "fer", "nacho"]
    
    const [username, setUsername] = useState(""); 
    

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(users.includes(username)){
            alert("Usted se logueo correctamente")
         }else{  
            alert("Usted no se encuentra logueado, por favor registrese y vuelva a intentar")
         }
        
    }

    //capturar datos del input  y mapear la estructura 
    //en busca del usuario y contraseña
   

    return (
        <div className="container contenedor">
            <header className="row login-header">
                <div className="col-lg-4 col-md-4 col-sm-4 col-8 login-logo">
                    <img src={logo} alt='logo' width="200px"></img>
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8 login-log">
                    <img src={login} alt='logo' width="30px"></img> Login
                </div>
            </header>
            <main className="row">
                <form className='col-lg-6 col-md-6 col-sm-6 form-register' onSubmit={handleSubmit}>
                    <h2 className='register-tittle'>Login</h2>
                    <input type="text" className="input-register" placeholder="Username"  value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <input type="password" className="input-register" placeholder="Password" />
                    <div className="row button-login">
                        <button className = "col-lg-6 col-md-6 col-sm-6" type="submit">
                            <Link to={"/register"}>
                                <span>Check in</span>
                            </Link>

                        </button>
                        <button className = "col-lg-6 col-md-6 col-sm-6" type="submit">
                            <span>Sign in</span>
                        </button>
                    </div>
                </form>

            </main>

        </div>

    )
}

export default Login;