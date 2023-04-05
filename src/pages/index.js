import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className="main">
        <div className="container">
          <h1>Soluções mecânicas <span>personalizadas</span> para seus desafios.</h1>
          <h4>Engenharia de precisão e inovação para projetos mecânicos sob medida.</h4>
          <Link href='/Sobre'>conheça a nossa empresa</Link>
        </div>
      </main>
    </>
  )
}
