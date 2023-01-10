import {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {authenSelector, favoriteSelector} from '~/redux/selectors';
import {createFavorite, deleteFavorite} from '~/api/services';

import styles from './style';
import favoriteSlice from '~/redux/favoriteSlice';

function Heart({product}) {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(false);
  const {favoriteList} = useSelector(favoriteSelector);
  const {userLogged} = useSelector(authenSelector);

  useEffect(() => {
    if (favoriteList.length > 0) {
      const arr = favoriteList.map(element => element.product_id);
      if (arr.includes(product?.id || product?.product_id)) {
        setIsLike(true);
      } else {
        setIsLike(false);
      }
    } else {
      setIsLike(false);
    }
  }, [favoriteList]);

  const handlePress = () => {
    if (!isLike) {
      const payload = {
        user_id: userLogged.id,
        product_id: product.id ? product.id : product.product_id,
        product_name: product.product_name,
        price: product.price,
        product_image: product.product_image,
      };
      createFavorite(payload);
      const arr = [...favoriteList, payload];
      dispatch(favoriteSlice.actions.setFavoriteList(arr));
    } else {
      const payload = {
        user_id: userLogged.id,
        product_id: product.id ? product.id : product.product_id,
      };
      deleteFavorite(payload);
      const arr = favoriteList.filter(element => {
        if (product.id) {
          return element.product_id !== product.id;
        } else {
          return element.product_id !== product.product_id;
        }
      });
      dispatch(favoriteSlice.actions.setFavoriteList(arr));
    }
  };

  return (
    <TouchableOpacity style={styles.heart} onPress={handlePress}>
      <FontAwesome
        name={isLike ? 'heart' : 'heart-o'}
        style={styles.heartIcon}
      />
    </TouchableOpacity>
  );
}

export default Heart;
