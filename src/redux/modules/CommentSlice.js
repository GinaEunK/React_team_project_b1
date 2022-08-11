import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCommentThunk = createAsyncThunk(
  "getComment",
  async (payload, repleapi) => {
    try {
      const data = await axios.get(
        "https://sheltered-wave-74565.herokuapp.com/reple"
      );
      return repleapi.fulfillWithValue(data.data);
    } catch (e) {}
  }
);

export const addCommentThunk = createAsyncThunk(
  "postComment",
  async (payload, repleapi) => {
    try {
      const data = await axios.post(
        "https://sheltered-wave-74565.herokuapp.com/reple",
        payload
      );
      // console.log(save);
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
      axios.patch(
        `https://sheltered-wave-74565.herokuapp.com/${payload.id}`,
        payload
      );
      return repleapi.fulfillWithValue(payload);
    } catch (e) {
      return repleapi.rejectWithValue(e);
    }
  }
);

export const checkCommentThunk = createAsyncThunk(
  "checkComment",
  async (payload, repleapi) => {
    try {
      axios.patch(
        `https://sheltered-wave-74565.herokuapp.com/reple/${payload.id}`,
        payload
      );
      return repleapi.fulfillWithValue(payload);
    } catch (e) {
      return repleapi.rejectWithValue(e);
    }
  }
);

export const delCommentThunk = createAsyncThunk(
  "delComment",
  async (payload, relpeapi) => {
    try {
      axios.delete(
        `https://sheltered-wave-74565.herokuapp.com/reple/${payload}`
      );
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
      // console.log(state);
      state.error = action.payload;
    },
    [getCommentThunk.pending]: (state, action) => {
      // console.log(action);
      // console.log(state);
    },
    [addCommentThunk.pending]: (state) => {
      // console.log(state);
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
    [editCommentThunk.fulfilled]: (state, action) => {
      state.reple.map((reple) => {
        if (reple.id == action.payload.id) {
          reple.body = action.payload.body;
        }
        return reple;
      });
    },

    [editCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [editCommentThunk.pending]: (state) => {
      // console.log(state);
    },
    [checkCommentThunk.fulfilled]: (state, action) => {
      state.reple.map((reple) => {
        if (reple.id == action.payload.id) {
          reple.isEditMode = !reple.isEditMode;
        }
        return reple;
      });
    },
    [checkCommentThunk.rejected]: (state, action) => {
      state.error = action.payload;
    },
    [checkCommentThunk.pending]: (state) => {
      // console.log(state);
    },
  },
});

export let { clearTodo } = CommentSlice.actions;
export default CommentSlice.reducer;
