"use client"
import Image from "next/image"
import chave from "../../assets/{.png"
import chaveInvert from "../../assets/{.svg"
import typeScript from "../../assets/icons8-typescript.svg"
import react from "../../assets/icons8-reagir-30.png"
import api from "../../assets/icons8-api-50.png"
import html from "../../assets/icons8-html-50.png"
import postGre from "../../assets/icons8-postgre-sql-a-free-and-open-source-relational-database-management-system-48.png"
import python from "../../assets/icons8-python-50.png"
import node from "../../assets/icons8-node-js-32.png"
import css from "../../assets/icons8-css-30.png"
import js from "../../assets/icons8-javascript.svg"
import expressJS from "../../assets/icons8-express-js-50.png"
import Django from "../../assets/icons8-django-100.png"
import Taiwilnd from "../../assets/icons8-tailwind-css-48.png"
import { useInView } from "react-intersection-observer"
import { SetStateAction, useState } from "react"
import { skills } from "@/utils/projectsData"

interface SkillsType {
    name: string;
    img: string;
}

export const Skills = () => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '200px 0px',
    });

    const [hoverTech, setHoverTech] = useState('')

    const handleMouseEnter = (tech: SetStateAction<string>) => {
        setHoverTech(tech)
    }

    const handleMouseLeave = () => {
        setHoverTech('')
    }

    const handleClick = (tech: SetStateAction<string>) => {
        setHoverTech(tech)
    }



    return (
        <section id="skills" className="mt-20 w-full flex flex-col ">
            <h2 className="font-bold text-xl text-white">HABILIDADES <span className="font-bold text-xl text-[#8900F5]">;</span></h2>

            <div className="mt-6 w-full h-full flex flex-col gap ">
                <Image className="" src={chave} alt="chave" />
                <ul className="flex w-full grid grid-cols-3 items-center p-2 gap-12">
                    {skills.map((skill: SkillsType, index) => {
                        return (
                            <li
                                ref={ref}
                                className={`w-120 h-77 flex items-center flex-col ${inView ? 'typing-effect' : ''}`}
                                onMouseEnter={() => handleMouseEnter(skill.name)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleClick(skill.name)}
                            >
                                <Image className="w-16 h-16 object-contain" src={skill.img} alt={skill.name} />
                                {hoverTech === skill.name && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">{skill.name}</p>}
                            </li>
                        )
                    })}
                </ul>

                <div className="mt-6 w-full flex justify-end">
                    <Image src={chaveInvert} alt="chave" />
                </div>
            </div>
        </section>

    )
}