import { useState } from "react";
import Botoes from "./Botoes";

export default function Footer(props) {
const {contador, setContador, classe, setClasse, texto, setTexto, imagem, setImagem} = props

    return (
        <div className='footer-concluidos'>
           <Botoes contador={contador} setContador={setContador} classe={classe} setClasse={setClasse}
            texto={texto} setTexto={setTexto} imagem={imagem} setImagem={setImagem} />
            <p>{contador}/8 CONCLUÍDOS</p>
        </div>
    )
}