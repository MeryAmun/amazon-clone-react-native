import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AddressScreen, ShoppingCart} from '../screens';
const Stack = createNativeStackNavigator();
const ShoppingCartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="shoppingCartScreen"
        component={ShoppingCart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="AddressScreen" component={AddressScreen} 
      options={{
        headerShown: false,
      }}/>
    </Stack.Navigator>
  );
};

export default ShoppingCartStack;
