import axios from "axios";

export const instance = axios.create({
  baseURL: "https://dashboard-app-xi-one.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const BaseUrl = "https://dashboard-app-xi-one.vercel.app";
