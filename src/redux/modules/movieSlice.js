import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

let movies = createSlice({
  name: "movies",
  initialState: [
    {
      id: 1,
      userid: "김은경",
      title: "해리포터",
      body: "재미있어요",
      img: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      id: 2,
      userid: "남궁은",
      title: "정글북 후기",
      body: "아주 많이 재미있었습니다.",
      img: "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_SX300.jpg",
    },
    {
      id: 3,
      userid: "서윤원",
      title: "탑건",
      body: "완전....톰크루즈 대박",
      img: "https://m.media-amazon.com/images/M/MV5BY2NlZjQ3ZTAtMzcxZC00MGZhLWFhNTQtN2M4NDBjYzIyOWNlXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
    },
  ],

  reducers: {
    addMovie: (state, action) => {
      return (state = [...state, action.payload]);
    },
    deleteMovie: (state, action) => {
      return (state = state.filter((movie) => movie.id !== action.payload));
    },
    editBody: (state, action) => {
      state = state.map((data) => {
        if (data.id === action.payload.id) {
          data.contents = action.payload.new;
        }
        return data;
      });
    },
    getBody: (state, action) => {
      state = state.map((data) => {
        if (data.id === action.payload) {
          state.id = action.payload;
        }
        return data;
      });
    },
  },
});

export let { addMovie, deleteMovie, editBody, getBody } = movies.actions;
export default movies.reducer;
