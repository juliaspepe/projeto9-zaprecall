import Footer from './Footer';
import Logo from './Logo';
import Pergunta from './Pergunta'
import deck from './deck';
import { useState } from 'react'


export default function App() {
    const [contador, setContador] = useState(0)

    return (
        <div className='screen-container'>
            <Logo />
            {deck.map((i) => <Pergunta data-identifier="flashcard" flashcard={i.flashcard} pergunta={i.pergunta} 
            resposta={i.resposta} contador={contador} setContador={setContador}/>)}
            <Footer contador={contador} setContador={setContador}/>
        </div>
    )
}