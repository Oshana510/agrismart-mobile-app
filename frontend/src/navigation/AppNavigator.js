import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import DashboardScreen from '../screens/DashboardScreen';
import FarmProfileScreen from '../screens/FarmProfileScreen';
import InventoryScreen from '../screens/InventoryScreen';
import MachineryScreen from '../screens/MachineryScreen';
import TaskScreen from '../screens/TaskScreen';
import FinanceScreen from '../screens/FinanceScreen';
import LaborScreen from '../screens/LaborScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#2e7d32' },
        headerTintColor: '#fff',
        tabBarActiveTintColor: '#2e7d32',
      }}
    >
      <Tab.Screen name="Home" component={DashboardScreen} options={{
        tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
      }} />
      <Tab.Screen name="Farm" component={FarmProfileScreen} options={{
        tabBarIcon:({ color }) => <MaterialCommunityIcons name="barn" size={24} color={color} />
      }} />
      <Tab.Screen name="Inventory" component={InventoryScreen} options={{
        tabBarIcon:({ color }) => <MaterialIcons name="inventory" size={24} color={color}/>
      }}/>
      <Tab.Screen name="Machinery" component={MachineryScreen} options={{
        tabBarIcon:({ color }) => <Entypo name="tools" size={24} color={color} />
      }}/>
      <Tab.Screen name="Tasks" component={TaskScreen} options={{
        tabBarIcon:({ color }) => <FontAwesome5 name="tasks" size={24} color={color} />
      }}/>
      <Tab.Screen name="Finance" component={FinanceScreen} options={{
        tabBarIcon:({ color }) => <MaterialCommunityIcons name="finance" size={24} color={color} />
      }}/>
      <Tab.Screen name="Labor" component={LaborScreen} options={{
        tabBarIcon:({ color }) => <FontAwesome6 name="person" size={24} color={color} />
      }}/>
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#2e7d32' },
          headerTintColor: '#fff',
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Create Account' }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}