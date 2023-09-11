import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <LoginScreen />
        {/* <RegistrationScreen /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
