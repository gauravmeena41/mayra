import axios from "axios";

const BASE_URL = "http://localhost:7000/api";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTQ4OWRiOGVjNzQ5ODM3NDEwODE2YyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MzMxNTU0NTcsImV4cCI6MTYzMzQxNDY1N30.ZwMaXx_MCy4bMUeKxnB_fvKgLzfKpaXijsEL6-YOZQI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer  ${TOKEN}` },
});
