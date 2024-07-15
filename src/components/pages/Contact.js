import React from 'react';
import Container from "../nav/Container";
import perfil from "../../img/perfil.png";
import Locaweb from "../../img/locaweb-logo-0.png";
import Roda from "../../img/roda.png";
import img from '../../img/costs_logo.png';

function Contact({ setCurrentPage }) {
  return (
    <Container>
      <div className='flex flex-wrap w-full h-full gap-4'>
        <button 
          onClick={() => setCurrentPage('home')} 
          className='rounded-lg w-[47%] flex aspect-square justify-center items-center border border-solid border-gray-500'
        >
          <img src={img} alt="Costs Logo"/>
        </button>
        <button 
          onClick={() => setCurrentPage('perfil')} 
          className='rounded-lg w-[47%] flex aspect-square justify-center items-center border '
        >
          <img src={perfil} alt="Perfil"/>
        </button>
        <button 
          onClick={() => setCurrentPage('wheelOfFortuneGame')} 
          className='rounded-lg w-[47%] flex aspect-square justify-center items-center border border-solid border-gray-500'
        >
          <img src={Roda} alt="Roda"/>
        </button>
      </div>
    </Container>
  );
}

export default Contact;
