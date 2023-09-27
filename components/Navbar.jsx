"use client"

import React from 'react'
import Image from 'next/image'
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md"
import logo from '/public/assets/navbar/logo.jpeg'
import CustomScrollLink from '../scrollLink';

function Navbar() {

    const [isMobileActive, setIsMobileActive] = React.useState(true)

    const handleClick = () => {
        setIsMobileActive(prevState => !prevState)
    }

    return (
        <nav className='navbar'>

            <Image className='navbar__logo' src={logo} alt="logo"></Image>

            <section className={`navbar__section ${isMobileActive ? 'active' : ''}`}>
                <ul className="navbar__section__ul">
                    <li className="navbar__section__ul__li">
                        <a href="#aboutAnchor" title="about" className="navbar__section__ul__li__a">about</a>
                    </li>
                    <li className="navbar__section__ul__li">
                        <a href="#" className="navbar__section__ul__li__a">projects</a>
                    </li>
                    <li className="navbar__section__ul__li">
                        <a href="#" className="navbar__section__ul__li__a">contact</a>
                    </li>
                </ul>
            </section>

            {/* mobile version */}
            {/* <section onClick={handleClick} className='navbar__section__mobile'>
                {isMobileActive ?
                    <MdOutlineMenu className='navbar__section__mobile__icon' />
                    : <MdOutlineClose className='navbar__section__mobile__icon' />
                }
            </section> */}
        </nav>
    )
}

export default Navbar