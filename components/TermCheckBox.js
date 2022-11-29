// import CheckBox from '@react-native-community/checkbox';
import {useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Checkbox} from 'react-native-paper';

export default TermCheckBox = () => {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <Text>
        I accept all the
        <Text>Term & Conditions</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: Dimensions.get('window').width - 50,
  },
});
