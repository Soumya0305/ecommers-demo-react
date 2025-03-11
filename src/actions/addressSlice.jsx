import  { createSlice } from "react-redux";
import { initialAddress } from "../config/initialStates";

export const addressSlice = createSlice({
    name: "address",
    initialState: {
        addressData: {}
    },
    reducers: {
        _setAddress
    }
})