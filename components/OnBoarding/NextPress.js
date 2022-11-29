import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default NextPress = ({nextPress, txtButton, index}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={nextPress}>
      <Text style={styles.textButton}>
        {txtButton} {" "}
        {index + 1 === 1 && (
          <FontAwesome5 name="chevron-right" brand style={styles.textIcon}/>
        )}
        {index + 1 === 2 && (
          <Text>
            <FontAwesome5 name="chevron-right" brand style={styles.textIconBlur}/>
            <FontAwesome5 name="chevron-right" brand style={styles.textIcon}/>
          </Text>
        )}
        {index + 1 === 3 && (
          <Text>
            <FontAwesome5 name="chevron-right" brand style={styles.textIconBlur}/>
            <FontAwesome5 name="chevron-right" brand style={styles.textIconBlur}/>
            <FontAwesome5 name="chevron-right" brand style={styles.textIcon}/>
          </Text>
        )}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#f77951',
    padding: 16,
    borderRadius: 26,
  },
  textButton: {
    fontWeight: '400',
    fontSize: 16,
    color: '#fff',
  },
  textIconBlur: {
    color: '#fab7a3',
  },
  textIcon: {
    color: '#fff',
  },
});
