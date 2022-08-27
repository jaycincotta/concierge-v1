import React, { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";

const Burger = ({ menu }) => {
    const [isOpen, _setIsOpen] = useState(false)
    const menuOpenRef = useRef(isOpen);
    const setIsOpen = flag => {
        menuOpenRef.current = flag;
        _setIsOpen(flag);
    }

    // Automatically close the menu if the user clicks outside the menu
    // https://www.w3docs.com/snippets/javascript/how-to-detect-a-click-outside-an-element.html
    useEffect(() => {
        document.addEventListener("click", (evt) => {
            let target = evt.target; // clicked element      
            const burger = document.getElementById("burger");
            do {
                if (target === burger) {
                    return;
                }
                // Go up the DOM
                target = target.parentNode;
            } while (target);
            setIsOpen(false);
        });
    }, [])

    const first = useSpring({
        transform: isOpen
            ? "translate(5px, 32px) rotate(-45deg)"
            : "translate(2px, 5px) rotate(0deg)"
    });
    const second = useSpring({
        transform: isOpen
            ? "translate(10px, 4px) rotate(45deg)"
            : "translate(2px, 19px) rotate(0deg)"
    });
    const third = useSpring({
        transform: isOpen
            ? "translate(5px, 32px) rotate(-45deg)"
            : "translate(2px, 34px) rotate(0deg)"
    });
    return (
        <>
            <div id="burger" className={`cpc-burger${isOpen ? " open" : ""}`}>
                <svg
                    onClick={() => setIsOpen(!isOpen)}
                    viewBox="0 0 44 44"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <animated.rect width="40" height="4" rx="2" style={first} />
                    <animated.rect width="40" height="4" rx="2" style={second} />
                    <animated.rect width="40" height="4" rx="2" style={third} />
                </svg>
            </div>
            <div id="menu" className={`cpc-mainmenu ${isOpen ? "show" : "hide"}`}>
                {menu}
            </div>
        </>
    );
};

export default Burger;
