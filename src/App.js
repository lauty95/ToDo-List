import './App.css'
import SignIn from './components/SignIn';
import TodoList from './components/TodoList'
import { firebase } from './Firebase/firebase';

function App() {
  return (
    <>
      <SignIn />
      <div className='todo-app'>
        <h1>What's the Plan for Today?</h1>
        <TodoList />
      </div>
    </>
  );
}

export default App;
