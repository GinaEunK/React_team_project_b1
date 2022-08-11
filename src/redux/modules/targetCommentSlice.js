import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTargetCommentThunk = createAsyncThunk(
  "getComment",
  async (payload, repleapi) => {
    try {
      const data = await axios.get(`http://localhost:3001/movies/${payload}`);
      console.log(data);
      return repleapi.fulfillWithValue(data.data);
    } catch (e) {
      return repleapi.rejectWithValue(e);
    }
  }
);

export const editCommentThunk = createAsyncThunk(
  "editComment",
  async (payload, repleapi) => {
    try {
      axios.patch(`http://localhost:3001/reple/${payload.id}`, payload);
      return repleapi.fulfillWithValue(payload);
    } catch (e) {
      return repleapi.rejectWithValue(e);
    }
  }
);

const initialState = {
  reple: [],
};

export const targetCommentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getTargetCommentThunk.fulfilled]: (state, action) => {
      state.reple = action.payload;
    },
    [getTargetCommentThunk.rejected]: (state, action) => {
      console.log(state);
      state.error = action.payload;
    },
    [getTargetCommentThunk.pending]: (state, action) => {
      console.log(action);
      console.log(state);
    },
    [editCommentThunk.fulfilled]: (state, action) => {
      state.reple.map((reple) => {
        if (reple.id == action.payload.id) {
          reple.body = action.payload.body;
        }
        return reple;
      });
    },
    // [editCommentThunk.fulfilled]: (state, action) => {
    //   state.reple.id = action.payload.id;
    // },
    [editCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [editCommentThunk.pending]: (state) => {
      console.log(state);
    },
  },
});

export let {} = targetCommentSlice.actions;
export default targetCommentSlice.reducer;
