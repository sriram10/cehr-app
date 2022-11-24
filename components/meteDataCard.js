import { StyleSheet, View } from "react-native";
import React from "react";
import { Box, Text, Heading, HStack, VStack } from "native-base";
const MeteDataCard = () => {
  return (
    <Box flex={2} p={4} rounded={"md"} bg="white" shadow={2}>
      <Heading size={"xs"} mb={2}>
        Form Meta-data
      </Heading>
      <HStack mt={2} space={4}>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
        </VStack>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
        </VStack>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
        </VStack>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
        </VStack>
        <VStack space={1}>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
          <HStack space={2}>
            <Text fontSize={"xs"} color={"gray.500"}>
              Name
            </Text>
            <Text fontSize={"xs"}>Value</Text>
          </HStack>
        </VStack>
      </HStack>
    </Box>
  );
};

export default MeteDataCard;

const styles = StyleSheet.create({});
