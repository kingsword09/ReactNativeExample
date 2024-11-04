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

import {createNativeBottomTabNavigator} from 'react-native-bottom-tabs/react-navigation';
import loadable from '@loadable/component';
import {BottomTabParamList} from './navigation/bottomTabs';

const navigationRef = createNavigationContainerRef<RootStackParamList>();

const HomeTab = loadable(() => import('~/screens/Home'));
const My = loadable(() => import('~/screens/My'));

/// bottom-tab
const BottomTabs = createNativeBottomTabNavigator<BottomTabParamList>();

const NavigationScreen = ({ready = false}: NavigationScreenProps) => {
  if (ready) {
    console.log('isReady!!!');
  }
  return (
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <BottomTabs.Navigator ignoresTopSafeArea={true}>
        <BottomTabs.Screen
          name="Home"
          options={{title: 'Home', tabBarIcon: () => ({sfSymbol: 'house'})}}
          component={HomeTab}
        />
        <BottomTabs.Screen
          name="My"
          options={{title: 'My', tabBarIcon: () => ({sfSymbol: '0.circle'})}}
          component={My}
        />
      </BottomTabs.Navigator>
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
