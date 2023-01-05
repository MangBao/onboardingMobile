import {ScrollView, Dimensions, StyleSheet, View} from 'react-native';
import Header from '../components/Header/Header';
import InputSearch from '../components/InputSearch/InputSearch';
import NewArrival from '../components/NewArrival/NewArrival';
import Title from '../components/Title/Title';
import TypeClother from '../components/TypeClother/TypeClother';
import typeProduct from '../typeProduct';

export default Search = ({...prop}) => {
  const title = 'Explore';
  const subtitle = 'best Outfits for you';

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Header
        offsetValue={prop.offsetValue}
        scaleValue={prop.scaleValue}
        closeButtonOffset={prop.closeButtonOffset}
        showMenu={prop.showMenu}
        setShowMenu={prop.setShowMenu}
      />
      <View style={{height: 20}} />
      <Title title={title} subtitle={subtitle} />
      <View style={{height: 18}} />
      <InputSearch />
      <View style={{height: 18}} />

      <ScrollView>
        <View style={styles.groupTabs}>
          {typeProduct.map(index => (
            <TypeClother
              type={index.type}
              image={index.image}
              key={index.type}
            />
          ))}
        </View>
      </ScrollView>

      <View style={{height: 18}} />

      <NewArrival />
      <View style={{height: 18}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    // backgroundColor: 'gray',
    backgroundColor: 'white',
  },
  groupTabs: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width - 20,
    paddingLeft: 20,
  },
});
