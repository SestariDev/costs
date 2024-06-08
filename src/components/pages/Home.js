import Container from '../nav/Container'
import styles from './Home.module.css'
import img from '../../img/savings.svg'
import DefaultButton from '../Buttons/DefaultButton'
import { useState } from 'react'
import AdicionarConta from './AdcionarConta'
import PlanoDeContas from './PlanodeContas'


function Home(props) {
        const [contas, setContas] = useState([]);

    return(
        <Container>
            
            <h1>Plano de Contas</h1>
            
            <PlanoDeContas contas={contas} />

        </Container>
    )
}

export default Home