import axios from "axios";

const BASE_URL = "https://mayra-1.herokuapp.com/api";
let TOKEN;

if (localStorage.getItem("persist:root")) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser.accessToken;
} else {
  TOKEN = "";
}

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `${TOKEN}` },
});
