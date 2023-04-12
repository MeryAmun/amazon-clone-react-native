import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShoppingCart} from '../screens';
import Feather from 'react-native-vector-icons/Feather';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack';
const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarInactiveTintColor: '#ffbd7d',
        tabBarActiveTintColor: '#e47911',
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="home" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ShoppingCartStack"
        component={ShoppingCartStack}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="shopping-cart" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="user" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="settings" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
