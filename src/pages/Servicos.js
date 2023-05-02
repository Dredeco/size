import React from 'react'
import Link from 'next/link'

export default function Servicos() {
  let services = [
    {data: 'flush-collapseOne', name: "Modelagem 3D", description: <p>A modelagem 3D é o processo de criação de objetos virtuais em três dimensões usando software especializado.<br /><br />
    Esses objetos podem ser usados em muitas indústrias, como design de produtos, cinema e jogos de vídeo. O processo de modelagem envolve a criação de formas básicas e adição de detalhes, como texturas e iluminação, para tornar o objeto mais realista.<br /><br />
    Depois que o modelo 3D é criado, ele pode ser exportado para diferentes formatos de arquivo, dependendo de como será usado.</p>},

    {data: 'flush-collapseTwo',name: "Dimensionamento e Cálculo Estrutural", description:<p>O dimensionamento e cálculo estrutural é um serviço que envolve a análise e dimensionamento de estruturas para garantir que sejam fortes o suficiente para suportar cargas e condições ambientais específicas. <br /><br />
    É frequentemente usado em construção civil, arquitetura e engenharia civil para projetar diversas estruturas. Os profissionais usam software especializado para analisar o comportamento da estrutura em diferentes condições e determinar os materiais adequados para a construção. <br /><br />
    O resultado é um projeto estrutural detalhado que inclui especificações precisas de materiais, dimensões e outras informações necessárias para a construção da estrutura com segurança e eficiência.</p>},

    {data: 'flush-collapseThree',name: "Documentações e Laudos de SST", description: <p>O serviço é oferecido para garantir que as empresas cumpram as leis e regulamentações de saúde e segurança do trabalho.<br /><br /> 
    Profissionais de segurança do trabalho prestam esse serviço, que inclui análise de riscos e perigos associados às atividades laborais e identificação de medidas preventivas para reduzir esses riscos.<br /><br /> 
    A documentação gerada inclui laudos técnicos e relatórios de inspeções de segurança do trabalho, avaliações de riscos e medidas preventivas necessárias. <br /><br />
    Esses documentos são importantes para cumprir exigências legais e regulatórias de saúde e segurança do trabalho e garantir que os trabalhadores tenham um ambiente de trabalho seguro e saudável. Eles também podem ser usados para fins de auditoria, investigação de acidentes e para garantir a conformidade com normas e regulamentações relevantes.</p>},
    
    {data: 'flush-collapseFour',name: "PMOC - Sistemas de HVAC e Ar Condicionado", description: <p>PMOC significa Plano de Manutenção, Operação e Controle, e é um conjunto de ações que devem ser realizadas para garantir a qualidade do ar interior em edificações que possuem sistemas de climatização de ar, como os sistemas de HVAC (aquecimento, ventilação e ar-condicionado). <br /><br />
    O objetivo principal do PMOC é garantir que o ar interior seja saudável e seguro para os ocupantes do edifício, além de prolongar a vida útil do sistema e reduzir os custos de energia e manutenção.</p>},
    
    {data: 'flush-collapseFive',name: "Gerenciamento de Cronograma Executivo", description: <p>O serviço de gerenciamento de cronograma executivo é especialmente importante em projetos que envolvem muitas tarefas e etapas, uma vez que o não cumprimento dos prazos pode levar a atrasos na entrega, aumento de custos e até mesmo comprometer a qualidade final do projeto.<br /><br />
    Em resumo, o serviço de gerenciamento de cronograma executivo é essencial para garantir que um projeto seja entregue dentro do prazo estabelecido e de acordo com as expectativas do cliente. Ele ajuda a identificar possíveis problemas antes que se tornem grandes obstáculos, permitindo que medidas corretivas sejam tomadas de forma mais efetiva e eficiente.</p>},
    
    {data: 'flush-collapseSix',name: "Levantamento de Riscos Ocupacionais", description: <p>O serviço de levantamento de riscos ocupacionais é uma avaliação sistemática dos riscos à saúde e à segurança dos trabalhadores em um ambiente de trabalho específico. Ele tem como objetivo identificar e analisar os perigos e riscos associados a atividades laborais, de modo a implementar medidas preventivas para minimizar esses riscos e garantir um ambiente de trabalho seguro e saudável.<br /><br />
    O levantamento de riscos ocupacionais pode ser realizado em diferentes tipos de ambientes de trabalho, tais como indústrias, hospitais, escritórios, canteiros de obras, entre outros. Ele envolve a identificação de riscos que possam afetar a saúde e a segurança dos trabalhadores.</p>},
    
    {data: 'flush-collapseSeven',name: "Laudo de Periculosidade", description: <p>O Laudo de Periculosidade é um documento técnico elaborado por um engenheiro ou médico do trabalho que tem como objetivo avaliar se uma atividade ou ambiente de trabalho apresenta condições de periculosidade para os trabalhadores. A periculosidade é definida pela Norma Regulamentadora NR-16, do Ministério do Trabalho e Emprego, como a exposição do trabalhador a agentes ou situações que possam colocar sua integridade física em risco.<br /><br />
    O Laudo de Periculosidade é obrigatório para empresas que possuem atividades que se enquadram nas condições estabelecidas pela NR-16, como por exemplo, trabalhos com inflamáveis, explosivos, eletricidade, radiações ionizantes, entre outros.</p>},
    
    {data: 'flush-collapseEight',name: "Análise Preliminar de Risco", description: <p>A Análise Preliminar de Risco (APR) é uma metodologia utilizada para identificar e avaliar os riscos associados a uma determinada atividade, processo ou operação. Ela tem como objetivo antecipar e prevenir possíveis incidentes ou acidentes, garantindo a segurança dos trabalhadores e a integridade dos equipamentos e instalações envolvidos.<br /><br />
    O serviço de Análise Preliminar de Risco inclui a análise detalhada de todas as etapas da atividade, processo ou operação, identificando os riscos potenciais em cada uma delas. Para isso, são utilizadas técnicas de identificação de perigos, como a análise de histórico de acidentes, checklists, diagramas de fluxo e a observação direta das atividades.</p>},
    
    {data: 'flush-collapseNine',name: "PGR - Programa de Gerenciamento de Riscos", description: <p>O PGR - Programa de Gerenciamento de Riscos é um conjunto de medidas técnicas, administrativas e operacionais que visam identificar, avaliar, controlar e monitorar os riscos presentes em uma determinada atividade, processo ou operação. Ele é obrigatório para empresas que desenvolvem atividades que apresentem riscos à saúde e segurança de seus trabalhadores.<br /><br />
    O serviço de PGR inclui a realização de um levantamento detalhado dos riscos presentes nas atividades desenvolvidas pela empresa, através de técnicas de identificação de perigos e avaliação de riscos. A partir desse levantamento, é elaborado um plano de ação contendo as medidas de prevenção e controle dos riscos identificados.</p>}
    ,
    {data: 'flush-collapseTen',name: "Caldeiraria", description: <p>A caldeiraria é um conjunto de técnicas e processos utilizados para a fabricação, reparo e manutenção de equipamentos e estruturas metálicas, especialmente aquelas que possuem formatos e dimensões especiais ou que precisam ser produzidas sob medida.<br /><br />
    A caldeiraria é um conjunto de técnicas e processos utilizados para a fabricação, reparo e manutenção de equipamentos e estruturas metálicas, especialmente aquelas que possuem formatos e dimensões especiais ou que precisam ser produzidas sob medida.</p>},
    
    {data: 'flush-collapseEleven',name: "Usinagem", description: <p>A usinagem é um processo de fabricação de peças mecânicas por meio da remoção de material a partir de uma peça bruta, utilizando ferramentas específicas e máquinas de alta precisão. O objetivo é dar forma, acabamento e precisão dimensional à peça, de acordo com as especificações técnicas requeridas.<br /><br />
    O serviço de usinagem pode envolver a fabricação de peças de diversos materiais, como metais, plásticos e compostos, utilizando diferentes técnicas e equipamentos, como tornos mecânicos, centros de usinagem CNC, fresadoras, retíficas, entre outros.</p>},
    
    {data: 'flush-collapseTwelve',name: "Delineamento", description: <p>O delineamento é um serviço utilizado em diversas áreas, como a geologia, a topografia e a engenharia, que consiste em desenhar e traçar mapas e plantas de áreas geográficas, de construções ou de instalações. O objetivo é representar graficamente as características da área em questão, incluindo suas dimensões, limites, pontos de referência, acidentes geográficos, entre outros elementos relevantes.<br /><br />
    O serviço de delineamento pode envolver a utilização de tecnologias modernas, como softwares de desenho assistido por computador (CAD), GPS, drones e outros equipamentos de medição e levantamento topográfico. O profissional responsável pelo delineamento deve possuir habilidades técnicas e conhecimentos específicos em cartografia, desenho técnico, topografia e geoprocessamento.</p>},
    
    {data: 'flush-collapseThirteen',name: "NR12 - Adequação de Maquinário e Equipamentos", description: <p>A NR12 é uma norma regulamentadora que estabelece requisitos mínimos de segurança para o trabalho em máquinas e equipamentos, visando garantir a saúde e integridade física dos trabalhadores. O serviço de adequação de maquinário e equipamentos à NR12 consiste em uma série de medidas técnicas e administrativas para adequar os equipamentos à norma, visando garantir a segurança dos trabalhadores que operam ou trabalham nas proximidades das máquinas.<br /><br />
    As medidas técnicas incluem a instalação de dispositivos de segurança, como cercas de proteção, sensores de presença, limitadores de movimento, entre outros, que visam impedir o acesso de pessoas a áreas perigosas das máquinas e equipamentos. Além disso, a adequação também envolve a realização de ajustes e modificações no maquinário, como a troca de peças danificadas ou desgastadas, a instalação de sistemas de freio e bloqueio, entre outras medidas.</p>},
    
    {data: 'flush-collapseFourteen',name: "Laudo de Para-Raios (NR10)", description: <p>O laudo de para-raios é um serviço que tem como objetivo verificar a conformidade da instalação de um sistema de proteção contra descargas atmosféricas (SPDA), conhecido popularmente como para-raios, com as normas técnicas e de segurança, incluindo as disposições da NR10.<br /><br />
    A NR10 é uma norma regulamentadora que estabelece os requisitos e as condições mínimas para a segurança e saúde no trabalho em instalações e serviços elétricos. No que se refere ao laudo de para-raios, a NR10 estabelece que a instalação de um SPDA deve ser projetada, instalada, inspecionada e mantida de acordo com as normas técnicas vigentes, como a NBR 5419, que trata do tema.</p>},
    
    {data: 'flush-collapseFifteen',name: "Identificação de Perigos e Avaliação de Riscos", description: <p>A identificação de perigos e avaliação de riscos é um serviço que tem como objetivo identificar e avaliar os riscos associados a uma determinada atividade, processo ou ambiente de trabalho, visando implementar medidas de prevenção e controle para garantir a saúde e segurança dos trabalhadores.<br /><br />
    O processo de identificação de perigos consiste em avaliar as atividades, processos e instalações de trabalho, identificando os perigos que possam causar lesões ou danos à saúde dos trabalhadores, como a exposição a produtos químicos, ruídos excessivos, quedas, entre outros.</p>}
  ]

  return (
    <div className='services'>
      <div className='container'>
        <h1>NOSSOS SERVIÇOS</h1>

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

        <div className='layer'>
          <div className='logo-bg'>
          </div>
        </div>
      </div>
    </div>
  )
}
