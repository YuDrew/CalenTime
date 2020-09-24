import React, { useState, useEffect } from 'react';
import {
    Text,
    StyleSheet,
    View,
    Button,
    SafeAreaView,
    SectionList,
    ScrollView
} from 'react-native';
import {
    Event
} from '../components/EventListItem.js'
import moment from 'moment';

const formatTime = number => `0${number}`.slice(-2);

const getTimes = (time) => {
  const hours = Math.floor(time/3600);
  const mins = Math.floor((time - hours*3600)/60);
  const secs = time % 60;
  return {hours: formatTime(hours), mins: formatTime(mins), secs: formatTime(secs)};
}

//Test Data
const DATA = [
    {
      title: "Some Date",
      data: [
        {
          summary: "Event One",
          description: "Stuff happens in event One",
          start: {
            dateTime: moment().format("HH:mm"),
            timeZone: "CST"
          },
          end: {
            dateTime:  formatTime((new Date().getHours()+1)) + ":" + formatTime(new Date().getMinutes()),
            timeZone: "CST"
          }
        },
        {
          summary: "Event Two",
          description: "Stuff happens in event Two",
          start: {
            dateTime: formatTime((new Date().getHours()+3)) + ":" + formatTime(new Date().getMinutes()),
            timeZone: "CST"
          },
          end: {
            dateTime: formatTime(new Date().getHours()+4) + ":" + formatTime(new Date().getMinutes()),
            timeZone: "CST"
          }
        }
      ]
    },
    {
      title: "Another Date",
      data: []
    }
  ]

//StyleSheet
const styles = StyleSheet.create({
    sectionHeader: {
      fontSize: 16,
      backgroundColor: "#ADD8E6"
    },
    listHeader: {
      fontSize: 25,
      backgroundColor: "#00FF00"
    },
  });

//Screen
export const HomeScreen = ({ navigation }) => {
  return(
    <SafeAreaView style={styles.container}>
        <SectionList
          ListHeaderComponent={() => <Text style={styles.listHeader}> Some Header </Text>}
          sections= {DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => 
            <Event navigation={navigation} summary={item.summary} description={item.description} start={item.start} end={item.end} />
          }
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text> 
          )}
        />
      </SafeAreaView>
  );
}