import { Navigate } from 'react-router-dom';
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useLogin } from "../custom/useLogin.jsx";
import { connect } from "react-redux";
import BaseLayout from './BaseLayout.jsx';

const AuthenticatedPage = ({ authenticated, expires_at, impersonated_session, token }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const logout = useLogin();

	useEffect(() => {
		if (!location.pathname.includes("login")) {
			if (authenticated) {
				if ((expires_at * 1000) < Date.now()) {
					logout({})
					navigate("/")
				} else {
					if (location.pathname === "/" || location.pathname == "/login") {
						navigate("/dashboard")
					}
				}
			} else {
				logout({})
				navigate("/")
            }
        }
	}, [authenticated])

	useEffect(() => {
		if (!authenticated) {
			logout({})
			//navigate("/home")
		} else if ([ "/", "/login"].indexOf(location.pathname) > -1) {
			navigate("/dashboard")
		}

	}, [location.pathname])

	return <BaseLayout authenticated={authenticated}>
		<Outlet />
	</BaseLayout>
}

function mapStateToProps(state) {
	return {
		authenticated: state.auth.authData.authenticated,
        expires_at: state.auth.authData.expires_at,
		token: state.auth.authData.token,
	}
}
export default connect(mapStateToProps)(AuthenticatedPage)
