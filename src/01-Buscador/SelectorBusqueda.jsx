import { Routes, Route, useNavigate} from 'react-router-dom';
import { Opcion1 } from "./Opcion1";
import { Opcion2 } from "./Opcion2";
import { useTodos } from "../hooks/useTodos";

export const SelectorBusqueda = () => {

    const{ handleNewTodo, handleSeleccionarOpcion, opcionSeleccionada } = useTodos();
    
return (
    <>  
        <div>
              
            <label className="espaciadod">Busqueda por:</label>
            <label>
                <input
                    className="espaciado"
                    type="radio"
                    value="opcion1"
                    checked={opcionSeleccionada === 'opcion1'}
                    onChange={handleSeleccionarOpcion}
                />
                RUC/Número de Factura
            </label>

            <label>  
                <input
                    className="espaciado"
                    type="radio"
                    value="opcion2"
                    checked={opcionSeleccionada === 'opcion2'}
                    onChange={handleSeleccionarOpcion}
                />
                Número de Facturación
            </label>
        </div>
        <Routes>
                
                <Route path="/opcion1" element={ <Opcion1 onNewTodo={ handleNewTodo } /> } />
                <Route path="/opcion2" element={ <Opcion2 onNewTodo={ handleNewTodo } /> } />
                <Route path="/*" element={ <Opcion1 onNewTodo={ handleNewTodo } /> } />

        </Routes>
    </>
  )
}
