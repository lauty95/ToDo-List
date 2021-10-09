import { INICIAR_SESION, ADD_TODO, REMOVE_TODO, UPDATE_TODO, COMPLETE_TODO, ACTUALIZAR } from './type'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function signIn() {
    return function (dispatch) {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(login(result))
            }).catch((error) => {
                return alert("Error code: ", error.code)
            });
    }

}

export function login(data) {
    return {
        type: INICIAR_SESION,
        payload: data.user
    }
}

export function addTodo(todo) {
    if (!todo.text || /^\s*$/.test(todo.text)) {
        return
    }

    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function removeTodo(id) {
    return {
        type: REMOVE_TODO,
        payload: id
    }
}

export function updateTodo(id, value) {
    return {
        type: UPDATE_TODO,
        payload: { id, text:value }
    }
}

export function completeTodo(id) {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export function actualizar(id, value) {
    return {
        type: ACTUALIZAR,
        payload: {id, value}
    }
}