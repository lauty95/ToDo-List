import { INICIAR_SESION, ADD_TODO, REMOVE_TODO, UPDATE_TODO, COMPLETE_TODO, ACTUALIZAR } from './../action/type'

const initialState = {
    user: { displayName: '', photoURL: '' },
    todos: [],
    edit: { id: null, value: '' }
}

function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case INICIAR_SESION:
            return {
                ...state,
                user: payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [payload, ...state.todos]
            }
        case REMOVE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case UPDATE_TODO:
            let newTodo = state.todos.map(item => (item.id === payload.id ? payload : item))
            return {
                ...state,
                todos: newTodo,
                edit: { id: null, value: '' }
            }
        case COMPLETE_TODO:
            let updateTodos = state.todos.map(todo => {
                if (todo.id === payload) {
                    todo.isComplete = !todo.isComplete
                }
                return todo
            })
            return {
                ...state,
                todos: updateTodos
            }
        case ACTUALIZAR:
            let act = {id: payload.id, value: payload.value }
            return {
                ...state,
                edit: act
            }
        default:
            return state;
    }
}

export default reducer;