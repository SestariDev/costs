import React from 'react';
import Container from "../nav/Container";

function Work(props) {
  return (
    <Container>
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-center">Sobre a Stage Softwares</h1>
        <p className="mb-4 text-lg">
          A Stage Softwares é uma empresa líder em desenvolvimento de soluções tecnológicas, dedicada a fornecer software inovador e personalizado para empresas de todos os tamanhos. Com uma equipe de especialistas apaixonados pela tecnologia, buscamos transformar ideias em realidade e ajudar nossos clientes a alcançar o sucesso no mundo digital.
        </p>
        <h2 className="mb-2 text-2xl font-bold">Nossa Missão</h2>
        <p className="mb-4 text-lg">
          Nossa missão é desenvolver soluções de software que não apenas atendam, mas superem as expectativas dos nossos clientes. Estamos comprometidos com a excelência, a inovação e a qualidade em tudo o que fazemos.
        </p>
        <h2 className="mb-2 text-2xl font-bold">Nossos Valores</h2>
        <ul className="mb-4 list-disc list-inside">
          <li>Inovação: Buscamos constantemente novas maneiras de melhorar e inovar.</li>
          <li>Qualidade: Comprometemo-nos a entregar produtos de alta qualidade.</li>
          <li>Integridade: Operamos com honestidade e transparência.</li>
          <li>Colaboração: Valorizamos o trabalho em equipe e a parceria com nossos clientes.</li>
          <li>Satisfação do Cliente: O sucesso dos nossos clientes é o nosso sucesso.</li>
        </ul>
        <h2 className="mb-2 text-2xl font-bold">Nossa História</h2>
        <p className="mb-4 text-lg">
          Fundada em 2010, a Stage Softwares começou como uma pequena startup com uma grande visão: transformar o cenário tecnológico com soluções de software inovadoras. Ao longo dos anos, crescemos e evoluímos, mas nossa paixão pela tecnologia e compromisso com nossos clientes permanecem inalterados. Hoje, somos uma equipe global com clientes em todo o mundo, dedicada a fazer a diferença no mundo digital.
        </p>
      </div>
    </Container>
  );
}

export default Work;
