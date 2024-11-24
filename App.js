import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableHighlight} from 'react-native';

const icon = require('./assets/perro_salchicha.jpg');
const icon_from_web = {uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS3UqzhfbiuG3W7AlKErO44GkVjyQOQ-K82Wl5cF-zqRPuJ-C-Wzpln9ri7wSjmrosUV2j8XZ8Wg9E7vcYGxiN3gQ'}


export default function App() {

  const [contador, setContador] = useState(0)

  return (
    <View style={styles.container}>
      <StatusBar style="light"/>
      <Text style={styles.text_main_color}>Perro salchicha gordo bachicha</Text>
      {/**
       * <Image source={icon} 
      //blurRadius={1}
      style={styles.image}
      />
       */}
      <Image source={icon_from_web}
      blurRadius={2}
      style={styles.image}/>
      <Button title='Press here' onPress={() => Alert.alert('mira mi perro salchicha')} color={'#888'}/>
      <TouchableHighlight style={styles.button_touch} underlayColor={'#333'} onPress={()=>{setContador(contador+1)}}>
        <Text style={{color: '#eee'}}>INCREASE COUNTER</Text>
      </TouchableHighlight> 
      <TouchableHighlight style={styles.button_touch} underlayColor={'#333'} onPress={()=>{setContador(0)}}>
        <Text style={{color: '#eee'}}>RESET COUNTER</Text>
      </TouchableHighlight> 
      <Text style={styles.counter}>{contador}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  text_main_color: {
    color: '#eee',
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
  },
  button_touch: {
    width: 300,
    height: 50,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center'
  },
  counter: {
    fontSize: 32,
    fontWeight: 700,
    color: '#fff',
  }
});
