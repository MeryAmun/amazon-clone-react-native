import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ShoppingCart} from '../screens';
import Entypo from 'react-native-vector-icons/Entypo';
import HomeStack from './HomeStack';
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
            <Entypo name="home" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="shopping-cart" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="user" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={ShoppingCart}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="menu" color={color} size={25} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
