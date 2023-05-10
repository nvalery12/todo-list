import { useState } from 'react';
import { useTodo } from '../hooks/useTodo';

export default function InputTask() {
  const {addTodo} = useTodo();
  const [description, setDescription] = useState('');

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (description.trim() === '') {
      return;
    }
    addTodo(description);
    setDescription('');
  }

  return (
    <div className='w-4/5 bg-slate-500 rounded-2xl shadow-2xl h-11 mx-auto pt-[8px]'>
      <form className='grid grid-cols-2'>
        <input
          className='w-4/5 mx-auto px-3 rounded-lg'
          type='text'
          placeholder='Add a task'
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
        <button
          className='w-2/5 mx-auto font-semibold bg-green-500 rounded-xl hover:bg-green-800 hover:text-white border-2 hover:border-blue-400'
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </form>
    </div>
  );
}
