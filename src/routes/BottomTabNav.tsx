import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, ProductScreen, ShoppingCart } from '../screens';
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="ShoppingCart" component={ShoppingCart} />
    </Tab.Navigator>
  )
}

export default BottomTabNav