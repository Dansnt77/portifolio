"use client"
import Image from "next/image"
import perfil from "../../assets/perfil.jpg"
import React from 'react';
import chave from "../../assets/{.png"
import chaveInvert from "../../assets/{.svg"
import instagram from "../../assets/icons8-instagram(1).svg"
import linkedin from "../../assets/icons8-linkedin(1).svg"
import github from "../../assets/icons8-github(1).svg"
import animation from "../../assets/devguy3.gif"

export const About = () => {

    return (

        <section id="about" className="mt-6 p-6 w-278 h-6/6 flex flex-col items-center rounded-lg">
            <div className="flex flex-col md:flex-row gap-5 h-full w-full justify-center items-center">
                <Image src={perfil} alt="Perfil" className="w-48 h-48 perfil" />
                <figure className="w-80 h-60">
                    <Image src={animation} alt="animação" className="h-full w-full" />
                </figure>
            </div>



            <div className="flex mt-3">
                <a href="https://www.instagram.com/dansnt_77/"><Image className="" src={instagram} alt="instagram"></Image></a>
                <a href="https://www.linkedin.com/in/danilo-santos-8b1659251/"><Image className="" src={linkedin} alt="linkedin"></Image></a>
                <a href="https://github.com/Dansnt77"><Image className="" src={github} alt="github"></Image></a>
            </div>
            <div className="mt-6 w-56 h-full flex flex-col ">
                <Image className="" src={chave} alt="chave" />

                <div className="text-center">
                    <p className="font-bold typing-effect text-white">Olá, eu sou</p>
                    <p className="font-bold typing-effect text-base text-[#8900F5]">Danilo Santos</p>
                    <p className="font-bold text-xs typing-effect text-[#B9B6BC]">Desenvolvedor Full-Stack</p>
                </div>
                <div className="mt-6 w-56 flex justify-end">
                    <Image src={chaveInvert} alt="chave" />
                </div>
            </div>

            <div>
                <h3 className="mt-6 font-bold center text-base text-center text-[#C5BFBF] pb-15">
                    Sou Desenvolvedor Web Full-Stack. Adquiri habilidades sólidas na organização e documentação de projetos, sempre buscando me atualizar em diversas tecnologias de programação web. Além disso, possuo conhecimento em metodologias ágeis, o que contribui para minha abordagem colaborativa e centrada na entrega de resultados, possuo inglês básico, Estou aberto a novas oportunidades e ansioso para contribuir com o sucesso de uma equipe talentosa e inovadora.
                </h3>
            </div>

        </section>

    )
}