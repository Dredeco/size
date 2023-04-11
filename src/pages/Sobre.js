import Link from 'next/link'
import React from 'react'
import Image from 'next/legacy/image'

import banner from './../../public/mecanico.jpg'

export default function Sobre() {
  let pilares = [
    {name: "Conhecimento técnico", description: "Visamos fornecer a nossos clientes conhecimento especializado e experiência em áreas como projeto, construção e fabricação"},
    {name: "Soluções de alta qualidade", description: "Nos esforçamos para fornecer soluções de alta qualidade que atendam às necessidades de nossos clientes, respeitando os padrões e regulamentos do setor."},
    {name: "Segurança e confiabilidade ", description: "Trabalhamos para garantir que as soluções sejam seguras e confiáveis e que cumpram todos os padrões e regulamentos de segurança relevantes."},
    {name: "Aumente a eficiência e a produtividade ", description: "Otimizamos os processos de fabricação e/ou projetamos produtos mais eficientes para ajudar os clientes a reduzir custos, aumentar a produtividade e melhorar seus resultados."},
    {name: "Prazos e orçamentos do projeto ", description: "Nos desafiamos em concluir os projetos no prazo e dentro do orçamento, ao mesmo tempo em que oferecemos soluções de alta qualidade que atendem às necessidades do cliente."}
  ]

  let valores = [
    {name: "Integridade", description: "Valorizamos a integridade e o compromisso de agir com ética e honestidade em todos os nossos negócios."},
    {name: "Excelência", description: "Valorizamos a excelência e comprometimento em fornecer soluções de alta qualidade que atendam ou superem as expectativas do cliente."},
    {name: "Colaboração", description: "Valorizamos o trabalho em estreita colaboração com nossos clientes e funcionários para promover uma cultura de trabalho em equipe e cooperação."},
    {name: "Inovação", description: "Valorizamos a inovação e nos empenhamos em permanecer na vanguarda das novas tecnologias e práticas de engenharia."},
    {name: "Segurança", description: "Valorizamos a segurança nos empenhamos em garantir que nossas soluções sejam projetadas e construídas com os mais altos padrões de segurança em mente."},
    {name: "Sustentabilidade", description: "Valorizamos a sustentabilidade e nos comprometemos em projetar soluções que sejam ecologicamente corretas e socialmente responsáveis."}
  ]

  return (
    <div className='about'>
      <div className='container'>
        <h1>Sobre a Size</h1>

        <div className='about-text'>
            <span >
            A SIZE é uma empresa que visa fornecer serviços técnicos especializados em engenharia e soluções em variados setores da indústria. <br /><br />
            Nos propomos a oferecer serviços como design de produtos, design de processos de fabricação, gerenciamento de projetos, gerenciamento de construção e consultoria. <br /><br />
            <strong>Nosso principal objetivo é ajudar os clientes a atingir seus objetivos, nos apoiando nos 5 pilares, que são:</strong>
            </span><br />
        </div>

        <div className='about-pilars'>
          {pilares.map((pilar) => (
            <div key={pilar.name} className='about-pilar-card'>
              <h3>{pilar.name}</h3>
              <span>{pilar.description}</span>
            </div>
          ))}
        </div>

        <div className='about-values'>
            <h1>Valores</h1>
            <span>Nos valoramos em princípios que moldam como conduzimos nossos negócios e interação com nossos clientes, funcionários e a comunidade em geral. Tais quais:</span>
            <div className='values-wrapper'>
              {valores.map((valor) => (
                <div key={valor.name} className='value-card'>
                  <h4>{valor.name}</h4>
                  <span>{valor.description}</span>
                </div>
              ))}
            </div>
        </div>

        <div className='cta'>
            <span>Ficou interessado em nossos serviços?</span>
            <Link href='/Servicos'>VEJA AQUI NOSSOS SERVIÇOS</Link>
        </div>

      </div>
    </div>
  )
}
