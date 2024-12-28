import Axios from "axios";

const baseUrl = "http://127.0.0.1:8000/";

const AxiosInstance = Axios.create({
  baseURL: baseUrl,
  timeout: 4000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default AxiosInstance;
