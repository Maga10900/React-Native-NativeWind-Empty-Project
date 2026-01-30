import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#FFD233' }}>
      <Tabs.Screen name="index" options={{ title: "", tabBarIcon: ({color, size}) => <Ionicons name="location" size={size} color={color} /> }} />
      <Tabs.Screen name="favorite" options={{ title: "", tabBarIcon: ({color, size}) => <Ionicons name="heart" size={size} color={color} /> }} />
      <Tabs.Screen name="notification" options={{ title: "", tabBarIcon: ({color, size}) => <Ionicons name="notifications" size={size} color={color} /> }} />
      <Tabs.Screen name="profile" options={{ title: "", tabBarIcon: ({color, size}) => <Ionicons name="person" size={size} color={color} /> }} />
    </Tabs>
  );
}