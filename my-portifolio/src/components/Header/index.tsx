import logo from "../../assets/Group 1.svg"
import menu from "../../assets/Menu.svg"
import Image from "next/image"

export const Header = () => {

    return (
        <header className="bg-[#222121] w-screen h-16 ">
            <div className="container flex justify-between p-1">
                <Image src={logo} alt="Logo" />
                <Image src={menu} alt="Menu" />
            </div>

        </header>


    )


}