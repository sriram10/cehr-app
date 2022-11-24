import { StyleSheet, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Box, Text } from "native-base";

const ActionButton = () => {
  return (
    <Box flex={1} alignItems={"flex-end"}>
      <Ionicons name="ios-chevron-forward" size={16} color="#888" />
    </Box>
  );
};

export default ActionButton;

const styles = StyleSheet.create({});
