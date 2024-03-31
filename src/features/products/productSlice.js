import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {productService} from "./productService";
import {toast } from "react-toastify";
import { authService } from "../user/userService";

export const getAllProducts=createAsyncThunk(
    "products/getAll",async (thunkAPI)=>{
        try{
            return await productService.getProducts();
        } catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    
});

const productState = {
    products:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}

export const  productSlice = createSlice({
    name:"products",
    initialState:productState,
    reducers:{
        
    },
    extraReducers:builder=>{
        builder.addCase(getAllProducts.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllProducts.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isSuccess=true;
            state.isError=false;
            state.products=action.payload;
        }).addCase(getAllProducts.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.isSuccess=false;
            state.message=action.error;
        });
    },
});

export default productSlice.reducer;