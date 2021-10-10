import { INICIAR_SESION, ADD_TODO, REMOVE_TODO, UPDATE_TODO, COMPLETE_TODO, ACTUALIZAR, TRAER_TODOS } from './type'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from './../Firebase/firebase'
import { collection, addDoc, getDocs } from "firebase/firestore";

export function signIn() {
    return function (dispatch) {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                dispatch(login(result))
                console.log(result)
            }).catch((error) => {
                console.log(error)
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

export function addTodo(todo, user) {
    return async function (dispatch) {
        try {
            await addDoc(collection(db, user.email), {
                todo
            })

        } catch (e) {
            console.log(e)
        }
        dispatch(guardarToDo(todo))
    }
}

function guardarToDo(todo) {
    console.log('todo: ', todo)
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export function traerTodos(user) {
    return async function (dispatch) {
        let data = []
        const querySnapshot = await getDocs(collection(db, user));
        querySnapshot.forEach((doc) => {
            data.push(doc.data())
        })
        dispatch(dataTodos(data))
    }
}

function dataTodos(data) {
    return {
        type: TRAER_TODOS,
        payload: data
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
        payload: { id, text: value }
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
        payload: { id, value }
    }
}