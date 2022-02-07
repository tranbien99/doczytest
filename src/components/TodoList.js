import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';


function TodoList() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		if(!todo.text || /^\s*$/.test(todo.text)) {
			return;
		}

		const newTodos = [todo,...todos]

		setTodos(newTodos)
	}

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setTodos(updatedTodos)
	}

	const removeTodo = id => {
		const remove = [...todos].filter(todo => todo.id !== id)
		setTodos(remove)
	}

	const updateTodo = (todoId, newValue) => {
		if(!newValue.text || /^\s*$/.test(newValue.text)) {
			return;
		}

		setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
	}

	return (
		<>
			<h1>What will u do today ?</h1>
			<TodoForm onSubmit={addTodo}/>
			<Todo 
				todos={todos}
				completeTodo={completeTodo}
				removeTodo={removeTodo}
				updateTodo={updateTodo}
			/>
		</>
	)
}

export default TodoList;
