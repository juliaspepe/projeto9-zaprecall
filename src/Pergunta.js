import setaVirar from './img/seta_virar.png'
import setaPlay from './img/seta_play.png'
import iconeCerto from './img/icone_certo.png'
import iconeErro from './img/icone_erro.png'
import iconeQuase from './img/icone_quase.png'
import { useState } from 'react'


export default function Pergunta(props) {
    const { flashcard, pergunta, resposta, contador, setContador } = props
    const [funcao, setFuncao] = useState(() => abrirPergunta)
    const [classe, setClasse] = useState('pergunta-fechada')
    const [texto, setTexto] = useState(flashcard)
    const [imagem, setImagem] = useState(setaPlay)
    const [habilitarBotao, setHabilitarBotao] = useState(false)
    const [desabilitarClick, setDesabilitarClick] = useState(true)
    const [novaClasse, setNovaClasse] = useState(true)
    const [classeCor, setClasseCor] = useState('')

    function abrirPergunta() {
        setClasse('pergunta-aberta')
        setTexto(pergunta)
        setImagem(setaVirar)
        setFuncao(() => abrirResposta)
    }

    function abrirResposta() {
        setTexto(resposta)
        setImagem('')
        setHabilitarBotao(true)
    }

    function naoLembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        setClasse('pergunta-fechada')
        setTexto(flashcard)
        setImagem(iconeErro)
        setHabilitarBotao(false)
        setDesabilitarClick(false)
        setNovaClasse(false)
        setClasseCor('vermelhoClass')
    }

    function quaseLembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        setClasse('pergunta-fechada')
        setTexto(flashcard)
        setImagem(iconeQuase)
        setHabilitarBotao(false)
        setDesabilitarClick(false)
        setNovaClasse(false)
        setClasseCor('amareloClass')
    }

    function lembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        setClasse('pergunta-fechada')
        setTexto(flashcard)
        setImagem(iconeCerto)
        setHabilitarBotao(false)
        setDesabilitarClick(false)
        setNovaClasse(false)
        setClasseCor('verdeClass')

    }


    return (
        <>
            <div className={classe}>
                {novaClasse ? <p data-identifier="flashcard-index-item" className='textoDoFlashcard'>{texto}</p> : <p data-identifier="flashcard-index-item" className={classeCor}>{texto}</p>}
                {desabilitarClick ? <img data-identifier="flashcard-show-btn" onClick={funcao} src={imagem} /> : <img data-identifier="flashcard-show-btn" src={imagem} />}
                {habilitarBotao ? <div className='container-botoes'>
                <button data-identifier="forgot-btn" type='text' onClick={naoLembrei} className='vermelho'>Não lembrei!</button>
                <button data-identifier="almost-forgot-btn" type='text' onClick={quaseLembrei} className='amarelo'>Quase lembrei!</button>
                <button data-identifier="zap-btn" type='text' onClick={lembrei} className='verde'>Zap!</button>
            </div> : <></>} 
            </div>
        </>
    )
}