import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import API from "./api";

const queries = {
  GetAllDriver: (page: number, limit: number) =>
    useQuery({
      queryKey: ["drivers", page, limit],
      queryFn: () => API.getAllDriver(page, limit),
    }),

  ApproveDriver: () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (id: string) => API.approvedDriver(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["drivers"] });
      },
    });
  },
  AvailablilityDriver: () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (id: string) => API.availablilityDriver(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["drivers"] });
      },
    });
  },
  DeletedDriver: () => {
    const queryClient = useQueryClient();

    return useMutation({
      mutationFn: (id: string) => API.deleteDriver(id),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["drivers"] });
      },
    });
  },
};

export default queries;
