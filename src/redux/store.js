import { configureStore } from "@reduxjs/toolkit";
import movies from "./modules/movieSlice";
import movie from "./modules/targetMovieSlice";
import reple from "./modules/CommentSlice";
import comment from "./modules/targetCommentSlice";

export default configureStore({
  reducer: {
    movies,
    movie,
    reple,
    comment,
  },
});
