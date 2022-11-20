/* eslint-disable react/react-in-jsx-scope */
import {View, FlatList} from 'react-native';
import slides from '../../slides';
import OnBoardingItem from './OnBoardingItem';

export default function OnBoarding() {
  return (
    <View>
      <FlatList
        data={slides}
        renderItem={({item}) => <OnBoardingItem item={item} />}
        // horizontal
        // showsHorizontalScrollIndicator
        // pagingEnabled
        // bounces={false}
      />
    </View>
  );
}
