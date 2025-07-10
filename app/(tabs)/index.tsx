import FeedItem from "@/components/FeedItem";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <FeedItem
        post={{
          id: 1,
          userId: 1,
          title: "더미 제목입니다",
          description:
            "더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.더미 내용입니다.",
          createdAt: "",
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
        }}
      />
    </SafeAreaView>
  );
}
