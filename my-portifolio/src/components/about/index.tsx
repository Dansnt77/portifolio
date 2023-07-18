"use client"
import Image from "next/image"
import perfil from "../../assets/Imagem do WhatsApp de 2023-07-17 à(s) 13.16 1.svg"
import React, { useEffect, useState } from 'react';
import chave from "../../assets/{.png"
import chaveInvert from "../../assets/{.svg"

export const About = () => {

    return (

        <section className="mt-6 p-6 w-278 h-6/6 bg-[#151515] flex flex-col items-center border rounded-lg border-[#C1BBBB]">
            <Image src={perfil} alt="Perfil" />
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus augue quis augue condimentum consequat. Aliquam a nisi sed metus posuere pharetra. Proin nec est odio. Duis eget erat nunc. Pellentesque molestie turpis sed aliquam vestibulum.
                </h3>
            </div>

        </section>

    )
}