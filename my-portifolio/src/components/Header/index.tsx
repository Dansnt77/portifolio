import logo from "../../assets/Group 1.svg";
import menu from "../../assets/Menu.svg";
import Image from "next/image";
import close from "../../assets/close.svg";
import React, { useState } from 'react';
import Link from "next/link";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-[#222121] w-screen h-16">
            <div className="container flex justify-between p-1">
                <Image src={logo} alt="Logo" />

                {/* Ícone do menu que ativa o menu de navegação em dispositivos móveis */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <Image src={menu} alt="menu" />
                    </button>
                </div>

                {/* Botões de navegação em dispositivos desktop */}
                <div className="hidden md:flex gap-4 items-center">
                    <Link className="button-nav h-10 text-auto" href="#about"><button title="Sobre">Sobre</button></Link>
                    <Link className="button-nav h-10 text-auto" href="#skills"><button title="Habilidades">Habilidades</button></Link>
                    <Link className="button-nav h-10 text-auto" href="#projects"><button title="Projetos">Projetos</button></Link>
                    <Link className="button-nav h-10 text-auto" href="#email"><button title="E-mail">E-mail</button></Link>
                </div>

                {/* Menu de navegação que aparece quando o ícone do menu é clicado em dispositivos móveis */}
                {menuOpen && (
                    <div className="fixed inset-0 flex justify-center items-center z-50">
                        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
                        <div className="absolute inset-0 flex justify-center items-center">
                            <div className="w-full h-full p-4 menu flex flex-col gap-10 items-center justify-center ">
                                <button onClick={toggleMenu}><Image src={close} alt="close"></Image></button>
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
