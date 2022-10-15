import React from 'react'
import { Link } from 'react-router-dom'

export const BookPreview = () => {
  return (
    <div className="container">
        <header className="row">
            <div className="col-lg-4">
                Logo
            </div>
            <Link to={"/login"}>
            <div className="col-lg-8">
                Login
            </div>
            </Link>
           

        </header>

        <section className="row">
            <div className="col-lg-12">
                Contenido

            </div>

        </section>

    </div>
  )
}

export default BookPreview