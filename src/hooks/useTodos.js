import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useTodos = () => {
    const navigate = useNavigate();
    const [opcionSeleccionada, setOpcionSeleccionada] = useState('opcion1');
        
        const handleSeleccionarOpcion = (event) => {
            setOpcionSeleccionada(event.target.value);
            const opcionSeleccionada = event.target.value;
            console.log(opcionSeleccionada);
            navigate(`/${opcionSeleccionada}`); 
        }; 
  
        const handleNewTodo = ( todo ) => {
            console.log({ todo });
        }
    return {
        handleNewTodo,
        handleSeleccionarOpcion,
        opcionSeleccionada    
    }
}
