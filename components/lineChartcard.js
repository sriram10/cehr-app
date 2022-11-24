import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box } from "native-base";
import { LineChart } from "react-native-gifted-charts";

const LineChartcard = ({ data, width }) => {
  return (
    <Box flex={2} p={4} rounded={"md"} bg="white">
      <LineChart
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
      />
    </Box>
  );
};

export default LineChartcard;

const styles = StyleSheet.create({});
