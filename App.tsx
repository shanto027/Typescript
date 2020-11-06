import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Button, Text } from 'react-native';

export default function FirstApp() {

  const [count, setCount] = useState(0);
  
  return (

    <View style={styleSheet.MainContainer}>

      <Text style={styleSheet.text}> Count Value = {count} </Text>

      <Button onPress={() => setCount(count + 1)} title="Click Here To Change State Value in Functional Component" />
      
    </View>

  );
}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 10
  },

  text:{
    fontSize: 20,
    paddingBottom: 20
  }
 
});