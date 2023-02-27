import React from "react";
import '../css/contador.css'

function Contador({ numeroClick }){
    return(
        <div className="contador">
            { numeroClick }
        </div>
    )
}

export default Contador;