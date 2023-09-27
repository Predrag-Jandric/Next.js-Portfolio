"use client"

import React, { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";


const Path = (props) => (
    <path
        fill="#FFC654"
        strokeWidth="3"
        stroke="#FFC654"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button onClick={toggle}>
        <svg width="32" height="32" viewBox="0 0 23 18">
            <Path
                d="M 2 2.5 L 20 2.5"
                className="top"
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
            <Path
                d="M 2 16.346 L 20 16.346"
                className="bottom"
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                [
                    "nav",
                    { transform: "translateX(0)" },
                    { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.4 }
                ],
                [
                    "li",
                    { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
                    { delay: stagger(0.05), at: "-0.1" }
                ]
            ]
            : [
                [
                    "li",
                    { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
                    { delay: stagger(0.05, { from: "last" }), at: "<" }
                ],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            [
                "path.top",
                { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
                { at: "<" }
            ],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            [
                "path.bottom",
                { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
                { at: "<" }
            ],
            ...menuAnimations
        ]);
    }, [isOpen]);

    return scope;
}

function MobileNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const scope = useMenuAnimation(isOpen);

    return (
        <div ref={scope}>
            <nav className="mobile__navbar">
                <ul className="mobile__navbar__ul">
                    <li className="mobile__navbar__ul__li">Portfolio</li>
                    <li className="mobile__navbar__ul__li">About</li>
                    <li className="mobile__navbar__ul__li">Contact</li>
                    <li className="mobile__navbar__ul__li">Search</li>
                </ul>
            </nav>
            
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
    );
}

export default MobileNavbar;

