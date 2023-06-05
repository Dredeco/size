import { useEffect } from "react";
import Head from 'next/head'

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import '@/styles/globals.sass'
import '@/styles/Navbar.sass'
import '@/styles/Footer.sass'
import '@/styles/Home.sass'
import '@/styles/Sobre.sass'
import '@/styles/Contact.sass'
import '@/styles/Services.sass'

import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  
  return (
    <>
      <Head>
        <title>Size</title>
        <meta name="keywords" content="size, SIZE, macaé, macae, região dos lagos, sizepm, projetos mecânicos, projeto mecânico, engenharia, serviços técnicos, design de produtos, design de processos de fabricação, gerenciamento de projetos, gerenciamento de construção, consultoria, indústria"></meta>
        <meta name="description" content="Serviços técnicos especializados em engenharia e soluções em variados setores da indústria." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&family=Barlow:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  )
}
