import React, {Fragment} from 'react';
import {StackAboutProps} from '../navigation/navigation';
import {Button} from 'react-native';

const About = ({navigation: {navigate}}: StackAboutProps) => {
  return (
    <Fragment>
      <Button title="home" onPress={() => navigate('Home')} />
    </Fragment>
  );
};

export default About;
