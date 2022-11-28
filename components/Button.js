import {TouchableOpacity, StyleSheet, Dimensions, View, Text} from 'react-native';

export default Button = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 40,
    paddingLeft: 90,
    paddingRight: 90,
  },
  button: {
    alignItems: 'center',
    borderRadius: 26,
    backgroundColor: '#f77951',
    padding: 16,
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: '#fff',
  },
});
