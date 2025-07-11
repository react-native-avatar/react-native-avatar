import { colors } from "@/constants";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Post } from "@/types";
import Profile from "./Profile";

interface FeedItemProps {
  post: Post;
}

function FeedItem({ post }: FeedItemProps) {
  const isLiked = true;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Profile
          imageUri={post.author.imageUri}
          nickname={post.author.nickname}
          createdAt={post.createdAt}
          onPress={() => {}}
        />
        <Text style={styles.title}>{post.title}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {post.description}
        </Text>
      </View>
      <View style={styles.menuContainer}>
        <Pressable style={styles.menu}>
          <Octicons
            name={isLiked ? "heart-fill" : "heart"}
            size={16}
            color={isLiked ? colors.ORANGE_600 : colors.BLACK}
          />
          <Text style={isLiked ? styles.activeMenuText : styles.menuText}>
            1
          </Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <MaterialCommunityIcons
            name="comment-processing-outline"
            size={16}
            color={colors.BLACK}
          />
          <Text style={styles.menuText}>1</Text>
        </Pressable>
        <Pressable style={styles.menu}>
          <Ionicons name="eye-outline" size={16} color={colors.BLACK} />
          <Text style={styles.menuText}>1</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: "600",
    marginVertical: 8,
  },
  description: {
    fontSize: 16,
    color: colors.BLACK,
    marginBottom: 14,
  },
  menuContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopColor: colors.GRAY_300,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    width: "33%",
    gap: 4,
  },
  menuText: {
    fontSize: 14,
    color: colors.GRAY_700,
  },
  activeMenuText: {
    fontWeight: "500",
    color: colors.ORANGE_600,
  },
});

export default FeedItem;
