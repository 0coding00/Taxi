import axios from "@/lib/axios";

const API = {
  getAllDriver: async (page: number, limit: number) => {
    const { data } = await axios.get("driver", {
      params: {
        page,
        limit,
      },
    });
    return data;
  },
  approvedDriver: async (id: string) => {
    const { data } = await axios.put(`driver/approve/${id}`);
    return data;
  },
  availablilityDriver: async (id: string) => {
    const { data } = await axios.put(`driver/availablility/${id}`);
    return data;
  },
  deleteDriver: async (id: string) => {
    const { data } = await axios.delete(`driver/${id}`);
    return data;
  },
};

export default API;
