import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/Group 1.svg";
import menu from "../../assets/Menu.svg";
import close from "../../assets/close.svg";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-[#222121] w-screen h-16">
            <div className="container flex justify-between p-1">
                <Image src={logo} alt="Logo" />

                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <Image src={menu} alt="menu" />
                    </button>
                </div>

                {/* Seção visível apenas na versão desktop */}
                <section className="desktop-section flex hidden md:flex items-center gap-10">
                    <Link className="desktop-button" href="#about"><button title="Sobre">Sobre</button></Link>
                    <Link className="desktop-button" href="#skills"><button title="Habilidades">Habilidades</button></Link>
                    <Link className="desktop-button" href="#projects"><button title="Projetos">Projetos</button></Link>
                    <Link className="desktop-button" href="#email"><button title="E-mail">E-mail</button></Link>
                </section>

                {menuOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-full h-full p-4 menu flex flex-col gap-10 items-center justify-center">
                                <button onClick={toggleMenu}><Image src={close} alt="close" className="button-close"></Image></button>
                                <Link className="button-nav" href="#about"><button onClick={toggleMenu} title="Sobre">Sobre</button></Link>
                                <Link className="button-nav" href="#skills"><button onClick={toggleMenu} title="Habilidades">Habilidades</button></Link>
                                <Link className="button-nav" href="#projects"><button onClick={toggleMenu} title="Projetos">Projetos</button></Link>
                                <Link className="button-nav" href="#email"><button onClick={toggleMenu} title="E-mail">E-mail</button></Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};
