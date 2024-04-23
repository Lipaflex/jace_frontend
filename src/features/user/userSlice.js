import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./userService";
import { toast } from "react-toastify";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await authService.register(userData);
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message });
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login", 
  async (userData, thunkAPI) => {
    try {
      const response = await authService.login(userData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ message: error.message }); 
    }
  }
);

const initialState={
    user: null,
    token: null,
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
            })
            .addCase(registerUser.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.user = action.payload;
              toast.success("Registration successful");
            })
            .addCase(registerUser.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.message = action.payload;
              toast.error(action.payload);
          })
          .addCase(loginUser.pending, state => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          if(action.payload) {
            state.user = action.payload;
            state.token = action.payload.token;
            localStorage.setItem("token", action.payload.token);
          }
          state.isLoading = false;
          state.isSuccess = true;
          toast.success("Login successful");
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
          state.message = action.payload;
          toast.error(action.payload);
      });
    },
});

export default authSlice.reducer;