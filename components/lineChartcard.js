import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import { LineChart } from "react-native-gifted-charts";
import {Calendar} from "react-native-calendars"
const LineChartcard = ({ data, width }) => {
  const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
  const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
  const workout = {key: 'workout', color: 'green'};
  <Calendar
  theam={{
    dayTextColor:"red"
  }}
  markingType={'multi-dot'}
  markedDates={{
    '2022-11-25': {dots: [vacation, massage, workout]},
    '2022-11-26': {dots: [massage, workout]}
  }}
onDayPress={day => {
console.log('selected day', day);
}}

theme={{

  dayTextColor:"blue"
}}
/>
  return (
    <Box flex={2} p={4} rounded={"md"} bg="white">
      {/* <LineChart
        data={data}
        color={"#0073AE"}
        dataPointsColor={"#0073AE"}
        startFillColor={"#80B9D6"}
        endFillColor={"#E5F1F7"}
        xAxisColor={"#0073AE"}
        yAxisColor={"#0073AE"}
        yAxisLabelWidth={20}
        curved
        areaChart
        isAnimated
        adjustToWidth
        width={width}
        yAxisTextStyle={{
          fontSize: 10,
          color: "#4096C2",
        }}
      /> */}
       <Calendar
      markingType={'multi-dot'}
      markedDates={{
        '2022-11-25': {dots: [vacation, massage, workout]},
        '2022-11-26': {dots: [massage, workout]}
      }}
  onDayPress={day => {
    console.log('selected day', day);
  }}
  />
    </Box>
  );
};

export default LineChartcard;

const styles = StyleSheet.create({});
