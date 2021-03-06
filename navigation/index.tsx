import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';

import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import Color from '../constants/Colors';
import { View } from '../components/Themed';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';

// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();
// Root Navigation
function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Color.light.tint,
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTintColor: Color.light.background,
        headerTitleAlign: 'left',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name="Root" // default tab name if not provided
        component={MainTabNavigator}
        options={{
          title: 'WhatsApp',
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: Color.light.tint,
                width: 60,
                justifyContent: 'space-between',
                marginRight: 10,
              }}
            >
              <Octicons name="search" size={22} color={'white'} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={'white'}
              />
            </View>
          ),
        }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={({ route }) => ({
          title: route.params.name,
          headerRight: () => (
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: Color.light.tint,
                width: 100,
                justifyContent: 'space-between',
                marginRight: 10,
              }}
            >
              <FontAwesome5 name="video" size={22} color={'white'} />
              <MaterialIcons name="call" size={22} color={'white'} />
              <MaterialCommunityIcons
                name="dots-vertical"
                size={22}
                color={'white'}
              />
            </View>
          ),
        })}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
}
