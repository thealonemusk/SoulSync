import { Stack } from 'expo-router';
import '../../global.css';

import Purchases from 'react-native-purchases';
import { useEffect } from 'react';
import { Platform } from 'react-native';

const apiKey = Platform.select({
  ios: process.env.EXPO_PUBLIC_REVENUE_CAT_APPLE_KEY,
  android: process.env.EXPO_PUBLIC_REVENUE_CAT_ANDROID_KEY,
});

export default function RootLayout() {
  useEffect(() => {
    Purchases.setLogLevel(Purchases.LOG_LEVEL.DEBUG);
    Purchases.configure({ apiKey });
  }, []);

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Meditations' }} />
      <Stack.Screen
        name="meditation/[id]"
        options={{ headerShown: false, animation: 'slide_from_bottom' }}
      />
    </Stack>
  );
}
