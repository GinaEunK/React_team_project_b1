import { configureStore } from "@reduxjs/toolkit";
import movies from "./modules/movieSlice";
import movie from "./modules/targetMovieSlice";
import reple from "./modules/CommentSlice";

export default configureStore({
  reducer: {
    movies,
    movie,
    reple,
  },
});
