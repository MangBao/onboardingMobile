import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default TabButton = (currentTab, setCurrentTab, title, icon) => {
  return (
    <TouchableOpacity
      style={[
        styles.tabItem,
        {
          backgroundColor: currentTab === title ? '#bbbbbb' : 'transparent',
        },
      ]}
      onPress={() => {
        if (title === 'LogOut') {
          //
        } else {
          setCurrentTab(title);
        }
      }}>
      {(title === 'Settings' || title === 'LogOut') ? (
        <FontAwesome name={icon} style={styles.iconStyle} />
      ) : (
        <FontAwesome5 name={icon} style={styles.iconStyle} />
      )}
      <View style={{width: 10}} />
      <Text
        style={[
          styles.text,
          {
            color: currentTab === title ? '#fffff' : 'black',
            fontWeight: currentTab === title ? 'bold' : '400',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 18,
  },
  text: {
    fontSize: 14,
  },
});
