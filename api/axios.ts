import axios from "axios";
import { Platform } from "react-native";

export const baseUrls = {
  android: "http://10.0.2.2:3030",
  ios: "http://localhost:3030",
};

const axiosInstance = axios.create({
  baseURL: Platform.OS === "android" ? baseUrls.android : baseUrls.ios,
});

export default axiosInstance;
