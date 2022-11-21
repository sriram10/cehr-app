import { useNavigation } from "@react-navigation/native";
import { Box, Text, Heading, HStack, VStack } from "native-base";
import React, { useState,useRef } from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import ChatBoxModel from "./chatBoxModel";
import {SketchCanvas} from 'rn-perfect-sketch-canvas'
import {SvgXml} from 'react-native-svg'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
const listData = [1, 2, 3, 4, 5, 6, 7, 8];

const Edit = () => {
  
  const [showToolBar,setShowToolBar] = useState(false);
  const [isDraw,setIsDraw] = useState(false);
  const [instaZoom,setInstaZoom] = useState(true);

  const { goBack } = useNavigation();
  const canvaRef = useRef(null);
  return (
    <View style={styles.root}>
      <Box p={4} pt={8}>
        <Heading size={'md'} mt={4}>Form 01 - Cataract 01</Heading>
        <HStack space={4} mt={4}>
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
      <View style={styles.toolbarContainer}>
          {(!showToolBar)?<TouchableOpacity style={[styles.btnStyle,{backgroundColor:'#00BCE4'}]} onPress={()=>{setShowToolBar(true)}}>
          <Text style={styles.btnText}>Scribble</Text>
          <MaterialCommunityIcons name="draw" size={24} color="white" style={{marginLeft:10}}/>
         </TouchableOpacity>:
         <View style={{width:"100%",height:30,alignItems:"center",justifyContent:"center"}}>
            <View style={styles.toolbar}>
            <TouchableOpacity style={styles.toolBarBtn} onPress={()=>{canvaRef?.current?.undo()}}>
            <Ionicons name="arrow-undo" size={24} color="white"/>
            <Text style={styles.btnText}>Undo</Text>
            </TouchableOpacity>
          
            <TouchableOpacity style={styles.toolBarBtn} onPress={()=>{canvaRef?.current?.redo()}}>
            <Ionicons name="arrow-redo" size={24} color="white"/>
            <Text style={styles.btnText}>Redo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolBarBtn}>
            <Ionicons name="md-crop-outline" size={24} color="white" />
            <Text style={styles.btnText}>Zoom</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolBarBtn}>
            <Ionicons name="pencil" size={24} color="#0073AE" />
            <Text style={[styles.btnText,{color:"#0073AE"}]}>Draw</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cancleBtn} onPress={()=>{setShowToolBar(false)}}>
            <MaterialIcons name="cancel" size={24} color="white" />
            </TouchableOpacity>

            </View>
         </View>}
      </View>
      <Box flex={1}>
        <Box p={4} flex={1} w={responsiveWidth(100)}>
          <Box flex={1}>
            <Image
              source={require("../assets/images/form-sm.png")}
              style={[{ flex: 1, width: "100%" }]}/>
            <SketchCanvas
              ref={canvaRef}
              strokeColor={"#0073AE"}
              strokeWidth={8} 
              containerStyle={[styles.sketchContainer,StyleSheet.absoluteFill]}   
      />
            <View style={StyleSheet.absoluteFill}>
            <ChatBoxModel/> 
            </View>
          </Box>
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

export default Edit;
