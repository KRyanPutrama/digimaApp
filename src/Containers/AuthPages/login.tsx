import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
// import { useDispatch } from 'react-redux';
// import { postLogin } from '@/GlobalStates/auth';

const IndexOfLogin = () => {
  // const dispatch = useDispatch();

  // // {
  // //   username: 'yusuf@digimasia.com',
  // //   password: '12345',
  // // }
  // const testData = {
  //   username: 'yusuf@digimasia.com',
  //   password: '12345',
  // };
  // const onPress = () => {
  //   // @ts-ignore
  //   dispatch(postLogin(testData));
  // };

  return (
    <View style={{ flex: 1, backgroundColor: 'red' }}>
      <TouchableOpacity>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexOfLogin;
