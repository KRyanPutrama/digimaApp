import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_USER_TOKEN } from '@/GlobalStates/auth';

const IndexOfHomeContainer = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>IndexOfHomeContainer</Text>
      <TouchableOpacity onPress={() => dispatch({ type: DELETE_USER_TOKEN })}>
        <Text>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default IndexOfHomeContainer;
