import React from 'react'
import Image from 'next/legacy/image'
import Link from 'next/link'

import Image1 from './../../public/mecanico.jpg'

export default function Servicos() {
  let services = [
    {name: "Modelagem 3D", image: Image1},
    {name: "Dimensionamento e Cálculo Estrutural", image: Image1},
    {name: "Laudos e ART", image:Image1},
    {name: "PMOC - Sistemas de HVAC e Ar Condicionado", image: Image1},
    {name: "Gerenciamento de Cronograma Executivo", image: Image1},
    {name: "Levantamento de Riscos Ocupacionais", image: Image1}
  ]

  return (
    <div className='services'>
      <div className='container'>
        <h1>NOSSOS SERVIÇOS</h1>
        <div className='services-wrapper'>
          {services.map((service) => (
            <div key={service.name} className='service-card'>
              <h3>{service.name}</h3>
              <Image 
                src={service.image}
                width={370}
                height={200}
                alt={service.name}
              />
            </div>
          ))}
        </div>
        <div className='services-other'>
            <h3>Demais Serviços</h3><br />
            <div className='other-text'>
            <span><strong>♦</strong> Laudo de Periculosidade</span>
            <span><strong>♦</strong> Análise Preliminar de Risco</span>
            <span><strong>♦</strong> PGR – Programa de Gerenciamento de Riscos</span>
            <span><strong>♦</strong> Caldeiraria</span>
            <span><strong>♦</strong> Usinagem</span>
            <span><strong>♦</strong> Delineamento</span>
            <span><strong>♦</strong> NR12 - Adequação de Maquinário e Equipamentos</span>
            <span><strong>♦</strong> Laudo de Para-Raios (NR10)</span>
            <span><strong>♦</strong> Identificação de Perigos e Avaliação de Riscos</span>
            </div>
        </div>

        <div className='cta'>
            <span>Ficou interessado em nossos serviços?</span>
            <Link href='/Contato'>ENTRE EM CONTATO</Link>
        </div>
      </div>
    </div>
  )
}
