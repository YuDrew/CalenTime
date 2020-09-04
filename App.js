import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
} from 'react-native';

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
});

/*
const Event = (summary, id, description, start, end) => {
  return(

  ); 
}
*/

const EventTemplateFunction = () => {
  //Declare state variables
  const [isTracking, setIsTracking] = useState(false);
  //ToDo: Add in a Timer in order to update time elapsed regularly
  //ToDo: Add in a Time Elapsed state variable

  return(
    <View style={styles.centered}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flexDirection: 'column', flex: 5}}>
          <View style={styles.spacedRow}>
            <Text style={styles.eventTitle}> Title of Event </Text>
            <Text style={{alignSelf: 'flex-end'}}> Elapsed: 00:00:00 </Text>
          </View>
          <View style={styles.spacedRow}> 
            <Text> Start: 00:00 XM </Text> 
            <Text> End: 00:00 XM </Text>
          </View>
        </View>
        <Button
          style={{flex: 1}}
          onPress={() => {
            setIsTracking(!isTracking);
          }}
          title={isTracking ? "stop" : "start"}
        />
      </View>
    </View>
  );
}

const App = () => {
  return(
    <SafeAreaView style={{flex: 1}}>
      <EventTemplateFunction/>
    </SafeAreaView>
  );
}

export default App;