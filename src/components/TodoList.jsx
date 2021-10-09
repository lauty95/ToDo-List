import React from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
import { connect } from 'react-redux';


function TodoList(props) {

    return (
        <>
            <TodoForm />
            <Todo todos={props.todos} />
        </>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}


export default connect(mapStateToProps)(TodoList)
