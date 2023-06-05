import Link from 'next/link'
import {FaRegCircle, FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import Image3d from './../../public/3dmodel3.jpg'
import desenho from './../../public/desenho1.jpg'
import sms from './../../public/sms.png'
import worker from './../../public/worker1.jpg'
import Image from 'next/legacy/image'

let sliders = [
  {name: 'Dimensionamento e cálculo estrutural', description: 'Serviço que envolve a análise e dimensionamento de estruturas para garantir que elas sejam fortes o suficiente para suportar cargas e condições ambientais específicas.', image: desenho},
  {name: 'Documentações e Laudos de Saúde e Segurança do Trabalho', description: 'Serviço oferecido para garantir que as empresas cumpram as leis e regulamentações de saúde e segurança do trabalho.', image: sms},
  {name: 'Caldeiraria e Usinagem', description: 'O serviço de caldeiraria e usinagem é oferecido para produzir e reparar peças e estruturas metálicas, utilizando técnicas de corte, dobra, solda e usinagem.', image: worker},
]

export default function Home() {
  return (
    <>
      <main className="main">
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"><FaRegCircle size={20} /></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"><FaRegCircle size={20} /></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"><FaRegCircle size={20} /></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"><FaRegCircle size={20} /></li>
            </ol>

            <div class="carousel-inner">
                  <div class="carousel-item active">
                  <div className='text'>
                  <Link href='/Servicos'>
                    <h1>Modelagem 3D</h1>
                    <p>A modelagem 3D é o processo de criação de objetos virtuais em três dimensões usando software especializado.</p>
                  </Link>
                  </div>
                  <Image src={Image3d} layout='fill' objectFit='cover' alt="First slide" />
                  </div>
                  {sliders.map((slider) => (
                    <>
                      <div class="carousel-item" key={slider.name}>
                          <div className='text'>
                          <Link href='/Servicos'>
                            <h1>{slider.name}</h1>
                            <p>{slider.description}</p>
                          </Link>
                          </div>
                      <Image src={slider.image} layout='fill' objectFit='cover' alt={slider.name} />
                      </div>
                    </>
                  ))}
            </div>

            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <FaChevronLeft size={40} />
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <FaChevronRight size={40} />
            </a>
          </div>
      </main>
    </>
  )
}
