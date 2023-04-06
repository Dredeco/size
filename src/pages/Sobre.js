import Link from 'next/link'
import React from 'react'
import Image from 'next/legacy/image'

import banner from './../../public/mecanico.jpg'

export default function Sobre() {
  return (
    <div className='about'>
      <div className='container'>
        <h1>Sobre a Size</h1>
        <div className='about-wrapper'>
        <div className='about-image'>
        <Image 
          src={banner}
          alt=''
          layout='fixed'
          width={300}
          height={300}
        />
        </div>

        <div className='about-text'>
        <span >
          Visando agregar valores,
          soluções e agilidade na
          execução das suas
          demandas, atuamos com
          foco na área de engenharia
          de projetos, desde a sua
          concepção de análise,
          transcorrendo pela
          elaboração de
          documentações e cálculos,
          até a sua execução, com
          acompanhamento
          especializado de nossos
          engenheiros e responsáveis
          técnicos.
          A SIZE dispõe em seu corpo
          técnico, profissionais
          capacitados, com uma visão
          renovada do mercado, sem
          vícios, buscando quebrar os
          padrões e apresentar um
          trabalho personalizado para
          cada um de seus clientes.
        </span><br />
        <Link href="/Projetos">Veja os nossos projetos</Link>
        </div>
        </div>
      </div>
    </div>
  )
}
