import {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useDispatch} from 'react-redux';
import SearchPage from '../../pages/SearchPage';
import modalSlice from '../../redux/modalSlice';

export default InputSearch = ({navigation}) => {
  const dispatch = useDispatch();
  const imageIcon = require('../../assets/images/buttonInSearch.png');
  const [text, setText] = useState('');

  return (
    <View style={[styles.groupInput, {marginBottom: 6}]}>
      <FontAwesome5
        name="search"
        light
        style={styles.textIcon}
        onPress={() => {
          <SearchPage textParams={text} />;
          console.log('OK');
          navigation.navigate('SearchPage');
        }}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Search item"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(modalSlice.actions.setShowModalFilter(true));
        }}>
        <Image source={imageIcon} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  groupInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: Dimensions.get('window').width - 36,
    // backgroundColor: 'red',
    backgroundColor: '#FFFFF7',
    padding: 4,
    borderRadius: 10,
    marginLeft: 20,
    // paddingLeft: 10,
  },
  inputText: {
    width: Dimensions.get('window').width - 120,
  },
  image: {
    width: 60,
    height: 50,
  },
  textIcon: {
    // paddingLeft: 0
  },
});
