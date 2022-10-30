import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ChatBox from "./chatBox";
import Colors from "./Colors";

// import { Colors } from 'react-native/Libraries/NewAppScreen';

const chatboxdata = [
  {
    text: "hello santhos how was the day! hello santhos how was the day!",
    time: "12:45",
    audio: "null",
    istext: true,
    sender: "nick",
  },
  {
    text: "prperly flow",
    time: "12:45",
    audio: "null",
    istext: true,
    sender: "nick",
  },
  {
    text: "Not take much time",
    time: "12:45",
    audio: "null",
    istext: true,
    sender: "nick",
  },
];

const ChatBoxModel = () => {
  const [chatBoxVisible, setChatBoxVisible] = useState(true);
  return (
    <View style={[styles.mainConatainer, styles.shadow]}>
      {chatBoxVisible ? (
        <View style={[styles.chatBoxContainer, styles.shadowProps]}>
          <ChatBox initialChatData={chatboxdata} />
          <CancelChatBox
            chatBoxVisible={chatBoxVisible}
            setChatBoxVisible={setChatBoxVisible}
          />
        </View>
      ) : (
        <TouchableOpacity
          onPress={() => {
            setChatBoxVisible(!chatBoxVisible);
          }}
          style={[styles.chatBtnBool, styles.shadowProps]}
        >
          <Entypo name="dots-three-horizontal" size={30} color="white" />
        </TouchableOpacity>
      )}
    </View>
  );
};
const CancelChatBox = ({ chatBoxVisible, setChatBoxVisible }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={() => {
        setChatBoxVisible(!chatBoxVisible);
      }}
      style={[styles.cancleCon]}
    >
      <Feather name="x" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default ChatBoxModel;

const styles = StyleSheet.create({
  mainConatainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  chatBoxContainer: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 400,
    height: 500,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    overflow: "hidden",
  },
  chatBtnBool: {
    width: 80,
    height: 60,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    backgroundColor: "#00BEE6",
    right: 0,
    bottom: 0,
    position: "absolute",

    alignItems: "center",
    justifyContent: "center",
  },
  cancleCon: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, .75)",
    borderBottomLeftRadius: 25,
    right: 2,
    top: 2,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowProps: {
    borderRadius: 20,
    borderBottomRightRadius: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity:  0.17,
    shadowRadius: 5,
    elevation: 3
  },
  shadow: {
    borderRadius: 20,
    borderBottomRightRadius: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity:  0.17,
    shadowRadius: 5,
    elevation: 3
  },
});
