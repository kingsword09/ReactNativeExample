/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ErrorBoundary} from 'react-error-boundary';
import {
  NavigationScreenProps,
  RootStackParamList,
} from './navigation/navigation';
import ErrorFallback from './components/ErrorFallback';
import {
  NavigationContainer,
  DefaultTheme,
  createNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loadable from '@loadable/component';

const Stack = createNativeStackNavigator<RootStackParamList>();
const navigationRef = createNavigationContainerRef<RootStackParamList>();
const Home = loadable(() => import('~/views/Home'));
const About = loadable(() => import('~/views/About'));
const NavigationScreen = ({ready = false}: NavigationScreenProps) => {
  if (ready) {
    console.log('isReady!!!');
  }
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </ErrorBoundary>
  );
};

function App(): React.JSX.Element {
  const [ready, setReady] = useState(false);

  return (
    <GestureHandlerRootView>
      <NavigationContainer
        theme={DefaultTheme}
        ref={navigationRef}
        onReady={() => setReady(true)}>
        <NavigationScreen ready={ready} />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

export default App;
