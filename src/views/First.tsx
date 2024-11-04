import React, {Fragment} from 'react';
import {useTranslation} from 'react-i18next';
import {StackFirstProps} from '../navigation/navigation';
import {Button, Text, View} from 'react-native';
import {usePersistanceStore} from '../store/usePersistanceStore';

const First = ({navigation: {navigate}}: StackFirstProps) => {
  const {count, increment, decrement, reset} = usePersistanceStore();
  const {t} = useTranslation();

  return (
    <Fragment>
      <Button title={t('ABOUT')} onPress={() => navigate('About')} />
      <View>
        <Text>{count}</Text>
        <Button title={t('ADD')} onPress={() => increment(count)} />
        <Button title={t('SUBTRACT')} onPress={() => decrement(count)} />
        <Button title={t('RESET')} onPress={reset} />
      </View>
    </Fragment>
  );
};

export default First;
