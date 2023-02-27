import React from 'react';
import '../css/boton.css'

// aqui estamos pasando un props, pero no siempre es necesario utilizar el objeto props si no que podemos utilizar directente una propiedad con la sintaxis de desectructuracion

//aqui en vez de poner como parametro props, ponemos directamente la propiedad que vamos a usar, en este caso "texto"

// en vez de pasar "prop.propiedad" podemos llamar directamente a la propiedad entre llaves, y podemos llamar mas propiedades sepradas por comas
function Boton({ texto, esBotonDeClick, manejarClick }) {
    return( 
        <button className={ esBotonDeClick ? 'boton-click': 'boton-reiniciar' } onClick={manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;