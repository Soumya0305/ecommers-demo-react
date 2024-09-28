import React from 'react'
import { useLogin } from '../custom/useLogin'
import { connect } from 'react-redux'

const Navbar = (props) => {
    const logOut = useLogin()
  return (
    <div>
        {props.authenticated ? <button onClick={() =>  logOut({})}>Logout</button> : null}
    </div>
  )
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authData.authenticated,
        expires_at: state.auth.authData.expires_at,
		token: state.auth.authData.token,
	}
}
export default connect(mapStateToProps)(Navbar)
