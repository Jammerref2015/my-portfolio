import React from "react"
import image from "../temp_bg.jpg"

export default function Home() {
    return (
        <main>
            <img 
                src={image}
                alt="temp_bg"
                className="absolute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">Adrian Looney</h1>
            </section>
        </main>
    )
}