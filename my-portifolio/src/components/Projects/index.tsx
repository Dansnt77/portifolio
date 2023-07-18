import Image from "next/image"
import chave from "../../assets/{.png"
import chaveInvert from "../../assets/{.svg"
import projectOne from "../../assets/image 1.svg"
import gitHub from "../../assets/GitHub.svg"
export const Projects = () => {
    return (
        <section className="mt-6 w-full flex flex-col ">
            <h2 className="font-bold text-xl text-white">PROJETOS<span className="font-bold text-xl text-[#8900F5]">;</span></h2>

            <div className="mt-6 w-full h-full flex flex-col gap ">
                <Image className="" src={chave} alt="chave" />
                <ul className="w-full p-1 flex max-w-sm">
                    <li className="mt-4 w-4/6 h-96 border-4 border-current border-purple-700 rounded flex flex-col items-center p-1 justify-center">
                        <Image className="rounded h-36 " src={projectOne} alt="Kenzie Burguer"/>
                        <p className="text-[#C5BFBF] text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Image className="w-14 h-14" src={gitHub} alt="gitHub"/>
                    </li>
                    <li></li>
                    <li></li>
                </ul>
                <div className="mt-6 w-full flex justify-end">
                    <Image src={chaveInvert} alt="chave" />
                </div>
            </div>
        </section>
    )
}