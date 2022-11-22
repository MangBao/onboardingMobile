import { TouchableOpacity, StyleSheet, Text } from "react-native";

export default NextPress = ({scrollTo, txtButton}) => {
    
  return (
    <TouchableOpacity style={styles.button} onPress={scrollTo}>
      <Text style={styles.textButton}>
        {txtButton} {'>'}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'tomato',
    padding: 16,
    borderRadius: 26,
  },
  textButton: {
    fontWeight: '400',
    fontSize: 16,
  },
});
