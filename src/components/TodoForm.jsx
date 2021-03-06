import React, { useState, useEffect, useRef } from 'react'
import * as actionCreators from './../action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function TodoForm(props) {

  const [input, setInput] = useState(props.edit ? props.edit.value : '')

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  function handleSubmit(e) {
    e.preventDefault();
    if (!props.edit) {
      props.addTodo({
        id: Math.floor(Math.random() * 10000),
        text: input,
        isComplete: false
      }, props.user)
      setInput('')
    } else {
      props.updateTodo(props.edit.id, props.user.email ,input)
    }
  }

  function handleChange(e) {
    setInput(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Actualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button onClick={handleSubmit} className='todo-button'>
            Agregar
          </button>
        </>
      )}
    </form>
  )
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)