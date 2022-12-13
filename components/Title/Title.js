import {View, Text, StyleSheet} from 'react-native';

export default Title = ({...props}) => {
  return (
    <View style={styles.groupTitle}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={[styles.subtitle]}>{props.subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  groupTitle: {
    paddingHorizontal: 22,
    paddingTop: 22
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 24,
    color: 'gray',
  },
});
