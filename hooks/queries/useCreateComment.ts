import { createComment } from "@/api/comment";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";
import { useMutation } from "@tanstack/react-query";

function useCreateComment() {
  return useMutation({
    mutationFn: createComment,
    onSuccess: (postId: number) => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POST, postId],
      });
    },
  });
}

export default useCreateComment;
