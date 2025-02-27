import { Tabs } from 'expo-router';
import React from 'react';
// import { Platform, View } from 'react-native';

// import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
// import TabBarBackground from '@/components/ui/TabBarBackground';
// import { Colors } from '@/constants/Colors';
// import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
    return (
      <Tabs screenOptions={{
        tabBarStyle: { backgroundColor: 'black', borderTopWidth: 0 }, // تغيير لون الخلفية وإزالة الحدود العلوية
        tabBarActiveTintColor: 'white', // لون الأيقونات النشطة
        tabBarInactiveTintColor: 'gray', // لون الأيقونات غير النشطة
        tabBarLabelStyle: { fontSize: 14 }, // حجم النص أسفل الأيقونة
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            headerShown: false,
          }}
        />
      </Tabs>
    );
  }
  