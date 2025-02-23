import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'salmon',
      }}
    >
      {/* Home Screen */}
      <Tabs.Screen 
        name="index" 
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }} 
      />

      {/* Survey Screen */}
      <Tabs.Screen 
        name="survey" 
        options={{
          title: 'Survey',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'happy' : 'happy-outline'} color={color} size={24} />
          ),
        }} 
      />

      {/* Chat Screen */}
      <Tabs.Screen 
        name="chat" 
        options={{
          title: 'Chat',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'chatbubbles' : 'chatbubbles-outline'} color={color} size={24} />
          ),
        }} 
      />

      {/* Profile Screen (Google Authentication) */}
      <Tabs.Screen 
        name="profile" 
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'person' : 'person-outline'} color={color} size={24} />
          ),
        }} 
      />
    </Tabs>
  );
}