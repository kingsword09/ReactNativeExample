import {FallbackProps} from 'react-error-boundary';
import {Button, Text, View} from 'react-native';
import React from 'react';

const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  return (
    <View>
      <Text>{error}</Text>
      <Button title="reset" onPress={resetErrorBoundary} />
    </View>
  );
};

export default ErrorFallback;
