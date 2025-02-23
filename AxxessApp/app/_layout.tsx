import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      {/* Tabs Navigation (Includes Home, Survey, Chat, and Profile) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* Optional Additional Screens (Login, etc.) */}
      <Stack.Screen name="login" options={{ title: 'Login' }} />
    </Stack>
  );
}