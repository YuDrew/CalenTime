import React from 'react';
import {Button, SafeAreaView} from 'react-native';

export const EventDetailScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Button
        title="Back to home"
        onPress={() => navigation.navigate('Home')}
      />
    </SafeAreaView>
  );
};
