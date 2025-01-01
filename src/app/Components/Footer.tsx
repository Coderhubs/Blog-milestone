import React from 'react'
import Image from 'next/image'
import { Holtwood_One_SC } from "next/font/google";


const holtwoodOneSC = Holtwood_One_SC({
  subsets: ["latin"],
  weight: "400",
});
const Footer = () => {
  return (
    <div>
         <footer className={`mx-auto w-full max-w-container bg-black px-4 sm:px-6 lg:px-8 ${holtwoodOneSC.className}`}>

    <div className="border-t text-center py-10">
   
        {/* Logo */}
        <h2 className="mt-5 text-center text-2xl flex leading-6 space-x-1 justify-around text-white">PenAura</h2>

        <p className="mt-14 text-center text-lg font-sans leading-6 text-zinc-300">© 2022 Tailwind Labs Inc. All rights reserved.</p>
        <div className="mt-8 flex items-center justify-center space-x-4 text-lg font-serif font-thin leading-6 text-white"><a
                href="/privacy-policy">Privacy policy</a>
            <div className="h-4 w-px bg-black">
                
                </div><a href="/changelog">Changelog</a>
        </div>
    </div>
</footer>
    </div>
  )
}

export default Footer
