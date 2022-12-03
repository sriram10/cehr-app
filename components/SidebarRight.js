import {StyleSheet,Text,View,Dimensions,TouchableOpacity,} from "react-native";
import React, { useState } from "react";
import Animated, { Layout, FadeOut, FadeIn } from "react-native-reanimated";
import { COLORS, SIZE } from "./../constants/theme";

// in future use community useDimension for orientaion enhancement
const SIZEWIDTH = SIZE.width * 0.24;
const CARDCOLOR = "white";
const dummyData = [
  "Incoming Correspondences",
  "Outgoing Correspondences",
  "Investigation",
  "Financial",
];
const dummyContentData = ["Referrals", "Consent Forms", "Doctor Letter"];

// MC
const SideBarRight = ({onPress}) => {
  const [index, setIndex] = useState(dummyData.length - 1);
  return (
    <View style={[styles.mainContainer, styles.shadow, { shadowOpacity: 0.1 }]}>
      {dummyData.map((e, i) => {
        return (
          <Card
            title={e}
            key={i}
            cardId={i}
            index={index}
            setIndex={setIndex}
            onPress={onPress}
          />
        );
      })}
    </View>
  );
};

// 
const Card = ({ title, cardId, index, setIndex,onPress}) => {
  return (
    <Animated.View
      layout={Layout.duration(300)}
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
            style={{ width: "100%", padding: 30 }}
          >
            {dummyContentData.map((e, i) => {
              console.log("index :",i)
              return (
                <Animated.View entering={FadeIn.delay(100*i+1)} key={i} style={styles.cardContent}>
                
                 <TouchableOpacity onPress={onPress}>
                 <Text
                    style={[
                      styles.cardContentText,
                      i === 0 && {
                        color: COLORS.secondaryColor,
                        borderBottomColor: COLORS.secondaryColor,
                      },
                    ]}
                  >
                    {e}
                  </Text>
                 </TouchableOpacity>
                </Animated.View>
              );
            })}
          </Animated.View>
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
    overflow:'hidden',
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
  cardContent: {
    paddingVertical: 3,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderColor: "grey",
  },
  cardContentText: {
    color: "rgba(94, 94, 94, 1)",
  },
});
