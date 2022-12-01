import { Ionicons } from "@expo/vector-icons";
import { Box, Heading, HStack, Button } from "native-base";
import React, { useRef, useState,useEffect } from "react";
import {View,Image,StyleSheet,TouchableOpacity,FlatList,} from "react-native";
import { responsiveWidth } from "react-native-responsive-dimensions";
import { useNavigation} from "@react-navigation/native";
import {Header,PatientInformationCard,MeteDataCard,GoBack,} from "../components";
import { SIZE,images} from "../constants";
import BtnIcons from './../components/BtnIcons';


// dummy data for list rendering
const listData = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26,
];



const Details = () => {

  // refs for flatlists
  const thumbSpacing = 10;
  const thumbImageSize = 60;
  const topRef = useRef(null);
  const thumbRef = useRef(null);
  const [active, setActive] = useState(0);

  const { navigate } = useNavigation();
  const onViewEdit = () => {
    navigate("Edit");
  };



  const toplistScrolltoIndex = (index) => {
    setActive(index);
    console.log("index :", index);
    topRef?.current?.scrollToOffset({
      offset: index * SIZE.width,
      animated: true,
    });
    if (
      index * (thumbImageSize + thumbSpacing) - thumbImageSize / 2 >
      (SIZE.width - 180) / 2
    ) {
      //180 for the ☝️ side navigation buttons spacing and width
      thumbRef?.current?.scrollToOffset({
        offset:
          index * (thumbImageSize + thumbSpacing) -
          (SIZE.width - 180) / 2 +
          thumbImageSize / 2,
        animated: true,
      });
    }
  };

  const nextIndex = () => {
    console.log(listData.length);
    if (active < listData.length - 1) {
      toplistScrolltoIndex(active + 1);
    }
  };
  const PriviousIndex = () => {
    if (active > 0) {
      toplistScrolltoIndex(active - 1);
    }
  };

  return (
    <View style={styles.root}>
      <Header />
      <Box p={4}>
        <GoBack />
        <HStack space={4} mt={2}>
          <MeteDataCard />
          <PatientInformationCard
            name={"Wanda	Morrison"}
            fileNumber={"DC545930"}
            age={34}
            diabetic={"NO"}
          />
        </HStack>
      </Box>

      <Box flex={1}>
        {/* TOP FLATLIST */}
        <FlatList
          ref={topRef}
          horizontal
          pagingEnabled
          onMomentumScrollEnd={(event) => {
            toplistScrolltoIndex(
              Math.floor(event.nativeEvent.contentOffset.x / SIZE.width)
            );
          }}
          
          decelerationRate={"fast"}
          showsHorizontalScrollIndicator={false}
          data={listData}
          renderItem={({ item,index }) => {
            return (
              <Box p={4} flex={1} w={responsiveWidth(100)}>
                <Box
                  mb={2}
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                >
                  <Heading size={"md"}>
                    Form 0{item} - Cataract 0{item}
                  </Heading>
                 <BtnIcons onPress={onViewEdit} title={"Edit"}/>
                </Box>
                <Box flex={1}>
                  <Image
                    source={images.formSM}
                    style={{ flex: 1, width: "100%" }}
                  />
                </Box>
              </Box>
            );
          }}
        />
      </Box>
      <Box h={100} p={4} flexDirection="row">
        <Box justifyContent={"center"} backgroundColor={"#BFDCEB"} rounded="sm">
          <TouchableOpacity
            style={{
              flex: 1,
              width: 40,
              padding: 10,
              justifyContent: "center",
            }}
            onPress={() => {
              PriviousIndex();
            }}
          >
            <Ionicons name={"ios-chevron-back"} size={20} color={"#0073AE"} />
          </TouchableOpacity>
        </Box>
        {/* THUMB FLATLIST */}
        <FlatList
          horizontal
          ref={thumbRef}
          showsHorizontalScrollIndicator={false}
          style={{ flex: 1, marginHorizontal: 20 }}
          data={listData}
          renderItem={({ item, index }) => {
            return (
              <Box
                key={index}
                rounded="sm"
                style={{
                  marginRight: thumbSpacing,
                  borderWidth: 1,
                  // borderColor:"red"
                  borderColor: active == index ? "#0073AE" : "transparent",
                }}
              >
                <TouchableOpacity
                  onPress={() => toplistScrolltoIndex(index)}
                  style={{ flex: 1 }}
                >
                  <Image
                    source={images.formSM}
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
              nextIndex();
            }}
          >
            <Ionicons
              name={"ios-chevron-forward"}
              size={20}
              color={"#0073AE"}
            />
          </TouchableOpacity>
        </Box>
      </Box>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(229, 241, 247, 0.5)",
  },
});

export default Details;
