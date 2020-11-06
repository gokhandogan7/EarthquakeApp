/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Component_A = (props) => {

  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.container}>
      <Text >{props.item.lokasyon}</Text>
    </TouchableOpacity>
  );
};

export {Component_A};


const styles = StyleSheet.create({
    container: {
     backgroundColor:'#b53a54',
     alignItems:'center',
     margin:7,
     padding:5
    }
})