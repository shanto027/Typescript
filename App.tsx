import React, { useState, useEffect } from 'react';

import { View, StyleSheet, Button } from 'react-native';

import ViewText from './components/viewText' ;

export default function App() {

  const [visible, setVisible] = useState(true);

  const [buttonText, setbuttonText] = useState('Hide Text Component');

  const Control = () =>{
 
    if(visible == true)
    {
      setVisible(false);
      setbuttonText('Show Text Component');
    }
    else
    {
      setVisible(true);
      setbuttonText('Hide Text Component');
    }
  }
  
  return (

    <View style={styleSheet.MainContainer}>

      {
          // Pass View or Component inside the curly bracket.
 
          visible ? <ViewText /> : null
      }
 
      <Button title={buttonText} onPress={Control} />
      
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
  }
 
});