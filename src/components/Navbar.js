import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

import Logo from './../../public/logo.png'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container">
            <Link class="navbar-brand" href="/">
                <Image 
                    className='logo'
                    src={Logo}
                    width='75'
                    height='60'
                />
            </Link>

            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav ms-auto">
                        <Link class="nav-link active" aria-current="page" href="/">Início</Link>
                        <Link class="nav-link" href="/Sobre">Sobre</Link>
                        <Link class="nav-link" href="/Servicos">Serviços</Link>
                        <Link class="nav-link" href="/Contato">Contato</Link>
                    </div>
                </div>
            </div>
    </nav>
  )
}
