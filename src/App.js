import Footer from './Footer';
import Logo from './Logo';
import Pergunta from './Pergunta'
import deck from './deck';
import { useState } from 'react'
import setaPlay from './img/seta_play.png'

export default function App() {
    const [contador, setContador] = useState(0)
    const [classe, setClasse] = useState('pergunta-fechada')
    const [texto, setTexto] = useState('')
    const [imagem, setImagem] = useState(setaPlay)

    return (
        <div className='screen-container'>
            <Logo />
            {deck.map((i) => <Pergunta flashcard={i.flashcard} pergunta={i.pergunta} 
            resposta={i.resposta} setContador={setContador} classe={classe} setClasse={setClasse}
            texto={texto} setTexto={setTexto} imagem={imagem} setImagem={setImagem}/>)}
            <Footer contador={contador} setContador={setContador} classe={classe} setClasse={setClasse}
            texto={texto} setTexto={setTexto} imagem={imagem} setImagem={setImagem} />
        </div>
    )
}