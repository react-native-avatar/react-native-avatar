import DescriptionInput from "@/components/DescriptionInput";
import TitleInput from "@/components/TitleInput";
import { FormProvider, useForm } from "react-hook-form";
import { ScrollView, StyleSheet } from "react-native";

type FormValues = {
  title: string;
  description: string;
};

export default function PostWriteScreen() {
  const postForm = useForm<FormValues>({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  return (
    <ScrollView style={styles.container}>
      <FormProvider {...postForm}>
        <TitleInput />
        <DescriptionInput />
        <DescriptionInput />
        <DescriptionInput />
        <DescriptionInput />
      </FormProvider>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 16,
    gap: 16,
  },
});
