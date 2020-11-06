import React, { useState, useEffect } from 'react';

import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function FirstApp() {

  const [varOne, setOne] = useState(0);
  const [varTwo, setTwo] = useState(0);
  const [varThree, setThree] = useState(0);


  const changeOne=()=>{

    setOne(varOne + 1) ;

    console.log('State One Value = ' + varOne);

  }

 const changeTwo=()=>{

    setTwo(varTwo + 1) ;

    console.log('State Two Value = ' + varTwo);

  }

  const changeThree=()=>{

    setThree(varThree + 1) ;
    console.log('State Three Value = ' + varThree);

  }

  
  return (

    <View style={styleSheet.MainContainer}>

      <TouchableOpacity onPress={changeOne} activeOpacity={0.6} style={styleSheet.button} >
 
         <Text style={styleSheet.TextStyle}> Change State One Value </Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={changeTwo} activeOpacity={0.6} style={styleSheet.button} >
 
         <Text style={styleSheet.TextStyle}> Change State Two Value </Text>

      </TouchableOpacity>

      <TouchableOpacity onPress={changeThree} activeOpacity={0.6} style={styleSheet.button} >
 
         <Text style={styleSheet.TextStyle}> Change State Three Value </Text>

      </TouchableOpacity>
      
    </View>

  );
}

const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    padding: 10,
  },

  button: {
    
    width: '80%',
    paddingTop:5,
    paddingBottom:5,
    backgroundColor: '#33691E',
    borderRadius:5,
    marginBottom: 20,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
   
  TextStyle:{
      color:'#fff',
      textAlign:'center',
      fontSize: 20
  }
 
});