import { createSlice } from "@reduxjs/toolkit";
import { initialAuthDataSlice } from "./initialStates";
import { getUnixTime } from "date-fns";
import { toast } from "react-toastify";


export const authSlice = createSlice({
    name: "auth",
    initialState: initialAuthDataSlice,
    reducers: {
        _setAuthData: (state,action) => {
            state.authData = action.payload
        },
        _logout: (state) => {
            state.authData = { ...initialAuthDataSlice.authData }
        },
        _checkLogin: (state) => {
            const validToken = state.authData.token ? (state.authData.expires_at > getUnixTime(new Date())) : false
            if(state.authData.token !== null && !validToken){
                toast.error("Session expired! Please Login again");
                state.authData = { ...initialAuthDataSlice.authData }
            }
            else{
                return state;
            }
        }
    }
})
export const { _setAuthData, _logout, _checkLogin } = authSlice.actions;
export default authSlice.reducer;