import Container from '../nav/Container'
import styles from './Home.module.css'
import img from '../../img/savings.svg'
import DefaultButton from '../Buttons/DefaultButton'
import { useState } from 'react'
import PlanoDeContas from './PlanodeContas'


function Home(props) {


    return(
        <Container>
            
            <main className="flex-grow p-8">
                <section id="home" className="mb-8">
                <h1 className="mb-4 text-4xl font-bold">Bem-vindo à Stage Softwares</h1>
                <p className="text-lg">Na Stage Softwares, somos especializados em fornecer soluções de software inovadoras e personalizadas para ajudar seu negócio a prosperar na era digital. Com uma equipe experiente e dedicada, estamos comprometidos em entregar produtos de alta qualidade que atendem às necessidades específicas de cada cliente.</p>
                </section>

                <section id="services" className="mb-8">
                <h2 className="mb-4 text-3xl font-bold">Nossos Serviços</h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="p-4 bg-white rounded shadow">
                    <h3 className="mb-2 text-2xl font-bold">Consultoria</h3>
                    <p>Oferecemos consultoria especializada para ajudar sua empresa a implementar soluções tecnológicas eficientes.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                    <h3 className="mb-2 text-2xl font-bold">Desenvolvimento de Software</h3>
                    <p>Desenvolvemos software personalizado que atende às necessidades específicas do seu negócio.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                    <h3 className="mb-2 text-2xl font-bold">Suporte Técnico</h3>
                    <p>Nosso suporte técnico está disponível 24/7 para garantir que seu sistema funcione sem problemas.</p>
                    </div>
                </div>
                </section>

                <section id="cta" className="p-8 text-white bg-blue-800 rounded shadow">
                <h2 className="mb-4 text-3xl font-bold">Entre em Contato</h2>
                <p className="mb-4 text-lg">Quer saber mais sobre nossos serviços? Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer.</p>
                <a href="#contato" className="px-4 py-2 text-blue-800 bg-white rounded hover:bg-gray-200">Fale Conosco</a>
                </section>
            </main>
        </Container>
    )
}

export default Home