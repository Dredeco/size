import Link from 'next/link'
import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export default function Contato() {
  function submit(e) {
    e.preventDefault()
  }

  return (
  <div className='contact'>
      <h1>Contato</h1>

      <div className='contact-wrapper'>

          <form className='contact-form' onSubmit={submit}>
              <label>Nome:</label><input required type="text" />
              <label>Telefone:</label><input required type="number" />
              <label>E-mail:</label><input required type='email' />
              <label>Mensagem:</label><textarea required />
              <button>Enviar</button>
          </form>

          <div className='line'/>

          <div className='contact-info'>
              <h2>Informações</h2>
              <FaPhone /><strong>Telefone:</strong><p>(22) XXXXX-XXXX</p><br />
              <GrMail /><strong>E-mail:</strong><p>comercialsize@gmail.com</p><br />
              <FaMapMarkerAlt /><strong>Localização:</strong><p>Rua Abílio Moreira de Miranda Nº 45, sala 1002 - Imbetiba, Macaé/RJ</p><br />
              <FaClock /><strong>Horário de Atendimento:</strong><p>De segunda a sexta, das 9h às 17h.</p><br />
              <strong>Redes sociais</strong><p><Link href='https://facebook.com' target='_blank'><FaFacebook /></Link><Link href='https://instagram.com' target='_blank'><FaInstagram /></Link></p><br />
          </div>

      </div>
  </div>
  )
}
