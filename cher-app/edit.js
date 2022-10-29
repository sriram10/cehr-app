import { Box, Text, Heading, HStack, VStack } from "native-base";
import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import ChatBoxModel from "./chatBoxModel";

const listData = [1, 2, 3, 4, 5, 6, 7, 8];

const Edit = () => {
  // const { navigate } = useNavigation();
  const [active, setActive] = useState(0);

  return (
    <View style={styles.root}>
      <Box p={4}>
        <HStack space={4} mt={2}>
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
          <Box flex={1} p={4} rounded={"md"} bg="white" shadow={2}>
            <Heading size={"xs"} mb={2}>
              Patient Information
            </Heading>
            <HStack mt={2} space={4}>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={"gray.500"}>
                    Name
                  </Text>
                  <Text fontSize={"xs"}>Wanda Morrison</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={"gray.500"}>
                    File Number
                  </Text>
                  <Text fontSize={"xs"}>DC545930</Text>
                </HStack>
              </VStack>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={"gray.500"}>
                    Age
                  </Text>
                  <Text fontSize={"xs"}>34</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={"gray.500"}>
                    Diabetic
                  </Text>
                  <Text fontSize={"xs"}>No</Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </HStack>
      </Box>

      <Box flex={1}>
        <Box p={4} flex={1} w={responsiveWidth(100)}>
          <Box flex={1}>
            <Image
              source={require("../assets/images/form-sm.png")}
              style={{ flex: 1, width: "100%" }}
            />

            <View style={[styles.chatConatiner, styles.shadowProp]}>
              <ChatBoxModel />
            </View>
          </Box>
        </Box>
        {/* )
          }}
        /> */}
      </Box>

      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.outbtnStyle}>
          <Text style={{ color: "#0073AE" }}>Cancle</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(229, 241, 247, 0.5)",
  },
  btnStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0073AE",
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    borderRadius: 5,
  },
  outbtnStyle: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "transparent",
    borderColor: "#0073AE",
    borderWidth: 2,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    borderRadius: 5,
  },
  btnContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginHorizontal: 20,
  },

  btnText: {
    color: "white",
  },
  chatConatiner: {
    width: 400,
    height: 500,
    position: "absolute",
    right: 0,
    bottom: 0,
    borderRadius: 20,
    borderBottomRightRadius: 0,
  },
});

export default Edit;
