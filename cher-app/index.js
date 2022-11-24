import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './dashboard';
import Details from './details';
import Edit from './edit';
import Login from '../screens/Authentication/Login';
import Profile from './profile';
import BlanckEdit from './blanckEdit';

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
      <Stack.Screen name="Edit" component={Edit} />
      <Stack.Screen name="BlanckEdit" component={BlanckEdit} />
    </Stack.Navigator>
  )
}

export default CherApp;
