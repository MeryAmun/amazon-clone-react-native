import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, ProductScreen, ShoppingCart } from '../screens';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
  <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes