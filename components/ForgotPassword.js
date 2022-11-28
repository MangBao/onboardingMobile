import {StyleSheet, Text, View, Dimensions} from 'react-native';

export default forgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Forgot password ?</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    display: 'flex',
    width: Dimensions.get('window').width - 40,
    alignItems: 'flex-end'
  },
  text: {
    color: 'black',
  },
});
