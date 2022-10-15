import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/bookstorelogo.png";
import login from "../assets/Group 15.png";

const Register = () => {
    return (
        <div className="container contenedor">
            <header className="row login-header">
                <div className="col-lg-4 login-logo">
                    <img src={logo} alt='logo' width="200px"></img>
                </div>
                <div className="col-lg-8 login-log">
                    <img src={login} alt='logo' width="30px"></img> Login
                </div>
            </header>
            <main className="row">
                <form className='col-lg-6 form-register'>
                    <h2 className='register-tittle'>Check in</h2>
                    <input type="text" className="input-register" placeholder="Name" />
                    <input type="text" className="input-register" placeholder="Email" />
                    <input type="password" className="input-register" placeholder="Password" />
                    <input type="password" className="input-register" placeholder="Confirm Password" />
                    <div className='button-register'>
                        <button className='register-button'>
                            <Link to={"/login"}>
                                <span>Check in</span>
                            </Link>

                        </button>
                    </div>
                </form>
            </main>

        </div>

    )
}

export default Register