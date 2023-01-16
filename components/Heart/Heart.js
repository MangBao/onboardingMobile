import {useEffect, useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {updateFavoriteProducts} from '../../api/services';
import productSlice from '../../redux/productSlice';
import {productSelector} from '../../redux/selectors';
// import {authenSelector, favoriteSelector} from '~/redux/selectors';
// import {createFavorite, deleteFavorite} from '~/api/services';

import styles from './style';
// import favoriteSlice from '~/redux/favoriteSlice';

function Heart({favorite, product}) {
  const dispatch = useDispatch();
  const [isLike, setIsLike] = useState(favorite);
  const {productList} = useSelector(productSelector);

  useEffect(() => {
    if (productList.length > 0) {
      const arr = productList.map(element => element.id);
      if (arr.includes(product?.id)) {
        setIsLike(product?.favorite);
      }
    }
  }, [productList]);

  const handlePress = () => {
    if (isLike === 0) {
      setIsLike(1);
      const payload = {
        id: product.id,
        name_product: product.name_product,
        price: product.price,
        image: product.product_image,
        favorite: 1,
      };
      updateFavoriteProducts(product.id, payload);
    } else if (isLike === 1) {
      setIsLike(0);
      const payload = {
        id: product.id,
        name_product: product.name_product,
        price: product.price,
        image: product.product_image,
        favorite: 0,
      };
      updateFavoriteProducts(product.id, payload);
    }
  };

  return (
    <TouchableOpacity style={styles.heart} onPress={handlePress}>
      <FontAwesome
        name={isLike == 1 ? 'heart' : 'heart-o'}
        style={styles.heartIcon}
      />
    </TouchableOpacity>
  );
}

export default Heart;
