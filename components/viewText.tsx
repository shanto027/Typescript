import React, { useState, useEffect } from 'react';

import { Text, Alert } from 'react-native';

function ViewText() {

   useEffect(() => {

    // Similar to componentwillunmount.
     return () => {
       Alert.alert('useEffect Called As componentwillunmount');
     };
 
   },[] );

return(
    <Text style= {{ fontSize: 25, color: "#000", textAlign: 'center' }}> Hello Friends </Text>
);

}

export default ViewText ;