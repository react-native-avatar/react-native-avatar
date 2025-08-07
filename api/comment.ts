import { CreateCommentDto } from "@/types";
import axiosInstance from "./axios";

async function createComment(body: CreateCommentDto) {
  const { data } = await axiosInstance.post("/comments", body);

  return data;
}

async function deleteComment(id: number) {
  const { data } = await axiosInstance.delete(`/comments/${id}`);

  return data;
}

export { createComment, deleteComment };
