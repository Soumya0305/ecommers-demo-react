import { useDispatch } from "react-redux";

export const useLogin = () => {
    const dispatch = useDispatch();

    return (payload) => {
        dispatch({type: "auth/_logout", payload})
    }
}