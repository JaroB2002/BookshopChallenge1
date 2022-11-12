import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

import Buttons from './components/Buttons';
import CourseTile from './components/CourseTile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading1}>Courses</Text>
      <View style={styles.tilesContainer}>

        <CourseTile title="Book title 1" subtitle="by Some Random dude" />
        <CourseTile title="Book title 2" subtitle="by some other dude"/>
        <CourseTile title="Book title 3" subtitle="by Jane Doe"/>
        <CourseTile title="Book title 4" subtitle="By John Doe"/>
<Button title="Test123test" color="red"></Button>
<Image source={{uri: ''}} style={{width: 60, height: 60}} />  
        <TouchableOpacity>
      <View style={StyleSheet.button}>
<Text></Text>
      </View>
    </TouchableOpacity>

      <StatusBar style="auto" />
      </View>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 42,
  },
  heading1:{
    fontSize: 26,
    margin: 0,
    marginLeft: 15,
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    display:"flex",
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },



});