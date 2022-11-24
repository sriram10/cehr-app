import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Box, Heading, IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const MiniCard = ({ iconName, bgIconName, title, count }) => {
  return (
    <Box
      flex={1}
      p={4}
      rounded={"md"}
      bg="white"
      overflow={"hidden"}
      justifyContent="center"
    >
      <View style={{ position: "absolute", right: 0, bottom: -15 }}>
        <Ionicons name={bgIconName} color={"#e5f1f7"} size={100} />
      </View>
      <Box>
        <Ionicons name={iconName} color={"#939598"} size={20} />
        <Text color={"gray.600"}>{title}</Text>
        <Heading mt={2} color={"blue.700"}>
          {count}
        </Heading>
      </Box>
    </Box>
  );
};

export default MiniCard;

const styles = StyleSheet.create({});
