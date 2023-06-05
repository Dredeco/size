import emailjs from '@emailjs/browser';
import React from 'react'
import { FaClock, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaWhatsapp, } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

export default function Contato() {
  function submit(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_sfh8snl', e.target, 'RcD_dB2-94xJ045Fq')
      .then((result) => {
          console.log(result.text);
          alert("Mensagem enviada!")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
  <div className='contact'>
      <div className='container'>
      <h1>Contato</h1>
      <div className='contact-wrapper'>

          <form className='contact-form' onSubmit={submit}>
              <label>Nome:</label><input required type="text" name='user_name'/>
              <label>Telefone:</label><input required type="number" name='user_phone' />
              <label>E-mail:</label><input required type='email' name='user_email' />
              <label>Mensagem:</label><textarea required name='message' />
              <button>Enviar</button>
          </form>

          <div className='line'/>

          <div className='contact-info'>
              <h2>Informações</h2>
              <FaPhone /><strong>Telefone:</strong><p>(22) 99105-8115 <a target='_blank' href='https://wa.me/5522991058115'><FaWhatsapp /></a></p><br />
              <GrMail /><strong>E-mail:</strong><p>comercial@sizepm.com.br</p><br />
              <FaMapMarkerAlt /><strong>Localização:</strong><p>Rua Abílio Moreira de Miranda Nº 45, sala 1002 - Imbetiba, Macaé/RJ</p><br />
              <FaClock /><strong>Horário de Atendimento:</strong><p>De Segunda à Sexta, das 8h às 17:30h</p><br />
          </div>

      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.1210315569733!2d-41.775534400000005!3d-22.386794300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96308ea7faaaab%3A0x6d232cb60cb181af!2sR.%20Ab%C3%ADlio%20Moreira%20de%20Miranda%2C%2045%20-%20Sala%201002%20-%20Imbetiba%2C%20Maca%C3%A9%20-%20RJ%2C%2027915-250!5e0!3m2!1spt-BR!2sbr!4v1681232343770!5m2!1spt-BR!2sbr" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
  </div>
  )
}
