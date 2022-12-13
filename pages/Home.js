import {ScrollView, Dimensions, StyleSheet, View} from 'react-native';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header/Header';
import InputSearch from '../components/InputSearch/InputSearch';
import NewArrival from '../components/NewArrival/NewArrival';
import Title from '../components/Title/Title';
import TypeClother from '../components/TypeClother/TypeClother';
import typeProduct from '../typeProduct';

export default Home = ({navigation}) => {
  const title = 'Explore';
  const subtitle = 'best Outfits for you';
  // const {typeProduct}

  // console.log(typeProduct);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Header />
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
      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: '#fbfbfd',
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