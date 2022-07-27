const localHost = "http://localhost:5001/mealstogo-4ddc4/us-central1/";
const liveHost = "http://us-central1-mealstogo-43new3.cloudfuncitons/";

export const isDevelopment = process.env.NODE_ENV === "development";

export const host = isDevelopment ? localHost : liveHost;
