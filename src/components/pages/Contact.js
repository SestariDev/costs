import React from 'react';
import Container from "../nav/Container";
import Intel from "../../img/intel.png";
import Locaweb from "../../img/locaweb-logo-0.png";
import Multilaser from "../../img/multi.png";
import Positivo from "../../img/positivo.png";

function Contact(props) {
  return (
    <Container>
      <h2 className="mb-4 text-2xl font-bold text-center">Referências</h2>
      <div className="flex flex-wrap items-center justify-center w-full p-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="m-4">
          <img src={Intel} alt="Intel logo" className="w-auto h-24 max-w-full" />
        </div>
        <div className="m-4">
          <img src={Multilaser} alt="Multilaser logo" className="w-auto h-24 max-w-full" />
        </div>
        <div className="m-4">
          <img src={Positivo} alt="Positivo logo" className="w-auto h-24 max-w-full" />
        </div>
        <div className="m-4">
          <img src={Locaweb} alt="Locaweb logo" className="w-auto h-24 max-w-full" />
        </div>
      </div>
    </Container>
  );
}

export default Contact;
