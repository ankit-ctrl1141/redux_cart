import {View, Text, Image, Button} from 'react-native';
import {useDispatch} from 'react-redux';

import {addToCart} from './redux/action';
import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

import { removeFromCart } from './redux/action';

const Product = ({item}) => {
  // array of Objects...
  const cartItems = useSelector(state => state.reducer);

  // will tell if the item is already added in the cart or not...
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item.name));
  }

  useEffect(() => {
      let result = cartItems.filter((element) => {
        return element.name === item.name;
      });
      if(result.length){
         setIsAdded(true);
      }
      else{
        setIsAdded(false);
      }
  },[cartItems]);

  return (
    <View
      style={{
        alignItems: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 2,
        padding: 10,
      }}>
      <Text style={{fontSize: 25, color: 'black'}}>{item.name}</Text>
      <Text style={{fontSize: 25}}>{item.price}</Text>
      <Text style={{fontSize: 25}}>{item.color}</Text>
      <Image source={{uri: item.image}} style={{height: 100, width: 100}} />
      {
        isAdded ? <Button
        title="Remove to Cart"
        onPress={() => handleRemoveFromCart(item)}></Button>
        : <Button
        title="Add to Cart"
        onPress={() => handleAddToCart(item)}></Button>
      }
    </View>
  );
};

export default Product;
