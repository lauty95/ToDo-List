import React from 'react'
import * as actionCreators from './../action'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

function SignIn(props) {

    if (props.user.displayName !== ''){
        props.traerTodos(props.user.email)
    }

    return (
        <div>
            {
                props.user.displayName === '' ?
                    <button onClick={props.signIn}>Sign In</button>
                    :
                    <>
                        <img alt="foto usuario" src={props.user.photoURL} height="60px" width="60px" />
                        <p>Hola! {props.user.displayName}</p>
                    </>
            }

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
