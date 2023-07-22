import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import backgroundImage from '../../assets/background.jpg';
import { Button } from 'react-native-paper';
import addAvatarIcon from '../../assets/addAvatarBtn.png';
import { useState } from 'react';

export default function LoginScreen() {
  console.log('Platform.OS :>> ', Platform.OS);
  const inputBorderColor = '#E8E8E8';

  const placeholderColor = '#BDBDBD';
  const backgroundColorInput = '#F6F6F6';
  const inputBorderColorFocus = '#FF6C00';
  const submitButtonColor = '#FF6C00';
  const mainTextColor = '#212121';
  const avatarBackgroundColor = '#F6F6F6';

  const [inputEmailColorBorder, setinputEmailColorBordere] = useState(inputBorderColor);
  const [inputPassColorBorder, setinputPassColorBordere] = useState(inputBorderColor);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },

    image: {
      flex: 1,
      // width: '100%',
      justifyContent: 'flex-end',
    },

    textMain: {
      // fontFamily: 'Roboto',
      fontSize: 30,
      fontWeight: 'bold',
      letterSpacing: 0.01,
      lineHeight: 35,
      textAlign: 'center',
      color: mainTextColor,
    },
    avatarContainer: {
      position: 'absolute',
      left: '50%',
      transform: [{ translateX: -50 }, { translateY: -50 }],
      width: 120,
      height: 120,
      backgroundColor: avatarBackgroundColor,
      borderRadius: 16,
    },

    addAvatarIcon: {
      position: 'absolute',
      right: -12,
      bottom: 14,
      width: 25,
      height: 25,
    },

    formContainer: {
      width: '100%',
      height: '65%',
      backgroundColor: 'white',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingTop: 32,
      paddingHorizontal: 16,
    },

    formInput: {
      marginTop: 32,
    },

    inputEmail: {
      height: 50,
      borderWidth: 1,
      borderColor: inputEmailColorBorder,
      borderRadius: 10,
      marginBottom: 16,
      backgroundColor: backgroundColorInput,
      paddingLeft: 20,

      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
    },
    inputPass: {
      height: 50,
      borderWidth: 1,
      borderColor: inputPassColorBorder,
      borderRadius: 10,
      marginBottom: 16,
      backgroundColor: backgroundColorInput,
      paddingLeft: 20,

      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
    },
    showPass: {
      position: 'absolute',
      right: 4,
      bottom: 22,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
    },
    submitBtn: {
      backgroundColor: submitButtonColor,
      height: 51,
      marginHorizontal: 16,
      justifyContent: 'center',
      marginTop: 27,

      borderRadius: 100,

      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
    },
    submitBtnText: { textDecorationLine: 'underline' },
    allreadyHaveLogin: { marginTop: 4 },
  });

  return (
    <>
      <StatusBar style="auto" />
      <ImageBackground source={backgroundImage} style={styles.image}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.formContainer}>
            <Text style={styles.textMain}>Увійти</Text>
            <View style={styles.formInput}>
              <TextInput
                style={styles.inputEmail}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={placeholderColor}
                inputMode="email"
                onFocus={() => setinputEmailColorBordere(inputBorderColorFocus)}
                onBlur={() => setinputEmailColorBordere(inputBorderColor)}
              />
              <TextInput
                style={styles.inputPass}
                placeholder="Пароль"
                secureTextEntry={true}
                placeholderTextColor={placeholderColor}
                onFocus={() => setinputPassColorBordere(inputBorderColorFocus)}
                onBlur={() => setinputPassColorBordere(inputBorderColor)}
              />
              <Button
                mode="text"
                textColor="#1B4371"
                onPress={() => console.log('Pressed showpassword')}
                style={styles.showPass}
              >
                Показати
              </Button>
            </View>

            <Button mode="contained" style={styles.submitBtn}>
              Увійти
            </Button>
            <Button mode="text" textColor="#1B4371" style={styles.allreadyHaveLogin}>
              Немає акаунту? <Text style={styles.submitBtnText}>Зареєструватися</Text>
            </Button>
            {/* </KeyboardAvoidingView> */}
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}
