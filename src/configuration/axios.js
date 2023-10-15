import axios from "axios";

export const axiosConfiguration = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:4000/api/v1/',
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  }
});
