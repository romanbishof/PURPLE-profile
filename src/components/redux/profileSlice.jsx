import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    avatarImg: '',
    jobTitle: '',
    currentCompany: '',
    about: '',
    phone: {
        areaCode: '',
        number: ''
    }
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{
        setProfile:(state, action) => {
            state.avatarImg = action.payload.avatarImg
            state.jobTitle = action.payload.jobTitle
            state.currentCompany = action.payload.currentCompany
            state.about = action.payload.about
            state.phone.areaCode = action.payload.phone.areaCode
            state.phone.number = action.payload.phone.number
        }
    }
})

export const {setProfile} = profileSlice.actions;

export default profileSlice.reducer;