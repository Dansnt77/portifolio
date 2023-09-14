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
        <section id="skills" className="mt-6 w-full flex flex-col ">
            <h2 className="font-bold text-xl text-white">HABILIDADES <span className="font-bold text-xl text-[#8900F5]">;</span></h2>

            <div className="mt-6 w-full h-full flex flex-col gap ">
                <Image className="" src={chave} alt="chave" />
                <ul className="flex w-full grid grid-cols-3 items-center p-2 gap-12">
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex items-center flex-col ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('TypeScript')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('TypeScript')}
                    >
                        <Image className="w-16 h-16 object-contain" src={typeScript} alt="typeScript" />
                        {hoverTech === 'TypeScript' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">TypeScript</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex items-center flex-col  ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('React')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('React')}
                    >
                        <Image className="w-16 h-16 object-contain" src={react} alt="React" />
                        {hoverTech === 'React' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">React</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('API')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('API')}
                    >
                        <Image className="w-16 h-16 object-contain" src={api} alt="API" />
                        {hoverTech === 'API' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">API</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('HTML')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('HTML')}
                    >
                        <Image className="w-16 h-16 object-contain" src={html} alt="HTML" />
                        {hoverTech === 'HTML' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">HTML</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('PostgreSQL')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('PostgreSQL')}
                    >
                        <Image className="w-16 h-16 object-contain" src={postGre} alt="PostgreSQL" />
                        {hoverTech === 'PostgreSQL' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">PostgreSQL</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Python')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('Python')}
                    >
                        <Image className="w-16 h-16 object-contain" src={python} alt="Python" />
                        {hoverTech === 'Python' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">Python</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Node')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('Node')}
                    >
                        <Image className="w-16 h-16 object-contain" src={node} alt="Node" />
                        {hoverTech === 'Node' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">NodeJs</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('CSS')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('CSS')}
                    >
                        <Image className="w-16 h-16 object-contain" src={css} alt="CSS" />
                        {hoverTech === 'CSS' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">CSS</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('JavaScript')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('JavaScript')}
                    >
                        <Image className="w-16 h-16 object-contain" src={js} alt="JavaScript" />
                        {hoverTech === 'JavaScript' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">JavaScript</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('ExpressJS')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('ExpressJS')}
                    >
                        <Image className="w-16 h-16 object-contain" src={expressJS} alt="ExpressJS" />
                        {hoverTech === 'ExpressJS' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">ExpressJS</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('Django')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('Django')}
                    >
                        <Image className="w-16 h-16 object-contain" src={Django} alt="Django" />
                        {hoverTech === 'Django' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">Django</p>}
                    </li>
                    <li
                        ref={ref}
                        className={`w-120 h-77 flex flex-col items-center ${inView ? 'typing-effect' : ''}`}
                        onMouseEnter={() => handleMouseEnter('TailwindCSS')}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => handleClick('TailwindCSS')}
                    >
                        <Image className="w-16 h-16 object-contain" src={Taiwilnd} alt="TailwindCSS" />
                        {hoverTech === 'TailwindCSS' && <p className="text-white whitespace-nowrap overflow-hidden overflow-ellipsis">TailwindCSS</p>}
                    </li>
                </ul>

                <div className="mt-6 w-full flex justify-end">
                    <Image src={chaveInvert} alt="chave" />
                </div>
            </div>
        </section>

    )
}