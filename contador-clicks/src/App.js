import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import logo from './imagenes/freecodecamp_logo.png'

// para usar los hooks debemos importarlo de react
import { useState } from 'react'; 

function App() {

    // COMENZANDO A TRABAJAR CON LOS HOOKS

    // definimos en un array, el componente al que le cambiaremos el estado, como segundo elemento, le pasamos la funcion que actualizara el estado
    //numeroClick es la variable y setNumeroClick es la funcion que actualizara el estado
    //en = useState(0) le definimos un valor inicial
    const [numeroClick, setNumeroClicks] = useState(0);


    const manejarClick = () => {
        //Para actualizar el estado, llamamos esa funcion setNumeroClicks y entre llaves, pondremos el valor que recibira el estado
        setNumeroClicks(numeroClick + 1)
    }
    
    const reiniciarContador = () => {
        //Para actualizar el estado, llamamos esa funcion setNumeroClicks y entre llaves, pondremos el valor que recibira el estado
        setNumeroClicks(0)
    }

    return (
        <div className="App">

            <div className='logo-contenedor'>
                <img 
                className='logo' 
                src={logo}
                alt='logo de freeCodeCamp'/>
            </div>

            <div className='contenedor-contador' >
                <Contador numeroClick={numeroClick} />

                <Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
                
                <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
            </div>
        </div>
    );
}

export default App;
