import { Provider } from 'react-redux';
import InputTask from './components/inputTaks';
import ListTask from './components/listTask';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className='w-full h-screen bg-gray-200 pt-3'>
        <h1 className='font-extrabold text-center text-lg mb-5'>To do List</h1>
        <InputTask />
        <ListTask />
      </div>
    </Provider>
  );
}

export default App;
