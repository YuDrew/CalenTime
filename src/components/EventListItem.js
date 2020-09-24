import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import {
  Text,
  StyleSheet,
  View,
  Button,
} from 'react-native';

//Logic Functions
const formatTime = number => `0${number}`.slice(-2);

const getTimes = (time) => {
  const hours = Math.floor(time/3600);
  const mins = Math.floor((time - hours*3600)/60);
  const secs = time % 60;
  return {hours: formatTime(hours), mins: formatTime(mins), secs: formatTime(secs)};
}

//StyleSheet
const styles = StyleSheet.create({
  Event: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  spacedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  eventTitle: {
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
  },
  sectionHeader: {
    fontSize: 16,
    backgroundColor: "#ADD8E6"
  },
  listHeader: {
    fontSize: 25,
    backgroundColor: "#00FF00"
  },
});

//Components
export const Event = ({ navigation, summary, description, start, end}) => {
    //Declare state variables
    const [isTracking, setIsTracking] = useState(false);
    const [secondsElapsed, setSecondsElapsed] = useState(0);
    const { hours, mins, secs } = getTimes(secondsElapsed);
  
    useEffect(() => {
      let interval = null;
      if (isTracking) {
        interval = setInterval(() => {
          setSecondsElapsed(secondsElapsed => secondsElapsed + 1);
        }, 1000);
      } else if (!isTracking && secondsElapsed !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [isTracking, secondsElapsed]);
  
    return(
      <View style={styles.Event}>
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', flex: 5}}>
            <View style={styles.spacedRow}>
              <Text style={styles.eventTitle}> {summary} </Text>
            </View>
            <View style={styles.spacedRow}> 
              <Text> Start: {start.dateTime} XM </Text> 
              <Text> End: {end.dateTime} XM </Text>
              <Text style={{alignSelf: 'flex-end'}}> Elapsed: {hours}:{mins}:{secs} </Text>
            </View>
          </View>
          <Button
            style={{flex: 1}}
            onPress={() => {
              setIsTracking(!isTracking);
            }}
            title={isTracking ? "⏹" : "▶️"}
          />
          <Button
            style={{flex: 1}}
            onPress={() => {
              navigation.navigate('Event')
            }}
            title= '>'
          />
        </View>
      </View>
    );
  }