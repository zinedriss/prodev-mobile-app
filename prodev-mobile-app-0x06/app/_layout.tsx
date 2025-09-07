import "@/styles/global.css"
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack screenOptions={{
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="join" />
      <Stack.Screen name="signin" />
    </Stack>
  );
}