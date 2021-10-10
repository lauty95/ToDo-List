import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { connect } from 'react-redux';
import './estilos.css'
import { Redirect } from 'react-router';

function TodoList(props) {
    if (!props.user.displayName) {
        return <Redirect to="/" />
    }
    return (
        <>
            <div className='todo-app'>
                <h1>What's the Plan for Today?</h1>
                <TodoForm />
                <Todo todos={props.todos} />
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
        todos: state.todos
    }
}


export default connect(mapStateToProps)(TodoList)
