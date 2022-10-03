import setaVirar from './img/seta_virar.png'
import setaPlay from './img/seta_play.png'
import iconeCerto from './img/icone_certo.png'
import iconeErro from './img/icone_erro.png'
import iconeQuase from './img/icone_quase.png'
import styled from 'styled-components';
import { useState } from 'react'


export default function Pergunta(props) {
    const { flashcard, pergunta, resposta, contador, setContador } = props
    const [funcao, setFuncao] = useState(() => abrirPergunta)
    const [classe, setClasse] = useState(true)
    const [texto, setTexto] = useState(flashcard)
    const [imagem, setImagem] = useState(setaPlay)
    const [habilitarBotao, setHabilitarBotao] = useState(false)
    const [desabilitarClick, setDesabilitarClick] = useState(true)
    const [novaClasse, setNovaClasse] = useState(true)
    const [classeCor, setClasseCor] = useState('')
    const [finalizado, setFinalizado] = useState (false)
    const vermelho = '#FF3030'
    const amarelo = '#FF922E'
    const verde = '#2FBE34'

    function abrirPergunta() {
        setClasse(false)
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
        setClasse(true)
        setTexto(flashcard)
        setImagem(iconeErro)
        setHabilitarBotao(false)
        setDesabilitarClick(false)
        setNovaClasse(false)
        setClasseCor(vermelho)
        setFinalizado(!finalizado)
    }

    function quaseLembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        setClasse(true)
        setTexto(flashcard)
        setImagem(iconeQuase)
        setHabilitarBotao(false)
        setDesabilitarClick(false)
        setNovaClasse(false)
        setClasseCor(amarelo)
        setFinalizado(!finalizado)
    }

    function lembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        setClasse(true)
        setTexto(flashcard)
        setImagem(iconeCerto)
        setHabilitarBotao(false)
        setDesabilitarClick(false)
        setNovaClasse(false)
        setClasseCor(verde)
        setFinalizado(!finalizado)

    }

    return (
        <>
            {classe ? 
            <PerguntaFechada>    
                {novaClasse ? 
                <TextoDoFlashcard data-identifier="flashcard-index-item flashcard-question flashcard-answer">{texto}</TextoDoFlashcard> 
                : 
                <PerguntaFechadaP data-identifier="flashcard-index-item flashcard-question flashcard-answer" cor={classeCor} finalizado={finalizado}>{texto}</PerguntaFechadaP>}
                
                {desabilitarClick ? 
                <img data-identifier="flashcard-show-btn" onClick={funcao} src={imagem} /> 
                : 
                <img data-identifier="flashcard-show-btn" src={imagem} />}
            </PerguntaFechada>
                :
            <PerguntaAberta>
                {novaClasse ? 
                <TextoDoFlashcard data-identifier="flashcard-index-item flashcard-question flashcard-answer">{texto}</TextoDoFlashcard> 
                : 
                <PerguntaFechadaP data-identifier="flashcard-index-item flashcard-question flashcard-answer">{texto}</PerguntaFechadaP>}
                
                {desabilitarClick ? 
                <img data-identifier="flashcard-show-btn" onClick={funcao} src={imagem} /> 
                : 
                <img data-identifier="flashcard-show-btn" src={imagem} />}
                
                {habilitarBotao ? <ContainerBotoes>
                        <Vermelho data-identifier="forgot-btn" type='text' onClick={naoLembrei}>Não lembrei!</Vermelho>
                        <Amarelo data-identifier="almost-forgot-btn" type='text' onClick={quaseLembrei}>Quase lembrei!</Amarelo>
                        <Verde data-identifier="zap-btn" type='text' onClick={lembrei}>Zap!</Verde>
                </ContainerBotoes> : <></>}
            </PerguntaAberta>}
        </>
    )
}


const PerguntaFechada = styled.div`
    width: 300px;
    height: 35px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    `;     

const PerguntaFechadaP = styled.p`
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color:${props => props.cor};
    text-decoration: ${props => props.finalizado === true ? "line-through" : "none"};
    `;

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

        img{
            position: absolute;
            bottom: 10px;
            right: 10px;
            }
`;

const ContainerBotoes = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    button {
    border: none;
    width: 90px;
    height: 40px;
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #FFFFFF;
    border-radius: 5px;
    padding:5px;
  }
`;

const Vermelho = styled.button`
    background-color: #FF3030;
    margin-right: 10px;
`;

const Amarelo = styled.button`
    background-color: #FF922E;
    margin-right: 10px;
`;

const Verde = styled.button`
    background-color: #2FBE34;
    margin-right: 10px;
`;

const TextoDoFlashcard = styled.p`
    font-family: 'Recursive', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
`;