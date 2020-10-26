import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
  },
  inputText:{
      height: 50,
      borderWidth: 1,
      borderBottomColor: '#ccc',
      paddingHorizontal: 20,
      margin: 2,
      color: 'black',
      backgroundColor: 'white'

  },
  button:{
      paddingVertical:20,
      borderWidth: 1,
      borderBottomColor: '#ccc',
      marginTop: 10,
  },
  textButton:{
      textAlign: 'center',
  },
  primaryTextButton:{
    color: 'white'
},
segundaryTextButton:{
    color: 'black',
},
 primaryButton:{
      backgroundColor: 'black',
  },
  segundaryButton:{
       backgroundColor: 'white',
   }
});

export default styles;
