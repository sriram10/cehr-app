import { useNavigation } from "@react-navigation/native";
import { Box, Text, Heading, HStack} from "native-base";
import React, { useState,useRef, useCallback } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import {SketchCanvas} from 'rn-perfect-sketch-canvas'
import {PatientInformationCard,MeteDataCard,Toolbar,InstaZoomable, ZoomableNormal} from "../components"
import { images } from "../constants";
// ⚠️ recycle waring apper will chage in future
import ChatBoxModel from './../components/chatboxModel';

const BlanckEdit = () => {
  
  const [showToolBar,setShowToolBar] = useState(false);
  const [isDraw,setIsDraw] = useState(false);
  const [instaZoom,setInstaZoom] = useState(true);

  const { goBack } = useNavigation();
  const canvaRef = useRef(null);

  const Childcon = ()=>{
    return(
      <Box flex={1}>
            <Image
              source={images.whitebg}
              style={[{ flex: 1, width: "100%" }]}/>
            <SketchCanvas
              ref={canvaRef}
              strokeColor={"#0073AE"}
              strokeWidth={(isDraw)?8:0} 
              containerStyle={[styles.sketchContainer,StyleSheet.absoluteFill]}   
      />
            <View style={StyleSheet.absoluteFill}>
            <ChatBoxModel/>
            </View>
          </Box>
    )
  }
  return (
    <View style={styles.root}>
      <Box p={4} pt={8}>
        <Heading size={'md'} mt={4}>Form 01 - Cataract 01</Heading>
        <HStack space={4} mt={4}>
         <MeteDataCard/> 
         <PatientInformationCard name={"Wanda	Morrison"} fileNumber={"DC545930"} age={34} diabetic={"NO"}/>
        </HStack>
      </Box>
      <View style={styles.toolbarContainer}>
         <Toolbar undoCallBack={()=>{canvaRef?.current?.undo()}} redoCallback={()=>{canvaRef?.current?.redo()}} zoomCallback={()=>{setIsDraw(false)}} drawCallback={()=>{setIsDraw(true)}} isDraw={isDraw}/>
      </View>
      <Box flex={1}>
        <Box p={4} flex={1} w={responsiveWidth(100)}>
          {/* <InstaZoomable ChildNode={<Childcon/>}/> */}
          <ZoomableNormal ChildCon={<Childcon/>} iszoomable={!isDraw}/>
        </Box>
      </Box>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.outbtnStyle} onPress={() => goBack()}>
          <Text style={{ color: "#0073AE" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} onPress={() => goBack()}>
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
    flexDirection:'row',
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
    backgroundColor:'red',
    width:"10%",
    height:"10%",
    position: "absolute",
    left: 0,
    bottom: 0,
    borderRadius: 20,
    borderBottomRightRadius: 0,
    zindex:1,
  },
  sketchContainer:{
    flex:1
  },
  toolbarContainer:{
    alignItems:'flex-end',
    marginHorizontal:20,
    height:50,
    justifyContent:'center'
  },
  toolbar:{
    height:50,
    justifyContent:'center',
    borderRadius:10,
    padding:10,
    backgroundColor:"#00BCE4",
    flexDirection:'row',
    alignItems:'center'
  },
  toolBarBtn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:"center",
    borderRightColor:"lightblue",
    borderRightWidth:1,
    marginHorizontal:5,
    paddingRight:15
  },
  cancleBtn:{
    alignItems:'center',
    justifyContent:'center',
    opacity:.9,
    marginLeft:5
  }
});

export default BlanckEdit;
