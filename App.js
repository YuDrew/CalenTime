import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  SectionList,
  ScrollView
} from 'react-native';

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
    backgroundColor: "#fff"
  },
  listHeader: {
    fontSize: 25,
    backgroundColor: "#f0f"
  },
});

const DATA = [
  {
    title: "Some Date",
    data: [
      {
        summary: "Event One",
        description: "Stuff happens in event One",
        start: {
          dateTime: new Date().getHours() + ":" + new Date().getMinutes(),
          timeZone: "CST"
        },
        end: {
          dateTime: (new Date().getHours()+ 1) + ":" + new Date().getMinutes(),
          timeZone: "CST"
        }
      },
      {
        summary: "Event Two",
        description: "Stuff happens in event Two",
        start: {
          dateTime: (new Date().getHours()+3) + ":" + new Date().getMinutes(),
          timeZone: "CST"
        },
        end: {
          dateTime: (new Date().getHours()+4) + ":" + new Date().getMinutes(),
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

const Event = ({summary, description, start, end}) => {
  //Declare state variables
  const [isTracking, setIsTracking] = useState(false);
  //ToDo: Add in a Timer in order to update time elapsed regularly
  //ToDo: Add in a Time Elapsed state variable

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
            <Text style={{alignSelf: 'flex-end'}}> Elapsed: 00:00:00 </Text>
          </View>
        </View>
        <Button
          style={{flex: 1}}
          onPress={() => {
            setIsTracking(!isTracking);
          }}
          title={isTracking ? "⏹" : "▶️"}
        />
      </View>
    </View>
  );
}

const App = () => {
  return(
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={() => <Text style={styles.listHeader}> Some Header </Text>}
        sections= {DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => 
          <Event summary={item.summary} description={item.description} start={item.start} end={item.end} />
        }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> 
        )}
      />
    </SafeAreaView>
  );
}

export default App;