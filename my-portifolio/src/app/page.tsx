"use client"
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/about";
import { Form } from "@/components/form";
import Head from "next/head";
import { Footer } from "@/components/Footer";
import { Projects_BackEnd } from "@/components/Projects_Back";

type Bubble = {
  size: number;
  xPos: number;
  yPos: number;
  animationDuration: number;
  color: string;
};

export default function Home() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const getRandomNumber = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const getRandomColor = () => {
    const colors = ["#66ccff", "#ff00dd", "#9933ff"];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const createBubble = () => {
    return {
      size: getRandomNumber(5, 20),
      xPos: getRandomNumber(0, window.innerWidth),
      yPos: window.innerHeight,
      animationDuration: getRandomNumber(5, 15),
      color: getRandomColor(),
    };
  };

  useEffect(() => {
    const initialBubbles = Array.from({ length: 30 }, () => createBubble());
    setBubbles(initialBubbles);
  }, []);

  useEffect(() => {
    const updateBubbles = () => {
      setBubbles((prevBubbles) => {
        const updatedBubbles = prevBubbles.map((bubble) => {
          const newYPos = bubble.yPos - 1;
          if (newYPos < -bubble.size) {
            return createBubble();
          }
          return { ...bubble, yPos: newYPos };
        });
        return updatedBubbles;
      });
    };

    const animationFrame = requestAnimationFrame(updateBubbles);
    return () => cancelAnimationFrame(animationFrame);
  }, [createBubble]);

  return (
    <>
      <div className="h-screen" style={{ backgroundColor: "#121212" }}>

        <Head>
          <style>
            {`
              @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap");
            `}
          </style>
        </Head>
        <main className="max-h-screen-xl w-screen gap-10">

          <Header />
          <div
            className="absolute inset-0 h-screen pointer-events-none"
            style={{ zIndex: -1 }}
          >
          </div>
          <div className="container max-w-screen-xl max-h-screen-xl flex flex-col">
            <About />
            <Skills />
            <Projects />
            <Projects_BackEnd />
            <Form />
          </div>
          <Footer />
          <div className="footer-container">
            {bubbles.map((bubble, index) => (
              <div
                key={index}
                className="absolute rounded-full bubble"
                style={{
                  width: bubble.size,
                  height: bubble.size,
                  top: bubble.yPos,
                  left: bubble.xPos,
                  backgroundColor: bubble.color,
                  animation: `rise ${bubble.animationDuration}s linear infinite`,
                }}
              ></div>
            ))}
          </div>

        </main>

        <style>
          {`
            @keyframes rise {
              from {
                transform: translateY(100vh);
              }
              to {
                transform: translateY(-40vh);
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
