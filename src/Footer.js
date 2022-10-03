export default function Footer(props) {
const {contador, setContador} = props

    return (
        <div className='footer-concluidos'>
            <p data-identifier="flashcard-counter">{contador}/8 CONCLUÍDOS</p>
        </div>
    )
}