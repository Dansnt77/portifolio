import Image from "next/image"
import instagram from "../../assets/icons8-instagram(1).svg"
import linkedin from "../../assets/icons8-linkedin(1).svg"
import github from "../../assets/icons8-github(1).svg"
export const Footer = () => {
    return (
        <footer className="flex flex-col justify-center items-center bg-[#222121] h-32">
            <div className="flex">
                <a href="https://www.instagram.com/dansnt_77/"><Image className="" src={instagram} alt="instagram"></Image></a>
                <a href="https://www.linkedin.com/in/danilo-santos-8b1659251/"><Image className="" src={linkedin} alt="linkedin"></Image></a>
                <a href="https://github.com/Dansnt77"><Image className="" src={github} alt="github"></Image></a>
            </div>
            <p className="text-center text-white">✋ Obrigado por acessar!</p>
        </footer>
    )

} 