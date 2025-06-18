"use client"

import type React from "react"
import Image from "next/image"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { karla, montserrat, openSans } from "@/fonts/fonts"

export default function Component() {
    const [email, setEmail] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Email submitted:", email)
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="pt-[18px] pb-[17px] flex bg-gradient-to-r from-[#0075db] to-[#00427c]">
               <div className="relative w-[30px] ml-[15px]">
                <Image src="/logo.png" alt="logo-image" fill className="object-cover"/>
               </div>
                <div className="flex items-center ml-[14px]">
                    <h1 className={`text-white text-[20px] ${karla.className}`} text-xl>Behavior Support</h1>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex flex-col items-center justify-center px-6 py-20">
                <div className="w-full max-w-[285px] mt-[35px]">
                    <form onSubmit={handleSubmit} className="space-y-[26px]">
                        <div className="space-y-1">
                            <Label htmlFor="email" className={`text-[15px] font-medium text-blue-900/50 uppercase tracking-wide ${montserrat.className}`}>
                                E-mail
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-3 h-[41px] bg-gray-100 rounded-[5px] outline-[5px] border-[1px] border-black/20 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                                required
                            />
                        </div>

                        <Button
                            type="submit"
                            className={`w-full bg-blue-600 hover:bg-blue-700  text-white text-[14px] tracking-[1px] font-bold py-[19px] px-6 rounded-[5px] transition-colors ${montserrat.className}`}
                        >
                            CONTINUE
                        </Button>
                    </form>
                </div>

                {/* Footer */}
                <footer className="mt-[76px]">
                    <p className={`text-[10px] text-gray-500 ${openSans.className}`}>Previously known as Kickboard</p>
                </footer>
            </main>
        </div>
    )
}
