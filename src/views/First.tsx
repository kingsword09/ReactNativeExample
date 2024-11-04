import React, {Fragment} from 'react';
import {StackFirstProps} from '../navigation/navigation';
import {Button, Text, View} from 'react-native';
import {usePersistanceStore} from '../store/usePersistanceStore';

const First = ({navigation: {navigate}}: StackFirstProps) => {
  const {count, increment, decrement, reset} = usePersistanceStore();
  return (
    <Fragment>
      <Button title="about" onPress={() => navigate('About')} />
      <View>
        <Text>{count}</Text>
        <Button title="add" onPress={() => increment(count)} />
        <Button title="subtract" onPress={() => decrement(count)} />
        <Button title="reset" onPress={reset} />
      </View>
    </Fragment>
  );
};

export default First;
