import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { postLogin } from '@/GlobalStates/auth';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import { RootReducerState } from '@/GlobalStates/reducer';

const IndexOfLogin = () => {
  const { authIsError } = useSelector(
    ({ auth }: RootReducerState) => ({
      authIsError: auth.authState === 'error',
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const usernameRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  // const testData = {
  //   username: 'yusuf@digimasia.com',
  //   password: '12345',
  // };
  const onPress = () => {
    // @ts-ignore
    dispatch(postLogin(formData));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FAF7F0' }}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={-responsiveHeight(20)}
        style={{ flex: 1 }}>
        <View style={styles.object_one} />
        <View style={styles.object_two} />

        <View style={styles.object_three} />
        <View
          style={{
            position: 'absolute',
            left: responsiveWidth(10),
            top: responsiveHeight(12),
            zIndex: 4,
          }}>
          <Text
            style={{
              fontSize: responsiveScreenFontSize(5),
              fontWeight: 'bold',
              color: '#FAF7F0',
            }}>
            HELLO
          </Text>
        </View>
        <View
          style={{
            height: responsiveHeight(50),
            alignItems: 'center',
            paddingTop: responsiveHeight(5),
          }}>
          <TextInput
            ref={usernameRef}
            placeholder="Username"
            style={[styles.textInput, { marginVertical: responsiveHeight(2) }]}
            onChangeText={text => {
              setFormData(prev => ({
                ...prev,
                username: text,
              }));
            }}
            onFocus={event => event.preventDefault()}
            onEndEditing={() => {
              passwordRef.current?.focus();
            }}
          />
          <TextInput
            ref={passwordRef}
            placeholder="Password"
            style={styles.textInput}
            onChangeText={text => {
              setFormData(prev => ({
                ...prev,
                password: text,
              }));
            }}
            onFocus={event => event.preventDefault()}
          />

          {authIsError && <Text style={{ color: 'red' }}>Error occured</Text>}

          <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonLoginText}>
                Log<Text style={{ color: '#FAF7F0' }}>in</Text>
              </Text>
              <View style={styles.buttonCircle} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default IndexOfLogin;

const styles = StyleSheet.create({
  object_one: {
    width: responsiveWidth(50),
    height: responsiveHeight(15),
    // borderWidth: 1,
    position: 'relative',
    left: responsiveWidth(-10),
    backgroundColor: '#98A8F8',
    zIndex: 2,
    transform: [
      {
        rotateZ: '-40deg',
      },
      {
        scale: 2,
      },
    ],
  },
  object_two: {
    width: responsiveWidth(20),
    height: responsiveHeight(15),
    // borderWidth: 1,
    position: 'relative',
    left: responsiveWidth(10),
    backgroundColor: '#BCCEF8',
    zIndex: 3,
    transform: [
      {
        rotateX: '60deg',
      },
      {
        rotateZ: '40deg',
      },
      {
        scaleX: 3,
      },
      {
        scaleY: 15,
      },
    ],
  },
  object_three: {
    width: responsiveWidth(20),
    height: responsiveHeight(15),
    // borderWidth: 1,
    position: 'relative',
    left: responsiveWidth(60),
    top: responsiveHeight(-25),
    backgroundColor: '#CDFCF6',
    zIndex: 1,
    transform: [
      {
        rotateX: '60deg',
      },
      {
        rotateZ: '-45deg',
      },
      {
        scaleX: 4,
      },
      {
        scaleY: 15,
      },
    ],
  },
  textInput: {
    width: responsiveWidth(80),
    height: responsiveHeight(8),
    borderBottomWidth: 1,
    fontSize: responsiveFontSize(2),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginRight: responsiveWidth(10),
    marginTop: responsiveHeight(5),
  },
  buttonLoginText: {
    position: 'relative',
    fontWeight: 'bold',
    zIndex: 10,
    fontSize: responsiveFontSize(4),
    letterSpacing: 5.5,
  },
  buttonCircle: {
    width: responsiveWidth(10),
    height: responsiveHeight(6),
    position: 'absolute',
    borderRadius: 9999,
    right: responsiveWidth(0),
    backgroundColor: '#98A8F8',
  },
});
