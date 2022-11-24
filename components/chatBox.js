import {StyleSheet,Text,View,TouchableOpacity,ScrollView,TextInput,} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { COLORS } from "../constants";
import AudioPlayer from "./AudioPlayer";

const ChatBox = () => {
  const refr = useRef(null);
  // states
  const [chatboxData, setchatboxData] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [audioBtnenable, setAudiobtn] = useState(false);
  const [recording, setRecording] = useState();
  useEffect(() => {
    setchatboxData(chatboxdata);
    const now = new Date();
    const date = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);
  // functions
  // add textchat in container
  const addchats = (data, istext) => {
    function padTo2Digits(num) {
      return String(num).padStart(2, "0");
    }
    let c_chatData = chatboxData;
    const now = new Date();
    const date =
      padTo2Digits(now.getHours()) + ":" + padTo2Digits(now.getMinutes());
    let dumyData = {};
    if (istext) {
      dumyData = {
        text: data,
        time: date,
        audio: "null",
        istext: istext,
        sender: "you",
      };
      c_chatData.push(dumyData);
      setchatboxData(c_chatData);
    } else {
      dumyData = { text: "", time: date, audio: data, istext: istext };
      c_chatData.push(dumyData);
      setchatboxData(c_chatData);
    }
  };
  const addAudio = (data) => {
    function padTo2Digits(num) {
      return String(num).padStart(2, "0");
    }
    let c_chatData = chatboxData;
    const now = new Date();
    const date =
      padTo2Digits(now.getHours()) + ":" + padTo2Digits(now.getMinutes());
    let dumyData = {
      text: "",
      time: date,
      audio: data.filepath,
      istext: false,
      duretion: data.duretion,
      sender: "you",
    };
    c_chatData.push(dumyData);
    setchatboxData(c_chatData);
  };
  // Audio recorder Start
  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {}
  }

  // Audio recorder Stop
  async function stopRecording() {
    await recording.stopAndUnloadAsync();
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    const filepath = recording.getURI();
    const fileObj = { filepath: filepath, duretion: status.durationMillis };
    return fileObj;
  }
  // Audio recorder Button function
  const audioRecorder = (bool) => {
    if (!bool) {
      startRecording();
      setAudiobtn(!bool);
    } else {
      stopRecording().then((e) => {
        addAudio(e);
        setAudiobtn(!bool);
        setRecording(undefined);
      });
    }
  };
  return (
    <View style={styles.mainConatianer}>
      {/* <StatusBar /> */}
      {/* {total content} */}
      <View style={styles.content}>
        <View style={styles.chatbox}>
          {/* {ScollView chat content box} */}
          <View style={styles.chatContent}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              ref={refr}
              onContentSizeChange={() =>
                refr?.current?.scrollToEnd({ animated: true })
              }
              style={styles.chatList}
            >
              {chatboxData.map((e, index) => {
                if (e.istext) {
                  return (
                    <View key={index} style={styles.chatcard}>
                      <View style={[styles.chatCon, { borderColor: "black" }]}>
                        <Text
                          style={{
                            fontSize: 15,
                            letterSpacing: 1,
                            fontWeight: "700",
                            color: "#0073AE",
                          }}
                        >
                          {e.sender}
                        </Text>
                        <Text style={[styles.chath2, { marginTop: 2 }]}>
                          {e.text}
                        </Text>
                      </View>
                      <Text style={[styles.cardTime, {}]}>{e.time}</Text>
                    </View>
                  );
                } else {
                  return (
                    <View key={index}>
                      <AudioPlayer audiourl={e.audio} sendername={e.sender} />
                      <Text style={[styles.cardTime]}>{e.time}</Text>
                    </View>
                  );
                }
              })}
            </ScrollView>
          </View>
          {/* {Keypad inputer } */}
          <View
            style={[
              styles.chatboxinputcon,
              { backgroundColor: "#F2F2F2", paddingHorizontal: 10 },
            ]}
          >
            <TouchableOpacity
              style={[
                styles.chatboxleft,
                audioBtnenable && { backgroundColor: "red" },
              ]}
              onPress={() => {
                setAudiobtn(!audioBtnenable);
              }}
            >
              <Ionicons
                name={audioBtnenable ? "ios-stop" : "mic"}
                size={audioBtnenable ? 25 : 30}
                color={audioBtnenable ? "white" : "white"}
                onPress={() => {
                  audioRecorder(audioBtnenable);
                }}
              />
            </TouchableOpacity>
            <View style={styles.inputContainer}>
              <TextInput
                value={currentText}
                style={{ backgroundColor: "white", width: 220, height: 40 }}
                onSubmitEditing={() => {
                  addchats(currentText, true);
                  setCurrentText("");
                }}
                onChangeText={(e) => {
                  setCurrentText(e);
                }}
              />
            </View>
            <TouchableOpacity
              style={[
                styles.chatboxleft,
                {
                  backgroundColor: "transparent",
                  transform: [{ rotate: "45deg" }],
                },
              ]}
              onPress={() => {
                addchats(currentText, true);
                setCurrentText("");
              }}
            >
              <Ionicons
                name="paper-plane"
                size={35}
                color={"#00BEE6"}
                style={{ transform: [{ rotate: "-45deg" }] }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  mainConatianer: {
    flex: 1,
    backgroundColor: "white",
    shadowOpacity: 0.4,
    shadowRadius: 1,
    elevation: 1,
    shadowColor: "#0073AE",
    borderRadius: 20,
    borderBottomRightRadius: 0,
    borderWidth: 1, //StyleSheet.hairlineWidth,
    borderColor: "lightblue",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    margin: 0,
  },
  imageicon: {
    flex: 3,
    backgroundColor: COLORS.light01,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    overflow: "hidden",
  },
  chatList: {
    padding: 10,
    marginTop: 10,
    borderTopLeftRadius: 25,
    backgroundColor: "#fff",
  },
  chatbox: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
  },
  chatcard: {
    paddingVertical: 2,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  chatContent: {
    flex: 1,
    justifyContent: "center",
  },
  chatboxleft: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#00BEE6",
  },
  chatboxRight: {
    flex: 8,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  textFileder: {
    flex: 3,
  },
  chatboxinputcon: {
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#00BEE6",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderTopColor: "#ccc",
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  outlinebtn: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: COLORS.light02,
    borderColor: COLORS.primarColor,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: 10,
    flexDirection: "row",
  },
  audioCard: {
    height: 30,
    width: 100,
    backgroundColor: COLORS.light02,
    marginHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 0,
  },
  texth1: {
    fontWeight: "700",
    fontSize: 26,
    lineHeight: 30,
    color: "#000000",
  },
  texth2: {
    fontWeight: "600",
    fontSize: 20,
    color: "#000000",
  },
  texth3: {
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 20,
    color: "#000000",
  },
  normalText: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 18,
    color: "#000000",
  },
  chatCon: {
    padding: 5,
    fontWeight: "600",
    paddingVertical: 5,
    fontSize: 15,
    maxWidth: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 0,
    marginBottom: 3,
    backgroundColor: COLORS.light02,
    borderRadius: 10,
    lineHeight: 25,

    color: "#000000",
  },
  chath2: {
    fontWeight: "500",
    fontSize: 15,
    // maxWidth: 250,
    borderBottomLeftRadius: 0,
    marginBottom: 5,
    backgroundColor: COLORS.light02,
    borderRadius: 15,
    lineHeight: 25,
    color: "#000000",
    paddingRight: 5,
  },

  cardTime: {
    marginTop: 0,
    marginLeft: 5,
    marginBottom: 20,
    fontSize: 10,
    color: "grey",
  },

  inputContainer: {
    flexDirection: "row",
    overflow: "hidden",
    borderColor: "#aaa",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
    paddingHorizontal: 10,
    elevation: 0,
  },
});

const chatboxdata = [
  {
    text: "I can see some anomalies in here. I can see some anomalies in here.",
    time: "12:45 am",
    audio: "null",
    istext: true,
    sender: "nick",
  },
  {
    text: "Verify once before proceeding",
    time: "12:55 am",
    audio: "null",
    istext: true,
    sender: "nick",
  },
  {
    text: "Advised to take another test",
    time: "03:23 pm",
    audio: "null",
    istext: true,
    sender: "nick",
  },
];
