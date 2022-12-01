import { useNavigation } from "@react-navigation/native";
import { Box, Text, Heading, HStack } from "native-base";
import React, { useState, useRef, useEffect } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { SketchCanvas } from "rn-perfect-sketch-canvas";
import {PatientInformationCard,MeteDataCard,Toolbar,ZoomableNormal,SideBar,SideBarRight,} from "../components";
// ⚠️ recycle waring apper will chage in future
import ChatBoxModel from "./../components/chatboxModel";
import {dumyData} from "../constants"
import DropDownPage from "../components/DropDownPage";

const MainProfile = () => {
  const [imageValue, setImageValue] = useState(4);
  const [isDraw, setIsDraw] = useState(true);
  const { goBack } = useNavigation();
  const canvaRef = useRef(null);
  useEffect(() => {
    canvaRef?.current?.reset();
  }, [imageValue]);
  const Childcon = ({ canvaRef }) => {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={dumyData.imagevaluearr[imageValue]}
          resizeMode={"stretch"}
          style={[{ width: "100%", height: "100%" }]}
        />
        <SketchCanvas
          ref={canvaRef}
          strokeColor={"black"}
          strokeWidth={isDraw ? 3 : 0}
          containerStyle={[styles.sketchContainer, StyleSheet.absoluteFill]}
        />
        <View style={{}}>
          <ChatBoxModel />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.root}>
      <Box p={4} pt={8}>
        <Heading size={"md"} mt={4}>
          Form 01 - Cataract 01
        </Heading>
        <HStack space={4} mt={4}>
          <MeteDataCard />
          <PatientInformationCard
            name={"Wanda	Morrison"}
            fileNumber={"DC545930"}
            age={34}
            diabetic={"NO"}
          />
        </HStack>
      </Box>
      <View
        style={{
          height: 30,
          width: responsiveWidth(100),
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
          marginBottom: 10,
        }}
      >
        <DropDownPage value={imageValue} setValue={setImageValue} />
        <View style={[styles.toolbarContainer, { flex: 1 }]}>
          <Toolbar
            undoCallBack={() => {
              canvaRef?.current?.undo();
            }}
            redoCallback={() => {
              canvaRef?.current?.redo();
            }}
            zoomCallback={() => {
              setIsDraw(false);
            }}
            drawCallback={() => {
              setIsDraw(true);
            }}
            isDraw={isDraw}
          />
        </View>
      </View>

      <Box flex={1} style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Box p={4} flex={1} shadow={2}>
          <ZoomableNormal
            ChildCon={<Childcon canvaRef={canvaRef} />}
            iszoomable={!isDraw}
          />
        </Box>
        <View>
          <SideBarRight />
        </View>
        <View style={{ position: "absolute", top: 20 }}>
          <SideBar />
        </View>
      </Box>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.outbtnStyle}
          onPress={() => {
            goBack();
            canvaRef?.current?.reset();
          }}
        >
          <Text style={{ color: "#0073AE" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnStyle}
          onPress={() => {
            goBack();
            canvaRef?.current?.reset();
          }}
        >
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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    // backgroundColor:"red",
    marginBottom: 50,
  },

  btnText: {
    color: "white",
  },
  chatConatiner: {
    backgroundColor: "red",
    width: "10%",
    height: "10%",
    position: "absolute",
    left: 0,
    bottom: 0,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    zindex: 1,
  },
  sketchContainer: {
    flex: 1,
  },
  toolbarContainer: {
    alignItems: "flex-end",
    marginHorizontal: 20,
    height: 50,
    justifyContent: "center",
  },
  toolbar: {
    height: 50,
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#00BCE4",
    flexDirection: "row",
    alignItems: "center",
  },
  toolBarBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRightColor: "lightblue",
    borderRightWidth: 1,
    marginHorizontal: 5,
    paddingRight: 15,
  },
  cancleBtn: {
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    marginLeft: 5,
  },
});

export default MainProfile;
