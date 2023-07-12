import axios from "axios";

export const homeApi = {
  getAllBrand: () => {
    return axios.get("http://localhost:5000/brands");
  },
};
