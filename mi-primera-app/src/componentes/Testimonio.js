// En cualquier componente vamos a necesitar importar el paquete de React
import React  from "react";
import "../css/testimonio.css";

// empezamos a crear nuestro componente. Vamos a empezar a crear los testimonios de nuestro primer proyecto
function Testimonio(props){
   return(
      <div className="contenedor-testimonio">
         {/* con los dos puntos le decimos que suba un nivel en el directorio */}
          <img className="imagen-testimonio" src={ require(`../imagenes/testimonio-${props.imagen}.png`) } alt="foto de emma"/>

          <div className="contenedor-texto-testimonio"> 
             <p className="nombre-testimonio">{props.nombre} en {props.pais}</p>
             <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
             <p className="texto-testimonio">{props.testimonio}</p>
          </div>
      </div>
   );
}

// Luego de acabar nuesto componente, lo exportamos para luego importarlo en nuestra App.js
export default Testimonio;