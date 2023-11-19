import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "data.json",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
