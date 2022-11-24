import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Heading, Text, HStack, VStack } from "native-base";
const PatientInformationCard = ({ name, fileNumber, age, diabetic }) => {
  return (
    <Box flex={1} p={4} rounded={"md"} bg="white" shadow={3}>
      <Heading size={"xs"} mb={2}>
        Patient Information
      </Heading>
      <HStack mt={2} space={4}>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>{name}</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              File Number
            </Text>
            <Text fontSize={"xs"}>{fileNumber}</Text>
          </HStack>
        </VStack>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Age
            </Text>
            <Text fontSize={"xs"}>{age}</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Diabetic
            </Text>
            <Text fontSize={"xs"}>{diabetic}</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PatientInformationCard;

const styles = StyleSheet.create({});
