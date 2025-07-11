import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import FeedItem from "./FeedItem";
import { colors } from "@/constants";

const dummyData = [
  {
    id: 1,
    userId: 1,
    title: "더미 제목입니다.",
    description:
      "더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다.  더미 내용입니다.더미 내용입니다.  더미 내용입니다. 더미 내용입니다.",
    createdAt: "2025-01-01",
    author: {
      id: 1,
      nickname: "닉네임",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
  {
    id: 2,
    userId: 1,
    title: "더미 제목입니다.",
    description:
      "더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다. 더미 내용입니다.  더미 내용입니다.더미 내용입니다.  더미 내용입니다. 더미 내용입니다.",
    createdAt: "2025-02-01",
    author: {
      id: 1,
      nickname: "닉네임",
      imageUri: "",
    },
    imageUris: [],
    likes: [],
    hasVote: false,
    voteCount: 1,
    commentCount: 1,
    viewCount: 1,
  },
];

function FeedList() {
  return (
    <FlatList
      data={dummyData}
      renderItem={({ item }) => <FeedItem post={item} />}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.contentContainer}
    />
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 12,
    backgroundColor: colors.GRAY_200,
    gap: 12,
  },
});

export default FeedList;
