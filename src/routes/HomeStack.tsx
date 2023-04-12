import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, ProductScreen} from '../screens';
const Stack = createNativeStackNavigator();
const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
