import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";
//import axios from "axios";
//import { base_url } from "../../Utils/axiosConfig";
//import { registerUser } from './authActions';

//const base_url="http://localhost:5000/api/v1/";
export const registerUser = createAsyncThunk(
  'user/register',
  async (userData) => {
    return await authService.register(userData);// Ensure response.data is a serializable value
  }
  
);

export const loginUser = createAsyncThunk("auth/login", async (userData, thunkAPI) => {
    try {
      return await authService.login(userData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
} 
);

const initialState={
    user:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
};


export const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.user = action.payload;
                state.isError = false;
                state.message = "";

                if(state.isSuccess){
                    toast.success("User created successfully");
                }
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.message = action.error.message;
                toast.error(action.error.message);
            });
    }
})

export default authSlice.reducer;