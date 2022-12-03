import { StyleSheet, Text, View,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Box, ScrollView } from "native-base";
// import { LineChart } from "react-native-gifted-charts";
import {Calendar} from "react-native-calendars"
import { MaterialIcons } from '@expo/vector-icons';
import { month } from './../node_modules/react-native-calendars/src/dateutils';
import { COLORS } from "../constants";
const LineChartcard = ({ data, width }) => {
  const [ismonth,setIsMonth] = useState(true);
  const [currentDate,setCurrentDate] = useState({});
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  const monthArr = ["Jan","Feb","Mar","Apr","Mey","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
  const today = new Date()
  const currentDateString = `${today.getFullYear()}-${today.getMonth()+1}-0${(today.getDate())}`
  console.log(currentDateString);
  // const tomorrowDateString = `${today.getFullYear}-${today.getMonth+1}-${today.getDate}`
  return (
    <Box flex={2} rounded={"md"} bg="white">
     
       {ismonth?<Calendar
      
      markingType={'multi-dot'}
      markedDates={{
        [currentDateString]: {dots: [vacation, massage, workout]},
        '2022-12-04': {dots: [massage, workout]}
      }}
  onDayPress={day => {
    console.log('selected day', day);
    setCurrentDate(day);
    setIsMonth(false)
  }}
  style={{
    height:320
  }}
  />:<View style={{height:320}}>

      <View style={{alignItems:"center",justifyContent:"center",paddingVertical:20}}>
        <Text style={{fontSize:18,color:COLORS.secondaryColor60,fontWeight:"600",}}>{`${monthArr[currentDate?.month-1]} - ${currentDate?.day}`}</Text>
      </View>
      <ScrollView style={{height:300,paddingBottom:30}}
      showsVerticalScrollIndicator={false}
      >
        
    <Card patientname={"Wanda morrison"} doctorname={"john Doe"} fromdate={"9:00AM - 10:30AM"} timestamp={"9AM"}/>
    <Card patientname={"Wanda morrison"} doctorname={"john Doe"} fromdate={"10:00AM - 11:30AM"} timestamp={"11AM"}/>
    <Card patientname={"Wanda morrison"} doctorname={"john Doe"} fromdate={"12:00PM - 1:30PM"} timestamp={"12PM"}/>
    <Card patientname={"Wanda morrison"} doctorname={"john Doe"} fromdate={"2:00AM - 3:30AM"} timestamp={"2PM"}/>
    <Card patientname={"Wanda morrison"} doctorname={"john Doe"} fromdate={"4:00AM - 5:30AM"} timestamp={"4PM"}/>
    <View style={{height:30}}/>
      </ScrollView>
    <TouchableOpacity onPress={()=>{setIsMonth(true)}} style={{width:20,height:20,alignItems:'center',justifyContent:"center",position:"absolute",top:10,left:10}}>
    <MaterialIcons name="cancel" size={20} color="grey" />
    </TouchableOpacity>
    </View>}
    </Box>
  );
};
const Card = ({fromdate,timestamp,patientname,doctorname})=>{
  return(
    <View style={{marginLeft:70,marginTop:10,marginHorizontal:20,height:60,backgroundColor:COLORS.light01,borderRadius:5,alignItems:"flex-start",justifyContent:"center"}}>
        <View style={{margin:3,marginHorizontal:10}}>
          <Text style={{fontSize:13,color:COLORS.secondaryColor80,marginBottom:5}}>{fromdate}</Text>
          <Text style={{fontSize:12,color:"black",marginTop:5}}>{`${patientname} (Dr.${doctorname})`}</Text>
        </View>
        <View style={{position:"absolute",top:0,left:-50}}>
      <Text style={{color:COLORS.secondaryColor,fontWeight:"600"}}>{timestamp}</Text>
    </View>
      </View> 
  )
}
export default LineChartcard;

const styles = StyleSheet.create({});
