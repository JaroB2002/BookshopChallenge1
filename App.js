import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import cart from "./assets/shopping-cart.png"

import CourseTile from './components/CourseTile';
import Buttons from './components/Buttons';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.heading1}>Courses</Text>
      <Image
        style={styles.cart}
        source={cart}
      />
      </View>
      <View style={styles.tilesContainer}>

        <CourseTile title="Book title 1" subtitle="by Some Random dude" />
        <Buttons title="READ"/>
        <CourseTile title="Book title 2" subtitle="by some other dude"/>
        <CourseTile title="Book title 3" subtitle="by Jane Doe"/>
        <CourseTile title="Book title 4" subtitle="By John Doe"/>
        
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
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
    display:"flex",
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  button:{
    width: 50,
    height:50,
    
  },

cart:{
  width: 20,
  height: 20,
},

header:{
  flexDirection: 'row',
  display:"flex",
  justifyContent: 'space-between',
}
});