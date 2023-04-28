import React from 'react'
import Link from 'next/link'

export default function Servicos() {
  let services = [
    {data: 'flush-collapseOne', name: "Modelagem 3D", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac."},
    {data: 'flush-collapseTwo',name: "Dimensionamento e Cálculo Estrutural", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac."},
    {data: 'flush-collapseThree',name: "Laudos e ART", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac."},
    {data: 'flush-collapseFour',name: "PMOC - Sistemas de HVAC e Ar Condicionado", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac."},
    {data: 'flush-collapseFive',name: "Gerenciamento de Cronograma Executivo", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac."},
    {data: 'flush-collapseSix',name: "Levantamento de Riscos Ocupacionais", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc volutpat dictum tincidunt. Sed suscipit mollis metus. Cras dictum dui erat, ac fermentum tortor cursus ac."}
  ]

  return (
    <div className='services'>
      <div className='container'>
        <h1>NOSSOS SERVIÇOS</h1>
        {/* <div className='services-wrapper'>
          {services.map((service) => (
            <div key={service.name} className='service-card'>
              <h3>{service.name}</h3>
              <span>{service.description}</span>
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
          </div> */}

        <div class="accordion accordion-flush" id="accordionFlushExample">
          {services.map((service) => (
            <div class="accordion-item" key={service.name}>
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${service.data}`} aria-expanded="false" aria-controls={`${service.data}`}>
                  {service.name}
                </button>
              </h2>
              <div id={`${service.data}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">{service.description}</div>
              </div>
            </div>
          ))}
        </div>

        <div className='cta'>
            <span>Ficou interessado em nossos serviços?</span>
            <Link href='/Contato'>ENTRE EM CONTATO</Link>
        </div>
      </div>
    </div>
  )
}
