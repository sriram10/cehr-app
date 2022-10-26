import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './dashboard';
import Details from './details';
import Login from './login';
import Profile from './profile';

const Stack = createStackNavigator();

const CherApp = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  )
}

export default CherApp;
