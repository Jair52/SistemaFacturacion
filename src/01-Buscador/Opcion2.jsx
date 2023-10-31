import { useForm } from '../hooks/useForm';

export const Opcion2 = ({onNewTodo}) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = ( event ) => {
    event.preventDefault();
    if( description.length <= 1 && description.length == 49 ) return;

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
            placeholder='Número de Facturación'
            className='box' 
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
