import Landing from './components/Landing';
import { Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import { firebase } from './Firebase/firebase';

function App() {
  return (
    <>
      <Route path="/" component={Landing} exact />
      <Route path="/home" component={TodoList} exact />
    </>
  );
}

export default App;
