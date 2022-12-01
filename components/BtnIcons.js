import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons,} from "@expo/vector-icons";
import {COLORS} from "../constants"
const BtnIcons = ({onPress,title}) => {
  return (
    <TouchableOpacity
    style={[styles.btnStyle, { backgroundColor: COLORS.secondaryColor }]}
    onPress={onPress}
  >
    <Text style={styles.btnText}>{title}</Text>
    <MaterialCommunityIcons
      name="draw"
      size={24}
      color="white"
      style={{ marginLeft: 10 }}
    />
  </TouchableOpacity>
  )
}

export default BtnIcons

const styles = StyleSheet.create({
    btnStyle: {
        flexDirection: "row",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#0073AE",
        width: 150,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 30,
        borderRadius: 5,
      },
      btnText: {
        color: "white",
      },
})