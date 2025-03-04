import { Text, View, StyleSheet } from "react-native";
import CountDown from 'react-native-countdown-component';
import React, {useEffect, useState} from "react";

const secondsInTheFuture = new Date("2025-10-02T14:00:00Z").getTime() / 1000;
const secondsNow = new Date().getTime() / 1000;
const difference = Math.round(secondsInTheFuture - secondsNow);

console.log({ secondsInTheFuture, secondsNow, difference });

export default function Countdown() {
  return (
   
    <View style={styles.container}>
      <Text style={styles.text}> </Text>
      
      <Text style={styles.text}></Text> 
      <CountDown
      size={30}
      until={difference}
      showSeparator
      timeLabels={{d: "Tage", h: "Stunden", m: "Minuten", s: "Sekunden"}}
      digitStyle={{
        backgroundColor: "#fff",
        borderWidth:2,
        borderColor: "#604da0",
      }}
      />
    </View>
 

  
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#bcb9ec'
  },
  text: {
    color: "#000000",
  },
});



