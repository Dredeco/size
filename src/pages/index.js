import Image from 'next/legacy/image'
import {FaRegCircle, FaChevronLeft, FaChevronRight} from 'react-icons/fa'

import Image3d from './../../public/3dmodel.jpg'
import desenho from './../../public/desenho1.jpg'
import sms from './../../public/sms.png'
import worker from './../../public/worker1.jpg'

let sliders = [
  {name: 'Dimensionamento e cálculo estrutural', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac.', image: desenho},
  {name: 'Documentações e Laudos de Saúde e Segurança do Trabalho', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac.', image: sms},
  {name: 'Caldeiraria e Usinagem', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac.', image: worker},
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
                    <h1>Modelagem 3D</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac.</p>
                  </div>
                  <Image src={Image3d} layout='fill' objectFit='cover' alt="First slide" />
                  </div>
                  {sliders.map((slider) => (
                    <>
                      <div class="carousel-item" key={slider.name}>
                      <div className='text'>
                        <h1>{slider.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac.</p>
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
