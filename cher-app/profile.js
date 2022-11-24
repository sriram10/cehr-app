import { useNavigation} from "@react-navigation/native";
import {Box,Heading,HStack,VStack,ScrollView,} from "native-base";
import {View,StyleSheet,} from "react-native"
import {Header,PatientInformationCard,FormLableCard,GoBack} from "../components"
import {images} from "../constants"

const Profile = () => {
  const { navigate } = useNavigation();
  const onViewDetail = () => {
    navigate('Details')
  }
  const onViewEdit = () => {
    navigate('BlanckEdit')
  }
  return (
    <View style={styles.root}>
      <Header />
      <Box p={4}>
        <GoBack />
        <HStack space={4} mt={2}>
          <Box flex={2} />
         <PatientInformationCard name={"Wanda	Morrison"} fileNumber={"DC545930"} age={34} diabetic={"NO"}/>
        </HStack>
      </Box>
      <ScrollView flex={1} px={4} >
        <Heading size={'md'}>All Forms</Heading>
        <VStack space={6} mt={2}>
          {
            [0,1,2,3,4,5].map((d, i) => (
              <HStack key={i} space={6}>
                <FormLableCard d={d}  imageSrc={(i===0)?images.whitebg:images.formSM} onPress={(i===0)?onViewEdit:onViewDetail}/>
                <FormLableCard d={d+1} imageSrc={images.formSM} onPress={onViewDetail}/>
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
