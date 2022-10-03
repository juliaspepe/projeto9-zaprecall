import { useState } from "react";
import Botoes from "./Botoes";

export default function Footer({contador, setContador, classe, setClasse,
    texto, setTexto, imagem, setImagem}) {

    return (
        <div className='footer-concluidos'>
           <Botoes contador={contador} setContador={setContador} classe={classe} setClasse={setClasse}
            texto={texto} setTexto={setTexto} imagem={imagem} setImagem={setImagem} />
            <p>{contador}/8 CONCLUÍDOS</p>
        </div>
    )
}