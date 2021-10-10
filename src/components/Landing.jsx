import React from 'react'
import SignIn from './SignIn'
import s from './landing.module.css'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'

function Landing(props) {
    return (
        <div className={s.cajaInicioSesion}>
            {props.user.email ? <Redirect to="/home" /> : <SignIn />}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Landing)
