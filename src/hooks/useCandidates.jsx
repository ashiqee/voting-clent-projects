import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useCandidates = () => {
  const axiosSecure = useAxiosSecure();
  const { data: candidate = [] } = useQuery({
    queryKey: ["candidate"],
    queryFn: async () => {
      const res = await axiosSecure.get("");
      return res.data;
    },
  });

  return [candidate];
};

export default useCandidates;
