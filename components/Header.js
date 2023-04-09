import {View, Text} from 'react-native';

// Get Redux Data from store
import {useSelector} from 'react-redux';

import { useEffect, useState } from 'react';

const Header = () => {
  // array of Objects...
  const cartData = useSelector(state => state.reducer); // the reducer is from "store"

  // Counting number of items added to the cart...
  const [cartItems, setCartItems] = useState(0);

  useEffect(()=> {
    setCartItems(cartData.length);  // length of the cartData array, means how much Object does it contains, that will be the total number of items in the cart...

  }, [cartData]);

  return (
    <View style={{backgroundColor: 'orange'}}>
      <Text
        style={{fontSize: 30, textAlign: 'right', padding: 10, color: 'black'}}>
        {cartItems}
      </Text>
    </View>
  );
};

export default Header;
