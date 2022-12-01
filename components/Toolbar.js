import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import {MaterialCommunityIcons,Ionicons,MaterialIcons,} from "@expo/vector-icons";
import { COLORS, SIZE } from "../constants";

const Toolbar = ({ undoCallBack, redoCallback,zoomCallback,drawCallback, isDraw }) => {
  const [showToolBar, setShowToolBar] = React.useState(true);
  console.log(">>> TOOLBAR")

  const onClick = ({ callback, draw }) => {
    callback();
  }
  return (
    <View style={styles.toolbarContainer}>
      {!showToolBar ? (
        <TouchableOpacity
          style={[styles.btnStyle, { backgroundColor: COLORS.secondaryColor }]}
          onPress={() => {
            setShowToolBar(true);
          }}
        >
          <Text style={[styles.btnText,{color:"white"}]}>Options</Text>
          <MaterialCommunityIcons
            name="draw"
            size={24}
            color="white"
            style={{ marginLeft: 10 }}
          />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            width: "100%",
            height: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={styles.toolbar}>
            

            <TouchableOpacity style={[styles.toolBarBtn,(!isDraw)&&{ backgroundColor: COLORS.secondaryColor80 }]} onPress={() => onClick({ callback: zoomCallback, draw: false })}>
              <Ionicons name="md-crop-outline" size={24} color={(!isDraw)? "white":"black"}/>
              <Text style={[styles.btnText,(!isDraw)&&{ color:"white"}]}>Zoom</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.toolBarBtn,(isDraw)&&{ backgroundColor: COLORS.secondaryColor80}]} onPress={() => onClick({ callback: drawCallback, draw: true })}>
              <Ionicons name="pencil" size={24} color={(isDraw)? "white":"black"} />
              <Text style={[styles.btnText,(isDraw)&&{ color:"white"}]}>Draw</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolBarBtn} onPress={undoCallBack}>
              <Ionicons name="arrow-undo" size={24} color="rgba(0, 0, 0, 0.6)" />
              <Text style={styles.btnText}>Undo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.toolBarBtn} onPress={redoCallback}>
              <Ionicons name="arrow-redo" size={24} color="rgba(0, 0, 0, 0.6)" />
              <Text style={styles.btnText}>Redo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancleBtn}
              onPress={() => {
                setShowToolBar(false);
              }}
            >
              <MaterialIcons name="cancel" size={24} color={COLORS.secondaryColor} />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Toolbar;

const styles = StyleSheet.create({
  btnStyle: {
    flexDirection: "row",
    paddingHorizontal: 20,
  
    backgroundColor: "#0073AE",
    width: 150,
    height:45,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 30,
    borderRadius: 5,
  },
  btnText: {
    color: "black",
  },
  toolbarContainer: {
    alignItems: "flex-end",
    height: 50,
    justifyContent: "center",
  },
  toolbar: {
    height: 50,
    width: 400,
    justifyContent: "center",
    marginLeft:100,
    borderRadius: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
  },
  toolBarBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    // borderRightColor: "lightblue",
    // borderRightWidth: 1,
    marginHorizontal: 5,
    paddingHorizontal: 8,
    padding:2,
    borderRadius:10,
    
    
  },
  cancleBtn: {
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.9,
    marginLeft: 5,
    // backgroundColor:"blue"
  },
});