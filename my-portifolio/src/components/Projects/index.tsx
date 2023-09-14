import Image from "next/image"
import chave from "../../assets/{.png"
import chaveInvert from "../../assets/{.svg"
import { Card } from "./Cards"


export const Projects = () => {
    return (
        <section id="projects" className="mt-6 w-full flex flex-col ">
            <h2 className="font-bold text-xl text-white">PROJETOS <span className="font-bold text-xl text-[#8900F5]">;</span></h2>
            <div className="mt-6 w-full h-full flex flex-col gap ">
                <Image className="" src={chave} alt="chave" />
                <Card />
                <div className="mt-6 w-full flex justify-end">
                    <Image src={chaveInvert} alt="chave" />
                </div>
            </div>
        </section>
    )
}