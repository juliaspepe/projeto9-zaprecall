import Footer from './Footer';
import Logo from './Logo';
import Pergunta from './Pergunta'
import deck from './deck';
import styled from 'styled-components';
import { useState } from 'react'

export default function App() {
    const [contador, setContador] = useState(0)

    return (
        <ScreenContainer>
            <Logo />
            {deck.map((i) => <Pergunta data-identifier="flashcard" flashcard={i.flashcard} pergunta={i.pergunta}
                resposta={i.resposta} contador={contador} setContador={setContador} />)}
            <Footer contador={contador} setContador={setContador} />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
background-color: #FB6B6B;
width: 100vw;
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 0px;
padding: 0px;
padding-bottom: 200px;
`;