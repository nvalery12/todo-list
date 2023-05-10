import { addTodo, deleteTodo, toggleTodo } from '../store/slice/todoSlice';
import { useAppDispatch, useAppSelector } from './redux';

export function useTodo() {
  const list = useAppSelector((state) => state.list.todos);
  const dispatch = useAppDispatch();
  return {
    list,
    addTodo: (description: string) => {
      dispatch(addTodo(description));
    },
    toggleTodo: (id: number) => {
      dispatch(toggleTodo(id));
    },
    deleteTodo: (id: number) => {
      dispatch(deleteTodo(id));
    },
  };
}
