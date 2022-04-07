import axios from "axios";

export const LoginService = async (email, password) =>
  await axios.post("/api/auth/login", { email, password });

export const SignUpService = async (firstName, lastName, email, password) =>
  await axios.post("/api/auth/signup", {
    email,
    password,
    firstName,
    lastName,
  });

// video services

export const FetchVideosService = async () => await axios.get("/api/videos");

// category services

export const FetchCategoryService = async () =>
  await axios.get("/api/categories");

// Like services

export const FetchLikedService = async (encodedToken) =>
  await axios.get("/api/user/likes", {
    headers: {
      authorization: encodedToken,
    },
  });

export const PostLikeService = async (encodedToken, video) =>
  await axios.post(
    "/api/user/likes",
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const DeleteLikeService = async (encodedToken, videoId) =>
  await axios.delete(`/api/user/likes/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

// Watch Later services

export const FetchWatchLaterService = async (encodedToken) =>
  await axios.get("/api/user/watchlater", {
    headers: {
      authorization: encodedToken,
    },
  });

export const PostWatchLaterService = async (encodedToken, video) =>
  await axios.post(
    "/api/user/watchlater",
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const DeleteWatchLaterService = async (encodedToken, videoId) =>
  await axios.delete(`/api/user/watchlater/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

// Playlist services

export const FetchPlaylistsService = async (encodedToken) =>
  await axios.get("/api/user/playlists", {
    headers: {
      authorization: encodedToken,
    },
  });

// History services

export const FetchHistoryService = async (encodedToken) =>
  await axios.get("/api/user/history", {
    headers: {
      authorization: encodedToken,
    },
  });
