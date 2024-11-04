import React, {Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loadable from '@loadable/component';
import {RootStackParamList} from '~/navigation/navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();
const NavigatorHome = loadable(() => import('~/views/Home'));
const About = loadable(() => import('~/views/About'));

const Home = () => {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={NavigatorHome} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default Home;
