import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import modalSlice from '../../redux/modalSlice';
import RangerFilter from '../RangerFilter/RangerFilter';

export default Modals = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.overlay}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          dispatch(modalSlice.actions.setShowModalFilter(false));
        }}
        style={styles.outFilter}
      />
      <View style={styles.filter}>
        <RangerFilter />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flexGrow: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  outFilter: {
    flex: 0.2,
    opacity: 0.6,
    backgroundColor: 'gray',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  filter: {
    flex: 0.8,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
    shadowColor: '#171717',
    position: 'absolute',
    top: Dimensions.get('window').height - 560,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
