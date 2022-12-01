import {StyleSheet,Text,View,Dimensions,TouchableOpacity,} from "react-native";
import React, { useState } from "react";
import Animated, {Layout,FadeOut,} from "react-native-reanimated";
const { width } = Dimensions.get("window");
const SIZEWIDTH = width * 0.24;
const CARDCOLOR = "white";
const SideBarRight = () => {
  const dummyData = [
    "Incoming Correspondences",
    "Outgoing Correspondences",
    "Investigation",
    "Financial",
  ];
  const [index, setIndex] = useState(dummyData.length - 1);
  return (
    <View style={[styles.mainContainer, styles.shadow, { shadowOpacity: 0.1 }]}>
      {dummyData.map((e, i) => {
        return <Card title={e} cardId={i} index={index} setIndex={setIndex} />;
      })}
    </View>
  );
};
const Card = ({ title, cardId, index, setIndex }) => {
  return (
    <Animated.View
      layout={Layout.duration(300)}
      exiting={FadeOut.duration(300)}
      style={[styles.shadow]}
    >
      <TouchableOpacity
        activeOpacity={0.9}
        style={[
          styles.card,
          cardId !== 1 && { transform: [{ translateY: -(cardId * 1) }] },
          { overflow: "hidden" },
        ]}
        onPress={() => {
          setIndex(cardId);
          if (index === cardId) {
            setIndex(13);
          }
        }}
      >
        <Text style={styles.cardText}>{title}</Text>
        {cardId === index && (
          <Animated.View
            Layout={Layout.duration(800)}
            style={{ width: "100%", height: 170 }}
          />
        )}
      </TouchableOpacity>
    </Animated.View>
  );
};
export default SideBarRight;
const styles = StyleSheet.create({
  mainContainer: {
    width: SIZEWIDTH,
    marginTop: 18,
    marginRight: 20,
    position: "absolute",
    right: 0,
    backgroundColor: CARDCOLOR,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // overflow:'hidden',
  },
  card: {
    // borderWidth:StyleSheet.hairlineWidth,
    borderColor: "grey",

    width: "100%",
    backgroundColor: CARDCOLOR,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    borderRadius: 10,
    padding: 10,
    paddingVertical: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardText: {
    fontSize: 14,
    fontWeight: "700",
    color: "black",
    opacity: 0.8,
    marginHorizontal: 20,
  },
  shadow: {
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: -1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 0,
  },
});
