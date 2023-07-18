import { Header } from "@/components/Header"
import { Projects } from "@/components/Projects"
import { Skills } from "@/components/Skills"
import { About } from "@/components/about"
import Head from "next/head"

export default function Home() {
  return (

    <div className="h-screen background-color: #121212;">
   
      <Head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');
        </style>
      </Head>
      <main className="h-screen w-screen gap-10 bg-[#121212]">
        <Header />
        <div className="container w-screen h-screen flex flex-col">
          <About />
          <Skills/>
          <Projects/>
        </div>


      </main>
    </div>

  )
}
