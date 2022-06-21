import { configureStore } from '@reduxjs/toolkit';
import allJobsSlice from './features/allJobs/allJobsSlice';
import JobSlice from './features/Job/JobSlice';
import userSlice from "./features/user/userSlice";


export const store = configureStore({
    reducer:{
        user:userSlice,
        job:JobSlice,
        allJobs:allJobsSlice,
    },
});

