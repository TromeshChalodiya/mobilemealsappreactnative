import { Platform } from "react-native";

const localHost = "http://localhost:5001/mealstogo-4ddc4/us-central1/";
const liveHost = "http://us-central1-mealstogo-43new3.cloudfuncitons/";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = true;

// android do not have ability to use the http for localHost so we have to directly hit livehost
export const host = !isDevelopment || isAndroid ? liveHost : localHost;
