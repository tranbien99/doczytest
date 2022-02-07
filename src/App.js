import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <DragDropContext>
        <TodoList /> 
      </DragDropContext>
    </div>
  );
}

export default App;
