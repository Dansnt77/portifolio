"use client";
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from "next/image"
import gitHub from "../../../assets/icons8-github(1).svg"
import { projectsData } from "../../../utils/projectsData";
import { useMediaQuery } from 'react-responsive';

interface ProjectsType {
    title: string;
    img: string;
    description: string;
    siteLink: string;
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

    const numCardsToShow = isDesktop ? 3 : 1;

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: numCardsToShow,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {projectsData.map((project: ProjectsType, index) => {
                    return (
                        <div key={project.title} className={`mt-4 ${isDesktop ? 'w-1/3' : 'w-full'}`}>
                            <div className="w-full h-96 border-4 border-current border-purple-700 rounded flex flex-col items-center p-1 justify-center">
                                <h3 className="text-white font-bold mt-2">{project.title}</h3>
                                <div className="image-container relative">
                                    <a className='flex' href={project.siteLink} target="_blank" rel="noopener noreferrer">
                                        <Image
                                            className="rounded max-w-xs h-28 transition-all duration-500 ease-in-out transform hover:scale-105"
                                            src={project.img}
                                            alt={project.title}
                                        />
                                        <div className="overlay absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500 ease-in-out">
                                            <p className="overlay-text text-white">Acessar Site</p>
                                        </div>
                                    </a>
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


