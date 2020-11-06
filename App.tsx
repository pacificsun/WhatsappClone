import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import { Auth } from 'aws-amplify';

import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  // Run this snippet only when app is first mounted
  useEffect(() => {
    const fetchUser = async () => {
      // Get authenticated user from auth
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      }); // bypassCache means we are not taking from cache but from server

      console.log('userInfo>>', userInfo);
      if (userInfo) {
        // Get the user from Backend with user sub from Auth
        // if there is no user in db with the id then create one
      }
    };
    fetchUser();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);
