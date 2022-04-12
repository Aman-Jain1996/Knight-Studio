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

export const FetchVideoService = async (videoId) =>
  await axios.get(`/api/video/${videoId}`);

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

export const FetchSinglePlaylistService = async (encodedToken, playlistId) =>
  await axios.get(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const PostPlaylistService = async (encodedToken, title, desc) =>
  await axios.post(
    "/api/user/playlists",
    {
      playlist: { title, description: desc },
    },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const DeletePlaylistService = async (encodedToken, playlistId) =>
  await axios.delete(`/api/user/playlists/${playlistId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const AddVideoToPlaylistService = async (
  encodedToken,
  playlistId,
  video
) =>
  await axios.post(
    `/api/user/playlists/${playlistId}`,
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const RemoveVideoFromPlaylistService = async (
  encodedToken,
  playlistId,
  videoId
) =>
  await axios.delete(`/api/user/playlists/${playlistId}/${videoId}`, {
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

export const PostHistoryService = async (encodedToken, video) =>
  await axios.post(
    "/api/user/history",
    { video },
    {
      headers: {
        authorization: encodedToken,
      },
    }
  );

export const DeleteVideoHistoryService = async (encodedToken, videoId) =>
  await axios.delete(`/api/user/history/${videoId}`, {
    headers: {
      authorization: encodedToken,
    },
  });

export const DeleteAllHistoryVideoService = async (encodedToken) =>
  await axios.delete(`/api/user/history/all`, {
    headers: {
      authorization: encodedToken,
    },
  });
