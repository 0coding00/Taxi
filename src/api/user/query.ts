import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "./api";

const queries = {
  GetAllUsers: (page: number, limit: number) =>
    useQuery({
      queryKey: ["users", page, limit],
      queryFn: () => API.getAllUsers(page, limit),
    }),
};

export default queries;
