import axios from "@/lib/axios";

const API = {
  getAllUsers: async (page: number, limit: number) => {
    const { data } = await axios.get("users", {
      params: {
        page,
        limit,
      },
    });
    return data;
  },
};

export default API;
