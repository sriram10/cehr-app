import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  ScrollView,
  Button,
} from "native-base";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native"
import { responsiveWidth } from "react-native-responsive-dimensions";
import GoBack from "./goback";
import Header from "./header"
import { useNavigation } from "@react-navigation/native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ChatBoxModel from "./chatBoxModel";

const listData = [1,2,3,4,5,6,7,8];

const Edit = () => {

  const { navigate } = useNavigation();
  const onViewEdit = () => {
    navigate('Edit')
  }

  const currentIndex = useRef(0);
  const [active, setActive] = useState(0);
  const listRef = useRef();

  const previousSlide = () => {
    if (currentIndex.current === 0) {
      return;
    }
  
    if (listRef.current) {
      currentIndex.current = currentIndex.current - 1
      listRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current,
      });

      setActive(currentIndex.current)
    }
  }
  const nextSlide = () => {
    if (currentIndex.current === (listData.length - 1)) {
      return;
    }
  
    if (listRef.current) {
      currentIndex.current = currentIndex.current + 1
      listRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current,
      });

      setActive(currentIndex.current)
    }
  }

  const onSwipeChange = useCallback(({ viewableItems }) => {
    const inView = viewableItems.filter(({ item }) => typeof item === 'number');

    if (inView.length === 0) return;

    currentIndex.current = inView[0].index;
    setActive(currentIndex.current)
  }, [])

  const onItemClick = (index) => {
    if (listRef.current) {
      currentIndex.current = index;
      listRef.current.scrollToIndex({
        animated: true,
        index,
      });

      setActive(currentIndex.current)
    }
  }

  return (
    <View style={styles.root}>
      <Box p={4}>
        {/* <GoBack /> */}
        <HStack space={4} mt={2}>
          <Box flex={2} p={4} rounded={'md'} bg='white' shadow={2}>
          <Heading size={'xs'} mb={2}>Form Meta-data</Heading>
            <HStack mt={2} space={4}>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
              </VStack>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
              </VStack>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
              </VStack>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
              </VStack>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Value</Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
          <Box flex={1} p={4} rounded={'md'} bg='white' shadow={2}>
            <Heading size={'xs'} mb={2}>Patient Information</Heading>
            <HStack mt={2} space={4}>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Name</Text>
                  <Text fontSize={"xs"}>Wanda	Morrison</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>File Number</Text>
                  <Text fontSize={"xs"}>DC545930</Text>
                </HStack>
              </VStack>
              <VStack space={1}>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Age</Text>
                  <Text fontSize={"xs"}>34</Text>
                </HStack>
                <HStack space={2}>
                  <Text fontSize={"xs"} color={'gray.500'}>Diabetic</Text>
                  <Text fontSize={"xs"}>No</Text>
                </HStack>
              </VStack>
            </HStack>
          </Box>
        </HStack>
      </Box>

      <Box flex={1}>
        {/* <FlatList
          ref={listRef}
          horizontal
          pagingEnabled
          decelerationRate={'fast'}
          keyExtractor={(t, i) => `t${i}`}
          snapToInterval={responsiveWidth(100)}
          showsHorizontalScrollIndicator={false}
          data={listData}
          onViewableItemsChanged={onSwipeChange}
          renderItem={({ item }) => {
            return ( */}
              <Box p={4} flex={1} w={responsiveWidth(100)}>
                {/* <Box mb={2} flexDirection={'row'} justifyContent={'space-between'}>
                  <Heading size={'md'}>Form 0{item} - Cataract 0{item}</Heading>
                  <Button
                  onPress={()=>{onViewEdit()}}
                    variant={'outline'}
                    size={'sm'}
                    leftIcon={
                      <Ionicons
                        name="ios-pencil"
                        size={18}
                        color={'#888'}
                      />
                    }
                  >
                    Edit
                  </Button>
                </Box> */}
                <Box flex={1}>
                  <Image
                    source={require('../assets/images/form-sm.png')}
                    style={{ flex: 1, width: '100%' }}
                  />
                 
                 <View style={[styles.chatConatiner,styles.shadowProp]}>
                    <ChatBoxModel/>
                    </View> 
                 

                </Box>
              </Box>
            {/* )
          }}
        /> */}
      </Box>
      {/* <Box h={100} p={4} flexDirection='row'>
        <Box justifyContent={'center'} backgroundColor={'#BFDCEB'} rounded='sm'>
          <TouchableOpacity style={{ flex: 1, padding: 10, justifyContent: 'center' }} onPress={previousSlide}>
            <Ionicons
              name={'ios-chevron-back'}
              size={20}
              color={'#0073AE'}
            />
          </TouchableOpacity>
        </Box> */}
        {/* <ScrollView horizontal style={{ flex: 1, marginHorizontal: 20 }}>
          <HStack space={4}>
            {
              listData.map((item, i) => {
                return (
                  <Box key={i} rounded='sm' style={{
                    borderWidth: 1,
                    borderColor: active === i ? '#0073AE' : 'transparent'
                  }}>
                    <TouchableOpacity onPress={() => onItemClick(i)} style={{ flex: 1 }}>
                      <Image
                        source={require('../assets/images/form-sm.png')}
                        style={{ width: 60, height: 60, flex: 1, borderRadius: 5 }}
                      />
                    </TouchableOpacity>
                  </Box>
                )
              })
            }
          </HStack>
        </ScrollView> */}
        {/* <Box justifyContent={'center'} backgroundColor={'#BFDCEB'} rounded='sm'>
          <TouchableOpacity style={{ flex:1, padding: 10, justifyContent: 'center' }} onPress={nextSlide}>
            <Ionicons
              name={'ios-chevron-forward'}
              size={20}
              color={'#0073AE'}
            />
          </TouchableOpacity>
        </Box>
      </Box> */}

      <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.outbtnStyle}>
        <Text style={{color:"#0073AE"}}>Cancle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnStyle}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(229, 241, 247, 0.5)'
  },
  btnStyle:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:"#0073AE",
    width:150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
    borderRadius:5,
    
  },
  outbtnStyle:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:"transparent",
    borderColor:"#0073AE",
    borderWidth:2,
    width:150,
    alignItems:'center',
    justifyContent:'center',
    marginLeft:30,
    borderRadius:5,
    
  },
  btnContainer:{
    paddingVertical:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
    marginHorizontal:20,

  },
  
  btnText:{
    color:'white'
  },
  chatConatiner:{
    width:400,
    height:500,
    position:'absolute',
    right:0,
    bottom:0,
    borderRadius:20,
    borderBottomRightRadius:0,
  },
 
});

export default Edit;
