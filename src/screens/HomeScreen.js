import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, SafeAreaView, SectionList} from 'react-native';
import {Event} from '../components/EventListItem.js';
import moment from 'moment';
import {Colors, Typography} from '../styles';

//logic
const formatTime = (number) => `0${number}`.slice(-2);

//Test Data
const DATA = [
  {
    title: 'Some Date',
    data: [
      {
        summary: 'Event One',
        description: 'Stuff happens in event One',
        start: {
          dateTime: moment().format('HH:mm'),
          timeZone: 'CST',
        },
        end: {
          dateTime:
            formatTime(new Date().getHours() + 1) +
            ':' +
            formatTime(new Date().getMinutes()),
          timeZone: 'CST',
        },
      },
      {
        summary: 'Event Two',
        description: 'Stuff happens in event Two',
        start: {
          dateTime:
            formatTime(new Date().getHours() + 3) +
            ':' +
            formatTime(new Date().getMinutes()),
          timeZone: 'CST',
        },
        end: {
          dateTime:
            formatTime(new Date().getHours() + 4) +
            ':' +
            formatTime(new Date().getMinutes()),
          timeZone: 'CST',
        },
      },
    ],
  },
  {
    title: 'Another Date',
    data: [],
  },
];

//StyleSheet
const styles = StyleSheet.create({
  sectionHeader: {
    ...Typography.sectionHeader,
    ...Colors.sectionHeader,
  },
  listHeader: {
    ...Typography.listHeader,
    ...Colors.listHeader,
  },
});

//Screen
export const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={() => (
          <Text style={styles.listHeader}> Some Header </Text>
        )}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <Event
            navigation={navigation}
            summary={item.summary}
            description={item.description}
            start={item.start}
            end={item.end}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </SafeAreaView>
  );
};
