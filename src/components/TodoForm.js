import React, {useState, useEffect, useRef} from 'react';

function TodoForm(props) {
	const [input, setInput] = useState('')

	const inputRef = useRef(null)

	useEffect(() => {
		inputRef.current.focus()
	})

	const handleSubmit = e => {
		e.preventDefault();
		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input
		})
		setInput('')
	}

	const handleChange = e => {
		setInput(e.target.value);
	}

	return (
		<>
			<form className='todo-form' onSubmit={handleSubmit}>
				<input 
					type='text' 
					placeholder='Write something' 
					value={input}
					name='text'
					className='todo-input'
					onChange={handleChange}
					ref={inputRef}
				>
				</input>
				<button className='todo-button'>ADD</button>
			</form>
		</>
  )
}

export default TodoForm;
