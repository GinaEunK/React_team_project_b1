import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentThunk = createAsyncThunk(
  "getComment",
  async (payload, repleapi) => {
    try {
      const data = await axios.get("http://localhost:3001/reple");
      console.log(data);
      return repleapi.fulfillWithValue(data.data);
    } catch (e) {}
  }
);

export const addCommentThunk = createAsyncThunk(
  "postComment",
  async (payload, repleapi) => {
    try {
      const data = await axios.post("http://localhost:3001/reple", payload);
      // console.log(save);
      return repleapi.fulfillWithValue(data.data);
    } catch (e) {
      return repleapi.rejectWithValue(e);
    }
  }
);

export const delCommentThunk = createAsyncThunk(
  "delComment",
  async (payload, relpeapi) => {
    try {
      axios.delete(`http://localhost:3001/reple/${payload}`);
      return relpeapi.fulfillWithValue(payload);
    } catch (e) {
      return relpeapi.rejectWithValue(e);
    }
  }
);

const initialState = {
  reple: [],
};

export const CommentSlice = createSlice({
  name: "reple",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentThunk.fulfilled]: (state, action) => {
      state.reple = action.payload;
    },
    [getCommentThunk.rejected]: (state, action) => {
      console.log(state);
      state.error = action.payload;
    },
    [getCommentThunk.pending]: (state, action) => {
      console.log(action);
      console.log(state);
    },
    [addCommentThunk.pending]: (state) => {
      console.log(state);
    },
    [addCommentThunk.fulfilled]: (state, action) => {
      state.reple = [...state.reple, action.payload];
    },
    [addCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [delCommentThunk.fulfilled]: (state, action) => {
      const target = state.reple.findIndex(
        (reple) => reple.id === action.payload
      );

      state.reple.splice(target, 1);
    },
    [delCommentThunk.rejected]: () => {},
    [delCommentThunk.pending]: () => {},
  },
});

export let { clearTodo } = CommentSlice.actions;
export default CommentSlice.reducer;
