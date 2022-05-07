import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <nav className='p-4 bg-black mb-3'>
            <Link className='font-medium leading-tight text-3xl text-white inline-block mr-4' to="/">IMDB</Link>

            <Link className='font-medium text-blue-500 text-xl hover:text-blue-400' to="/login">Login</Link>

        </nav>
    )
}

export default NavBar