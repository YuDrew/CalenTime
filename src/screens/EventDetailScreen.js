
import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  SectionList,
  ScrollView
} from 'react-native';

export const EventDetailScreen = ({ navigation }) => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <Button
        title="Back to home"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    </SafeAreaView>
  );
};