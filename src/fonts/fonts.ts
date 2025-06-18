// src\fonts\fonts.ts
import { Karla, Montserrat, Open_Sans } from "next/font/google";


export const karla = Karla({
  subsets: ['latin'], // you can also add 'latin-ext' if needed
  weight: ['400', '700'], // choose weights you want
  variable: '--font-karla', // optional for using with Tailwind
  display: 'swap',
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // choose weights as needed
  variable: '--font-montserrat',       // optional for Tailwind
  display: 'swap',
});

export const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-open-sans',
  display: 'swap',
});