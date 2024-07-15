import React from 'react';
import Container from "../nav/Container";
import perfil from "../../img/perfil.png";
import Locaweb from "../../img/locaweb-logo-0.png";
import Roda from "../../img/roda.png";
import img from '../../img/costs_logo.png';

function Contact(props) {
  return (
    <Container>
      <div className='flex flex-wrap w-full h-full gap-4'>
        <a href="/pic" className='rounded-lg w-[47%] flex aspect-square justify-center items-center border border-solid border-gray-500'>
          <img src={img} alt="Costs Logo"/>
        </a>
        <a href="/perfil" className='rounded-lg w-[47%] flex aspect-square justify-center items-center border '>
          <img src={perfil} alt="serro"/>
        </a>
        <a href="/roda" className='rounded-lg w-[47%] flex aspect-square justify-center items-center border border-solid border-gray-500'>
          <img src={Roda} alt="erro"/>
        </a>
      </div>
    </Container>
  );
}

export default Contact;
