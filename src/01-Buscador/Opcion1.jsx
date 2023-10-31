import { useForm } from '../hooks/useForm';

export const Opcion1 = ({onNewTodo}) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    if( description.length <= 1 && description.length == 9  ) return;

    const newTodo ={
      description,
    }

    onNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={ onFormSubmit }>
        <input 
            type='text' 
            placeholder='Número de RUC/Número de Factura'
            className='box ' 
            name='description'   
            value={ description }
            onChange={ onInputChange }
        />
        <button
            type='submit'
            className='btn btn-outline-primary mt-1'
        >
            Enviar
        </button>
    </form>
  )
}
