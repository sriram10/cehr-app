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


const Details = () => {

  const onViewDetail = () => {

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
          horizontal
          pagingEnabled
          decelerationRate={'fast'}
          keyExtractor={(t, i) => `t${i}`}
          snapToInterval={responsiveWidth(100)}
          showsHorizontalScrollIndicator={false}
          data={[1,2,3,4,5,6,7,8]}
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
