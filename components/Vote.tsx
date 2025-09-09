import { colors } from "@/constants";
import useAuth from "@/hooks/queries/useAuth";
import { PostVote } from "@/types";
import { Feather } from "@expo/vector-icons";
import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

interface VoteProps {
  postId: number;
  postVotes: PostVote[];
  voteCount: number;
}

function Vote({ postId, postVotes, voteCount }: VoteProps) {
  const { auth } = useAuth();

  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <Text style={styles.labelTitle}>투표</Text>
        <View style={styles.labelCount}>
          <Feather name="user" size={14} color={colors.BLACK} />
          <Text style={styles.labelCountText}>{voteCount}명 참여</Text>
        </View>
      </View>

      {postVotes.map((vote) => {
        const voteUserIds = vote.options.flatMap((option) =>
          option.userVotes.map((userVote) => userVote.userId)
        );
        const isVoted = voteUserIds.includes(Number(auth.id));

        return (
          <Fragment key={vote.id}>
            {vote.options.map((option) => {
              return <Text key={option.id}>{option.content}</Text>;
            })}
          </Fragment>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: colors.GRAY_300,
    borderRadius: 8,
    padding: 16,
    gap: 15,
  },
  label: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  labelTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.ORANGE_600,
  },
  labelCount: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  labelCountText: {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default Vote;
