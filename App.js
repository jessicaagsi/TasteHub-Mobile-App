import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';


// Screen
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


// Bottom Navigation
function BottomTabs() {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({

        tabBarIcon: ({ focused, color, size }) => {

          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          }

          else if (route.name === 'Cart') {
            iconName = focused
              ? 'cart'
              : 'cart-outline';
          }

          else if (route.name === 'Profile') {
            iconName = focused
              ? 'person'
              : 'person-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={24}
              color={color}
            />
          );
        },

        tabBarActiveTintColor: '#ff7f50',
        tabBarInactiveTintColor: 'gray'
      })}
    >

      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
      />

    </Tab.Navigator>

  );
}

// Stack Navigation
export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>

        {/* Bottom Tab */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />

        {/* Detail Screen */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );
}