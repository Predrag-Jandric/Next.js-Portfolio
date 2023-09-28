"use client"

import React from 'react'
import Image from 'next/image'
import logo from '/public/assets/navbar/logo.jpeg'
import MobileNavbar from './MobileNavbar'


function Navbar() {

    return (
        <>
            <nav className='navbar'>

                <Image className='navbar__logo' src={logo} alt="logo"></Image>

                <section className="navbar__section">
                    <ul className="navbar__section__ul">
                        <li className="navbar__section__ul__li">
                            <a href="#" className="navbar__section__ul__li__a">Skills</a>
                        </li>
                        <li className="navbar__section__ul__li">
                            <a href="#" className="navbar__section__ul__li__a">Projects</a>
                        </li>
                        <li className="navbar__section__ul__li">
                            <a href="#" className="navbar__section__ul__li__a">Endorsements</a>
                        </li>
                        <li className="navbar__section__ul__li">
                            <a href="#" className="navbar__section__ul__li__a">Questions</a>
                        </li>
                    </ul>
                </section>
            </nav>

            <MobileNavbar />
        </>
    )
}

export default Navbar