import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="container">
          <h1>Serviços especializados em engenharia e soluções para a indústria com a <span>SIZE</span>.</h1>
          <h4>Descubra nossos serviços com base em princípios que valorizam nossos clientes, funcionários e a comunidade.</h4>
          <Link href='/Sobre'>conheça a nossa empresa</Link>
        </div>
      </main>
    </>
  )
}
