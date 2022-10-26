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
import React, { useEffect, useRef, useState } from "react";
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

const listData = [1,2,3,4,5,6,7,8];

const Details = () => {

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

  return (
    <View style={styles.root}>
      <Header />
      <Box p={4}>
        <GoBack />
        <Heading size={'sm'} mb={2}>Patient Information Display</Heading>

        <HStack mt={2} space={4}>
          <VStack space={1}>
            <HStack space={2}>
              <Text color={'gray.500'}>Name</Text>
              <Text>Wanda	Morrison</Text>
            </HStack>
            <HStack space={2}>
              <Text color={'gray.500'}>Age</Text>
              <Text>34</Text>
            </HStack>
          </VStack>
          <VStack space={1}>
            <HStack space={2}>
              <Text color={'gray.500'}>Diabetic</Text>
              <Text>No</Text>
            </HStack>
            <HStack space={2}>
              <Text color={'gray.500'}>File Number</Text>
              <Text>DC545930</Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>

      <Box flex={1}>
        <FlatList
          ref={listRef}
          horizontal
          pagingEnabled
          decelerationRate={'fast'}
          keyExtractor={(t, i) => `t${i}`}
          snapToInterval={responsiveWidth(100)}
          showsHorizontalScrollIndicator={false}
          data={listData}
          
          renderItem={({ item }) => {
            return (
              <Box p={4} flex={1} w={responsiveWidth(100)}>
                <Box mb={2} flexDirection={'row'} justifyContent={'space-between'}>
                  <Heading size={'md'}>Form 0{item} - Cataract 0{item}</Heading>
                  <Button
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
                </Box>
                <Box flex={1}>
                  <Image
                    source={require('../assets/images/form-sm.png')}
                    style={{ flex: 1, width: '100%' }}
                  /> 
                </Box>
              </Box>
            )
          }}
        />
      </Box>
      <Box h={100} p={4} flexDirection='row'>
        <Box justifyContent={'center'} backgroundColor={'#BFDCEB'} rounded='sm'>
          <TouchableOpacity style={{ flex: 1, padding: 10, justifyContent: 'center' }} onPress={previousSlide}>
            <Ionicons
              name={'ios-chevron-back'}
              size={20}
              color={'#0073AE'}
            />
          </TouchableOpacity>
        </Box>
        <ScrollView horizontal style={{ flex: 1, marginHorizontal: 20 }}>
          <HStack space={4}>
            {
              listData.map((item, i) => {
                return (
                  <Box key={i} rounded='sm' style={{
                    borderWidth: 1,
                    borderColor: active === i ? '#0073AE' : 'transparent'
                  }}>
                    <Image
                      source={require('../assets/images/form-sm.png')}
                      style={{ width: 60, height: 60, flex: 1, borderRadius: 5 }}
                    />
                  </Box>
                )
              })
            }
          </HStack>
        </ScrollView>
        <Box justifyContent={'center'} backgroundColor={'#BFDCEB'} rounded='sm'>
          <TouchableOpacity style={{ flex:1, padding: 10, justifyContent: 'center' }} onPress={nextSlide}>
            <Ionicons
              name={'ios-chevron-forward'}
              size={20}
              color={'#0073AE'}
            />
          </TouchableOpacity>
        </Box>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(229, 241, 247, 0.5)'
  },
});

export default Details;
