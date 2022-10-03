import setaVirar from './img/seta_virar.png'
import { useState } from 'react'

export default function Pergunta(props) {
    const {flashcard, pergunta, resposta, contador, setContador, classe, setClasse, texto, setTexto, imagem, setImagem} = props
    const [funcao, setFuncao] = useState(() => abrirPergunta)

    function abrirPergunta(){
        setClasse('pergunta-aberta')
        setTexto(pergunta)
        setImagem(setaVirar)
        setFuncao(() => abrirResposta)
    }

    function abrirResposta() {
        setTexto(resposta)
        setImagem('')
    }

    return (
        <>
            <div className={classe}>
                <p>{texto}</p>
                <img onClick={funcao} src={imagem} />
            </div>
        </>
    )
}