import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearAllJobsState } from '../allJobs/allJobsSlice';
import { clearValues } from '../Job/JobSlice';
export const registerUserThunk=async(url,user,thunkAPI)=>{
     try {
      const res = await customFetch.post(url, user);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const loginUserThunk=async(url,user,thunkAPI)=>{
     try {
      const res = await customFetch.post("/auth/login", user);
      //console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const updateUserThunk=async(url,user,thunkAPI)=>{
    try {
      const res = await customFetch.patch("/auth/updateUser", user);
      //console.log(res.data);
      return res.data;
    } catch (error) {
      //console.log(error)
      if(error.response.status===401){
        thunkAPI.dispatch(logoutUser());
        return thunkAPI.rejectWithValue('Unauthorized access.. Logging out..!!')
      }
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
}

export const clearStoreThunk=async(message,thunkAPI)=>{
  try {
     // logout user
    thunkAPI.dispatch(logoutUser(message));
    // clear jobs value
    thunkAPI.dispatch(clearAllJobsState());
    // clear job input values
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    // console.log(error);
    return Promise.reject();
  }
}