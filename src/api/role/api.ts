import axios from "@/lib/axios";

const API = {
  getAllRole: async () => {
    const { data } = await axios.get("roles");
    return data;
  },
};

export default API;
