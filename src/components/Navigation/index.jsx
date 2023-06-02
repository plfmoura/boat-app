import React, { useState } from 'react'
import logo from '../../../public/vite.svg'
import './navigation.css'
import { BiMenu } from "react-icons/bi";

export default function Navigation() {
    const [user, setUser] = useState(false)

    return (
        <nav className='Navigation-container'>
            <div className='logo-content'>
                <img src={logo} alt="logo da aplicação" />
                <span>Navegue Fácil</span>
            </div>
            <div className='actions-content'>
                <button>Marketplace</button>
                {user ? null : <button>login</button>}
                <BiMenu size={40}/>
            </div>
        </nav>
    )
}
