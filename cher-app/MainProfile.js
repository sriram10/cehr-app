// import { useNavigation } from "@react-navigation/native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";

import { Box, Text, HStack } from "native-base";
import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { SketchCanvas } from "rn-perfect-sketch-canvas";
import {
  PatientInformationCard,
  MeteDataCard,
  Toolbar,
  ZoomableNormal,
  SideBar,
  SideBarRight,
  GoBack,
} from "../components";
// ⚠️ recycle waring apper will chage in future
import ChatBoxModel from "./../components/chatboxModel";
import { dumyData, images, COLORS } from "../constants";
import DropDownPage from "../components/DropDownPage";
import Animated, {
  Layout,
  SlideInDown,
  SlideInRight,
  SlideInLeft,
  SlideInUp,
  SlideOutDown,
} from "react-native-reanimated";

const thumbSpacing = 10;
const thumbImageSize = 60;
const MainProfile = () => {
  const [imageValue, setImageValue] = useState(4);
  const [isDraw, setIsDraw] = useState(true);
  const canvaRef = useRef(null);
  const [isShowThumbList, setIsShowThumbList] = useState(false);
  const [isScalling, setIsScalling] = useState(false);
  const [scaleWidth, setScalWidth] = useState(70);

  // Thumb FlateList

  const [active, setActive] = useState(0);


  // effects
  useEffect(()=>{
    // console.log(responsiveWidth(70))
  },[])
  // rendering function
  const setscalling = useCallback(() => {
    setIsScalling((v) => {
      return !v;
    });
  }, []);
  const setterscalingwidth = useCallback(() => {
    setScalWidth((v) => {
      return v === 95 ? 70 : 95;
    });
  }, []);

  const thumListShow = () => {
    setIsShowThumbList(true);
  };

  useEffect(() => {
    canvaRef?.current?.reset();
  }, [imageValue]);

  const FullScale = () => {
    return (
      <TouchableOpacity
        style={[
          {
            width: 30,
            height: 30,
            backgroundColor: COLORS.secondaryColor15,
            position: "absolute",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            right: 15,
            top: 15,
          },
        ]}
        onPress={() => {
          setscalling();
          setterscalingwidth();
        }}
      >
        <MaterialIcons
          name="crop-free"
          size={20}
          color={COLORS.secondaryColor60}
        />
      </TouchableOpacity>
    );
  };
  const Childcon = useCallback(({ canvaRef }) => {
    return (
      <Animated.View
        layout={Layout.duration(300)}
        // multiple of 1.3 is actula scalling size fo A4 sheet resolution
        style={{ width:574, height:574*1.3}}
      >
        <Image
          source={dumyData.imagevaluearr[imageValue]}
          // stretch for the page full view
          resizeMode={"stretch"}
          style={[{ width: "100%", height: "100%" }]}
        />
        <SketchCanvas
          ref={canvaRef}
          strokeColor={"black"}
          strokeWidth={isDraw?3:0}
          containerStyle={[
            { flexGrow: 1, width: responsiveWidth(scaleWidth) },
            StyleSheet.absoluteFill,
          ]}
        />
        <View style={{}}>
          <ChatBoxModel />
        </View>
        <FullScale />
      </Animated.View>
    );
  },[imageValue]);
  return (
    <View style={styles.root}>
      <Text
        style={{
          textAlign: "center",
          color: "rgba(56, 55, 55, .8)",
          fontSize: 20,
          fontWeight: "800",
          marginTop: 40,
        }}
      >
        Form 01 - Cataract 01
      </Text>
      <View style={{ position: "absolute", top: 45, left: 20, zindex: 2 }}>
        {isScalling ? (
          <TouchableOpacity
            onPress={() => {
              setscalling();
              setterscalingwidth();
            }}
          >
            <Entypo name="chevron-thin-left" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <GoBack />
        )}
      </View>
      {!isScalling && (
        <Animated.View entering={SlideInUp}>
          <Box p={4} pt={4}>
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
              marginTop: 10,
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
                  // canvaRef?.current?.isZoomToggle()
                  setIsDraw(false);
                }}
                drawCallback={() => {
                  // canvaRef?.current?.isDrawToggle()
                  setIsDraw(true);
                }}
                isDraw={isDraw}
              />
            </View>
          </View>
        </Animated.View>
      )}

      <Box flex={1} style={{ flexDirection: "row", alignItems: "flex-start" }}>
        {/* chaneg the image,sketch,topchild,canva always in (540px,540*1.3) */}
        <Animated.View style={[{flex:1,marginHorizontal:20},isScalling && {transform:[{scale:1.3},{translateY:574*.18},{translateX:574*.18}]}]} >
          <ZoomableNormal
            ChildCon={<Childcon canvaRef={canvaRef} />}
            iszoomable={!isDraw}
            widthPersentage={75}
          />
        </Animated.View>
        {!isScalling && (
          <Animated.View entering={SlideInRight}>
            <SideBarRight onPress={thumListShow} />
          </Animated.View>
        )}
        {!isScalling && (
          <Animated.View
            entering={SlideInLeft.duration(500)}
            style={{ position: "absolute", top: -50 }}
          >
            <SideBar />
          </Animated.View>
        )}
      </Box>
      <Animated.View
        layout={Layout.duration(300)}
        style={[
          { flexDirection: "row", marginBottom: 10, padding: 15, height: 0 },
          isShowThumbList && !isScalling && { height: 100 },
        ]}
      >
        <Box justifyContent={"center"} backgroundColor={"#BFDCEB"} rounded="sm">
          <TouchableOpacity
            style={{
              flex: 1,
              width: 40,
              padding: 10,
              justifyContent: "center",
            }}
            onPress={() => {
              // PriviousIndex();
            }}
          >
            <Ionicons name={"ios-chevron-back"} size={20} color={"#0073AE"} />
          </TouchableOpacity>
        </Box>
        {/* THUMB FLATLIST */}
        <FlatList
          horizontal
          // bounces
          // ref={thumbRef}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, marginHorizontal: 20 }}
          data={dumyData.dummyimagevaluearr}
          renderItem={({ item, index }) => {
            return (
              <Box
                key={index}
                rounded="sm"
                style={{
                  marginRight: thumbSpacing,
                  borderWidth: 1,
                  borderColor: active == index ? "#0073AE" : "transparent",
                }}
              >
                <TouchableOpacity
                  // onPress={() => toplistScrolltoIndex(index)}
                  onPress={() => setActive(index)}
                  style={{ flex: 1 }}
                >
                  <Image
                    source={item}
                    style={{
                      width: thumbImageSize,
                      height: thumbImageSize,
                      flex: 1,
                      borderRadius: 5,
                    }}
                  />
                </TouchableOpacity>
              </Box>
            );
          }}
        ></FlatList>
        <Box justifyContent={"center"} backgroundColor={"#BFDCEB"} rounded="sm">
          <TouchableOpacity
            style={{
              flex: 1,
              width: 40,
              padding: 10,
              justifyContent: "center",
            }}
            onPress={() => {
              // nextIndex();
            }}
          >
            <Ionicons
              name={"ios-chevron-forward"}
              size={20}
              color={"#0073AE"}
            />
          </TouchableOpacity>
        </Box>
      </Animated.View>
      {isScalling && (
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown.duration(500)}
          style={[styles.toolbarContainerbottom]}
        >
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
        </Animated.View>
      )}
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
  toolbarContainerbottom: {
    marginBottom: 30,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:"red",
  },
});

export default MainProfile;
