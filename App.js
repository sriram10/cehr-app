import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider, Text, Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import CherApp from './cher-app';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <CherApp />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
