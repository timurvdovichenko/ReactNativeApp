import { StatusBar } from 'expo-status-bar';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import backgroundImage from '../../assets/background.jpg';
import addAvatarIcon from '../../assets/addAvatarBtn.png';
import { useState } from 'react';

export default function RegistrationScreen() {
  const inputBorderColor = '#E8E8E8';

  const placeholderColor = '#BDBDBD';
  const backgroundColorInput = '#F6F6F6';
  const inputBorderColorFocus = '#FF6C00';
  const submitButtonColor = '#FF6C00';
  const mainTextColor = '#212121';
  const avatarBackgroundColor = '#F6F6F6';

  const [inputNameColorBorder, setinputNameColorBorder] = useState(inputBorderColor);
  const [inputEmailColorBorder, setinputEmailColorBorder] = useState(inputBorderColor);
  const [inputPassColorBorder, setinputPassColorBorder] = useState(inputBorderColor);
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
      fontFamily: 'Roboto',
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
      height: '70%',
      backgroundColor: 'white',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      paddingTop: 92,
      paddingHorizontal: 16,
      paddingBottom: 32,
    },

    formInput: {
      marginTop: 32,
    },

    inputName: {
      height: 50,
      borderWidth: 1,
      borderColor: inputNameColorBorder,
      borderRadius: 10,
      marginBottom: 16,
      backgroundColor: backgroundColorInput,
      paddingLeft: 20,

      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
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

      backgroundColor: backgroundColorInput,
      paddingLeft: 20,

      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
    },
    showPass: {
      position: 'absolute',
      right: 16,
      bottom: 15,
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
      color: '#1B4371',
    },
    submitBtn: {
      backgroundColor: submitButtonColor,
      height: 51,
      marginHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',

      marginTop: 43,
      marginBottom: 16,

      borderRadius: 100,
    },
    submitBtnText: {
      color: '#F6F6F6',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 'regular',
    },

    allreadyHaveLogin: { marginTop: 4, alignItems: 'center', justifyContent: 'center' },
    allreadyHaveLoginText: { color: '#1B4371' },
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
            <View style={styles.avatarContainer}>
              <Image source={addAvatarIcon} style={styles.addAvatarIcon} />
            </View>
            <Text style={styles.textMain}>Реєстрація</Text>
            <View style={styles.formInput}>
              <TextInput
                style={styles.inputName}
                placeholder="Логін"
                inputMode="text"
                placeholderTextColor={placeholderColor}
                onFocus={() => setinputNameColorBorder(inputBorderColorFocus)}
                onBlur={() => setinputNameColorBorder(inputBorderColor)}
              />
              <TextInput
                style={styles.inputEmail}
                placeholder="Адреса електронної пошти"
                placeholderTextColor={placeholderColor}
                inputMode="email"
                onFocus={() => setinputEmailColorBorder(inputBorderColorFocus)}
                onBlur={() => {
                  setinputEmailColorBorder(inputBorderColor);
                }}
              />
              <TextInput
                style={styles.inputPass}
                placeholder="Пароль"
                secureTextEntry={true}
                placeholderTextColor={placeholderColor}
                onFocus={() => setinputPassColorBorder(inputBorderColorFocus)}
                onBlur={() => {
                  setinputPassColorBorder(inputBorderColor);
                }}
              />

              <Text
                onPress={() => {
                  console.log('Pressed showpassword');
                }}
                style={styles.showPass}
              >
                Показати
              </Text>
            </View>

            <TouchableOpacity
              style={styles.submitBtn}
              activeOpacity={0.8}
              onPress={() => {
                console.log('Pressed Submit BTn');
                Keyboard.dismiss();
              }}
            >
              <Text style={styles.submitBtnText}> Зареєструватися</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.allreadyHaveLogin} activeOpacity={0.8}>
              <Text style={styles.allreadyHaveLoginText}>Вже є акаунт? Увійти</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </>
  );
}
