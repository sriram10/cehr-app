import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  ScrollView,
} from "native-base";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import Header from "./header"


const Profile = () => {
  const { navigate } = useNavigation();
  const onViewDetail = () => {
    navigate('Details')
  }

  return (
    <View style={styles.root}>
      <Header />

      <Box p={4}>
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


      <ScrollView flex={1} px={4}>
        <Heading mt={4} size={'md'}>All Forms</Heading>
        <VStack space={6} mt={2}>
          {
            [1,2,3,4,5,6].map((d, i) => (
              <HStack key={i} space={6}>
                <TouchableOpacity style={{ flex: 1 }} onPress={onViewDetail}>
                  <Image
                    source={require('../assets/images/form-sm.png')}
                    style={{ flex: 1, width: '100%' }}
                  />
                  <Box h={6} px={4} style={{ backgroundColor: '#BFDCEB', }}>
                    <Text size={'sm'}>Form 0{d} - Cataract 0{d}</Text>
                  </Box>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1 }} onPress={onViewDetail}>
                  <Image
                    source={require('../assets/images/form-sm.png')}
                    style={{ flex: 1, width: '100%' }}
                  />
                  <Box h={6} px={4} style={{ backgroundColor: '#BFDCEB', }}>
                    <Text size={'sm'}>Form 0{d+2} - Cataract 0{d+1}</Text>
                  </Box>
                </TouchableOpacity>
              </HStack>
            ))
          }
        </VStack>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'rgba(229, 241, 247, 0.5)'
  },
});

export default Profile;
