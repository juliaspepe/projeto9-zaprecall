import iconeCerto from './img/icone_certo.png'
import iconeErro from './img/icone_erro.png'
import iconeQuase from './img/icone_quase.png'

export default function Botoes(props) {
const { contador, setContador, classe, setClasse, texto, setTexto, imagem, setImagem } = props

    function naoLembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        //setClasse('pergunta-fechada')
        //setTexto(flashcard)
        //setImagem(iconeErro)
    }

    function quaseLembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        //setClasse('pergunta-fechada')
        //setTexto(flashcard)
        //setImagem(iconeQuase)
    }

    function lembrei() {
        if (contador < 8) {
            setContador(contador + 1)
        }
        //setClasse('pergunta-fechada')
        //setTexto(flashcard)
        //setImagem(iconeCerto)
    }

    return (
        <div className='container-botoes'>
            <button type='text' onClick={naoLembrei} className='vermelho'>Não lembrei!</button>
            <button type='text' onClick={quaseLembrei} className='amarelo'>Quase lembrei!</button>
            <button type='text' onClick={lembrei} className='verde'>Zap!</button>
        </div>
    )
}