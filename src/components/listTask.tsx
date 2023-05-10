import { useTodo } from '../hooks/useTodo';
import type { Todo } from '../store/slice/todoSlice';

export default function ListTask() {
  const { list, toggleTodo, deleteTodo } = useTodo();

  function handleToggle(id: number) {
    toggleTodo(id);
  }

  function handleDelete(id: number) {
    deleteTodo(id);
  }

  if (list.length === 0) {
    return (
      <div className='w-4/5 bg-slate-500 mx-auto mt-6 rounded shadow-2xl'>
        <ul className='py-4'>
          <li className='w-4/5 mx-auto my-3 rounded-lg px-2 border-2 border-black pb-2 bg-slate-50'>
            <h3>No tasks</h3>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className='w-4/5 bg-slate-500 mx-auto mt-6 rounded shadow-2xl'>
      <ul className='py-4'>
        {list.map((todo: Todo) => {
          return (
            <li
              className={`w-4/5 mx-auto my-3 rounded-lg px-2 border-2 border-black pb-2 ${
                todo.completed ? 'bg-green-600' : 'bg-slate-50'
              }`}
              key={todo.id}
            >
              <h3>{todo.description}</h3>
              <div className='flex justify-end gap-3'>
                <button
                  onClick={() => handleToggle(todo.id)}
                  className='bg-blue-600 hover:bg-blue-400 px-2 rounded'
                >
                  Toggle
                </button>
                <button
                  onClick={() => handleDelete(todo.id)}
                  className='bg-red-600 hover:bg-red-400 rounded px-2'
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
