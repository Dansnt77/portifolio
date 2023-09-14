import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import projectOne from "../../../assets/image 1.svg";
import Image from "next/image"
import gitHub from "../../../assets/GitHub.svg"
import helPets from "../../../assets/image 2(1).svg"

export const Card = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="w-full max-w-xl">
            <Carousel selectedItem={currentIndex} showArrows={false} showStatus={false} showThumbs={false}>
                <div className="mt-4 w-full h-96 border-4 border-current border-purple-700 rounded flex flex-col items-center p-1 justify-center">
                    <h3 className="text-white font-bold mt-2">Kenzie Burger</h3>
                    <Image className="rounded w-full h-36" src={projectOne} alt="Kenzie Burger" />
                    <p className="text-[#C5BFBF] text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Image className="cursor-pointer w-14 h-14" src={gitHub} alt="GitHub" />
                </div>

                <div className="mt-4 w-full h-96 border-4 border-current border-purple-700 rounded flex flex-col items-center p-1 justify-center">
                    <h3 className="text-white font-bold mt-2">HelPets</h3>
                    <Image className="rounded w-full h-36" src={helPets} alt="HelPets" />
                    <p className="text-[#C5BFBF] text-center mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, aut!Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Image className="cursor-pointer w-14 h-14" src={gitHub} alt="GitHub" />
                </div>
            </Carousel>
        </div>
    );
};
