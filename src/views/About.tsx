import React, {Fragment} from 'react';
import {StackAboutProps} from '../navigation/navigation';
import {Button} from 'react-native';

const About = ({navigation: {navigate}}: StackAboutProps) => {
  return (
    <Fragment>
      <Button title="first" onPress={() => navigate('First')} />
    </Fragment>
  );
};

export default About;
