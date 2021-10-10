import React from 'react'
import TodoForm from './TodoForm'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import * as actionCreators from './../action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function Todo(props) {

    if (props.edit.id) {
        return <TodoForm edit={props.edit} />
    }

    function actualizar({ id, text }) {
        props.actualizar(id, text)
    }

    console.log(props.todos)

    return props.todos.map((a, index) => (
        <div className={a.todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={a.todo.id} onClick={() => props.completeTodo(a.todo.id)}>
                {a.todo.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => props.removeTodo(a.todo.id)}
                    className='delete-icon' />
                <TiEdit
                    onClick={() => actualizar(a.todo)}
                    className='edit-icon' />
            </div>
        </div>
    ))
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        edit: state.edit,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
