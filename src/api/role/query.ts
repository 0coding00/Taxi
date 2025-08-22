import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "./api";

const queries = {
  GetAllRole: () =>
    useQuery({
      queryKey: ["roles"],
      queryFn: API.getAllRole,
    }),
};

export default queries;
