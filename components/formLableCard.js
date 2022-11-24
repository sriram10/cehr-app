import { StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Box, Text } from "native-base";
const FormLableCard = ({ d, imageSrc, onPress }) => {
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress}>
      <Image source={imageSrc} style={{ flex: 1, width: "100%",height:300}} />
      <Box h={6} px={4} style={{ backgroundColor: "#BFDCEB" }}>
        {(d === 0)?<Text size={"sm"}>
          Form  - Blanck
        </Text>:<Text size={"sm"}>
          Form 0{d} - Cataract 0{d}
        </Text>}
      </Box>
    </TouchableOpacity>
  );
};

export default FormLableCard;

const styles = StyleSheet.create({});
