import {StyleSheet,Text,View,TouchableOpacity,Image,ScrollView,TextInput,StatusBar,} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import Colors from "./Colors";
const ChatBox = () => {
  const refr = useRef(null);
  // states
  const [chatboxData, setchatboxData] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [audioBtnenable, setAudiobtn] = useState(false);
  const [recording, setRecording] = useState();
  const [currentAudioCard, setCurrentAudioCard] = useState(0);
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
    setRecording(undefined);
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
      });
    }
  };
  return (
    <View style={styles.mainConatianer}>
      <StatusBar />
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
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.chath2,
                          index == currentAudioCard && {
                            backgroundColor: Colors.primarybackground,
                          },
                          { maxWidth: 180, borderRadius: 20 },
                        ]}
                        onPress={async () => {
                          setCurrentAudioCard(index);
                          setTimeout(() => {
                            setCurrentAudioCard(-1);
                          }, e.duretion);

                          const sound = new Audio.Sound();
                          try {
                            await sound.loadAsync({ uri: e.audio });
                            await sound.replayAsync();
                          } catch (error) {}
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 15,
                            letterSpacing: 1,
                            fontWeight: "700",
                            color: "#0073AE",
                            marginLeft: 15,
                            marginTop: 5,
                          }}
                        >
                          {e.sender}
                        </Text>

                        <View
                          style={{
                            padding: 20,
                            transform: [{ scale: 0.7 }],
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            marginLeft: 20,
                          }}
                        >
                          <Ionicons
                            name={index == currentAudioCard ? "stop" : "play"}
                            size={30}
                            color="black"
                            style={{
                              position: "absolute",
                              transform: [{ translateX: -20 }],
                            }}
                          />
                          {index == currentAudioCard ? (
                            <Image
                              source={require("../assets/images/waveBlue.png")}
                            />
                          ) : (
                            <Image
                              source={require("../assets/images/waveBlack.png")}
                            />
                          )}
                        </View>
                      </TouchableOpacity>
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
              <Ionicons name="paper-plane" size={32} color={"#00BEE6"} />
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
  },
  detailLable: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
  },
  detailLableRight: {},
  detailLableLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    margin: 0,

    // backgroundColor:"purple"
  },
  imageicon: {
    flex: 3,
    backgroundColor: Colors.primarybackground,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 25,
    overflow: "hidden",
    // marginVertical:150
  },
  chatbox: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
  },
  chatcard: {
    // backgroundColor:'white',
    paddingVertical: 2,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  chatContent: {
    flex: 1,
    //   backgroundColor:'red',
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  chatboxleft: {
    // backgroundColor:'red',
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
    // backgroundColor:'blur'
  },
  textFileder: {
    flex: 3,
    // backgroundColor:'pink'
  },
  chatboxinputcon: {
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 0,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  outlinebtn: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: Colors.primarycolorBackground2,
    borderColor: Colors.primaryColor,
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
    backgroundColor: Colors.primarycolorBackground2,
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
    maxWidth: 250,
    borderBottomLeftRadius: 0,
    marginBottom: 3,
    backgroundColor: Colors.primarycolorBackground2,
    borderRadius: 15,
    lineHeight: 25,

    color: "#000000",
  },
  chath2: {
    fontWeight: "600",
    fontSize: 15,
    maxWidth: 250,
    borderBottomLeftRadius: 0,
    marginBottom: 5,
    backgroundColor: Colors.primarycolorBackground2,
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
