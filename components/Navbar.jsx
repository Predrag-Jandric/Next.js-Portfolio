"use client"

import React from 'react'
import Image from 'next/image'
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md"
import logo from '/public/assets/navbar/logo.JPEG'

function Navbar() {

    const [isMobileActive, setIsMobileActive] = React.useState(true)

    const handleClick = () => {
        setIsMobileActive(prevState => !prevState)
    }

    return (
        <nav className='navbar'>

            <Image className='navbar__logo' src={logo} alt="logo"></Image>


            <section className={`section-nav ${isMobileActive ? 'active' : ''}`}>
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link">about</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">projects</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">contact</a></li>
                </ul>
            </section>

            {/* mobile version */}
            <section onClick={handleClick} className='section-mobile'>
                {isMobileActive ?
                    <MdOutlineMenu className='icon' />
                    : <MdOutlineClose className='icon' />
                }
            </section>
        </nav>
    )
}

export default Navbar