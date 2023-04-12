import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';
const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BottomTabs" component={BottomTabNav} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
