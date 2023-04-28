import React from 'react'
import Link from 'next/link'

export default function Servicos() {
  let space = <br />
  let services = [
    {data: 'flush-collapseOne', name: "Modelagem 3D", description: <p>A modelagem 3D é o processo de criação de objetos virtuais em três dimensões usando software especializado.<br /><br />
    Esses objetos podem ser usados em muitas indústrias, como design de produtos, cinema e jogos de vídeo. O processo de modelagem envolve a criação de formas básicas e adição de detalhes, como texturas e iluminação, para tornar o objeto mais realista.<br /><br />
    Depois que o modelo 3D é criado, ele pode ser exportado para diferentes formatos de arquivo, dependendo de como será usado.</p>},

    {data: 'flush-collapseTwo',name: "Dimensionamento e Cálculo Estrutural", description:<p>O dimensionamento e cálculo estrutural é um serviço que envolve a análise e dimensionamento de estruturas para garantir que sejam fortes o suficiente para suportar cargas e condições ambientais específicas. <br /><br />
    
    É frequentemente usado em construção civil, arquitetura e engenharia civil para projetar diversas estruturas. Os profissionais usam software especializado para analisar o comportamento da estrutura em diferentes condições e determinar os materiais adequados para a construção. <br /><br />

    O resultado é um projeto estrutural detalhado que inclui especificações precisas de materiais, dimensões e outras informações necessárias para a construção da estrutura com segurança e eficiência.</p>},

    {data: 'flush-collapseThree',name: "Documentações e Laudos de SST", description: <p>O serviço é oferecido para garantir que as empresas cumpram as leis e regulamentações de saúde e segurança do trabalho.<br /><br /> 
      
    Profissionais de segurança do trabalho prestam esse serviço, que inclui análise de riscos e perigos associados às atividades laborais e identificação de medidas preventivas para reduzir esses riscos.<br /><br /> A documentação gerada inclui laudos técnicos e relatórios de inspeções de segurança do trabalho, avaliações de riscos e medidas preventivas necessárias. <br /><br />
    
    Esses documentos são importantes para cumprir exigências legais e regulatórias de saúde e segurança do trabalho e garantir que os trabalhadores tenham um ambiente de trabalho seguro e saudável. Eles também podem ser usados para fins de auditoria, investigação de acidentes e para garantir a conformidade com normas e regulamentações relevantes.</p>},
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
