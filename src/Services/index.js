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