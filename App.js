import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
  return (
    <>
      <LoginScreen />
      {/* <RegistrationScreen /> */}
    </>
  );
}
