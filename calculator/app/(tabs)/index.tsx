import {StyleSheet,Text,TouchableOpacity,View} from 'react-native';

export default function CalculatorScreen(){
  return (
  <View style={styles.container}>
    <View style={styles.displayContainer}>
      <Text style={styles.displayText}>0</Text>
    </View>
    <View style={styles.buttonsContainer}>
     <View style={styles.row}>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>AC</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>()</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>%</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>:</Text></TouchableOpacity>
     </View>
     <View style={styles.row}>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>7</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>8</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>9</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>*</Text></TouchableOpacity>
     </View>
     <View style={styles.row}>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>4</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>5</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>6</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>-</Text></TouchableOpacity>
     </View>
     <View style={styles.row}>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>1</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>2</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>3</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>+</Text></TouchableOpacity>
     </View>
     <View style={styles.row}>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>0</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>.</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>⌫</Text></TouchableOpacity>
      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>= </Text></TouchableOpacity>
     </View>
    </View>
  </View>
  
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  displayContainer: {
    padding: 24,
    alignItems: 'flex-end',
  },
  displayText: {
    color: '#fff',
    fontSize: 64,
  },
  buttonsContainer: {
    paddingBottom: 40,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 12,
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
});