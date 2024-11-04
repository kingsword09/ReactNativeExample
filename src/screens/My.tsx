import React from 'react';
import {Button, View, StyleSheet} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

const My = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = width.value + 50;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[{width: width}, styles.animatedView]} />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  animatedView: {
    height: 100,
    backgroundColor: 'violet',
  },
});

export default My;
