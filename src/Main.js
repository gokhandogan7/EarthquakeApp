/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import axios from 'axios';
import {Component_A} from './components';
import Modal from 'react-native-modal';

const Main = () => {
  const [list, setList] = useState([]);
  const [equ, setEqu] = useState([]);
  const [flag, setFlag] = useState(false);

  const fetchData = async () => {
    const {data} = await axios.get(
      'https://api.orhanaydogdu.com.tr/deprem/live.php',
    );
    setList(data.result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onSelected = (val) => {
    setEqu(val);
    setFlag(true);
  };

  const renderedList = (data) => {
    return (
      <Component_A onSelect={() => onSelected(data.item)} item={data.item} />
    );
  };

  //   {"coordinates": [38.9735, 39.7522], "date": "2020.11.06 21:40:05", "date_stamp": "2020-11-06", "depth": 5.8, "hash": "3e3d9b7110058b3da01b73e29c80c95c", "hash2": "9805c772581d27ad97d70fa8f7c7bcb5", "lat": 39.7522, "lng": 38.9735, "lokasyon": "DEDEOGLU-KEMAH (ERZINCAN)", "mag": 1.9, "rev": null, "timestamp": 1604688005, "title": "DEDEOGLU-KEMAH (ERZINCAN)"}
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={list}
        renderItem={renderedList}
        keyExtractor={(_, index) => index.toString()}
      />

      <Modal
        style={{justifyContent:'center'}}
        
        isVisible={flag}
        swipeDirection='left'
        onSwipeComplete={()=>setFlag(false)}
        >
        <View style={{alingItems:'center', backgroundColor:'white'}}>
          <Text>{equ.title}</Text>
          <Text>Derinlik : {equ.depth}</Text>
          <Text>Tarih : {equ.date}</Text>
          <Text>Siddet : {equ.mag}</Text>
        </View>
      </Modal>
    </View>
  );
};

export default Main;
