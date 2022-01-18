import React from 'react'
import * as actionCreators from './../action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import s from './landing.module.css'

function SignIn(props) {
    return (
        <div>
            <h1>Cuáles son los planes para hoy?</h1>
            <div className={s.boton}>
                {
                    props.user.displayName === '' ?
                        <button onClick={props.signIn}>Iniciar sesión con Google</button>
                        :
                        <>
                            <img alt="foto usuario" src={props.user.photoURL} height="60px" width="60px" />
                            <p>Hola! {props.user.displayName}</p>
                        </>
                }

            </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
