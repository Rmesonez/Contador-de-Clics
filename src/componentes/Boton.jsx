import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton({ texto, esBotonDeClic, manejarClic }){//texto = props
    return(
        <button 
        className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'}
            /* operador ternario es una validacion de si es true o false */
            onClick={manejarClic}>
            {texto}
        </button>
    );
}


export default Boton;