import React from "react"
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorBoundary() {
	const error = useRouteError();
	console.error({ error })
	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return <div>this_page_doesnt_exist !</div>;
		}
		if (error.status === 401) {
			return <div>you_arent_authorized_to_see_this</div>;
		}
		if (error.status === 503) {
			return <div>looks_like_our_api_is_down</div>;
		}
		if (error.status === 418) {
			return <div>🫖</div>;
		}
	}
	console.error(error)
	return <div>
        Something went wrong
    </div>
}