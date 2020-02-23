import React from 'react'
import styled from 'styled-components'
import { FaEnvelope } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"

const Contact = () => {
  return (
    <StyledContact>
      <h2>Contacto</h2>
      <h3>Tenés un proyecto en mente? Hablemos!</h3>
      <p>Comunicate conmigo.<br />Enviame un correo electrónico o llamame por teléfono.</p>
      <p>
        <a href='mailto:pablomaurig@gmail.com'><FaEnvelope size="30" /></a><br />
        <a href='mailto:pablomaurig@gmail.com'>pablomaurig@gmail.com</a>
      </p>
      <p>
        <a href='tel:5491164052828'><MdPhoneIphone size="30" /></a><br />
        <a href='tel:5491164052828'>+54 9 11 6405 2828</a>
      </p>
    </StyledContact>
  )
}

const StyledContact = styled.nav`
  text-align: center;
  a{
    color: #334960;
    svg{
    color: #428bca;
    }
  }
`
export default Contact