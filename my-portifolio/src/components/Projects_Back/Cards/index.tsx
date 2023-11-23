"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image, { StaticImageData } from "next/image"
import gitHub from "../../../assets/icons8-github(1).svg"
import { projectsBackEndData } from "../../../utils/projectsData";

interface ProjectsBackType {
    title: string;
    img: StaticImageData | string;
    description: string;
    repositoryLink: string;
}

export const Card = () => {
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        checkScreenSize();

        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const numCardsToShow = isDesktop ? 2 : 1;

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: numCardsToShow,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {projectsBackEndData.map((project: ProjectsBackType) => {
                    return (
                        <div key={project.title} className={`mt-4 ${isDesktop ? 'w-1/3' : 'w-full'}`}>
                            <div className={`w-full h-[${isDesktop ? '30' : '36'}rem] border-4 border-current border-purple-700 rounded flex flex-col items-center p-1 justify-center`}>
                                <h3 className="text-white font-bold mt-2">{project.title}</h3>
                                <div className="image-container-back relative">
                                    <Image
                                        className="rounded max-w-xs w-full h-52 transition-all duration-500 ease-in-out transform hover:scale-105"
                                        src={project.img}
                                        alt={project.title}
                                    />
                                </div>
                                <p className="text-[#C5BFBF] text-center mt-3">{project.description}</p>
                                <a href={project.repositoryLink} target="_blank">
                                    <Image className="cursor-pointer w-14 h-14" src={gitHub} alt="GitHub" />
                                </a>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    );
};


