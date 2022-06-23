import customFetch from '../../utils/axios';

export const getAllJobsThunk=async (_, thunkAPI) => {
     const { page, search, searchStatus, searchType, sort } =
      thunkAPI.getState().allJobs;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
     if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const response = await customFetch.get(url);
      //console.log(response.data);
      return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue('There was an Error..')
    }
  }

  export const showStatsThunk=async(_,thunkAPI)=>{
  try {
    const res=await customFetch.get('jobs/stats');
    console.log(res.data);
    return res.data; 
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg)
  }
}