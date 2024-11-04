import React, {Fragment} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import loadable from '@loadable/component';
import {RootStackParamList} from '~/navigation/navigation';
const Stack = createNativeStackNavigator<RootStackParamList>();
const First = loadable(() => import('~/views/First'));
const About = loadable(() => import('~/views/About'));

const Home = () => {
  return (
    <Fragment>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </Fragment>
  );
};

export default Home;
