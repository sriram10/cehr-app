import { useNavigation } from "@react-navigation/native";
import { Box, KeyboardAvoidingView, Text, Heading, Input, FormControl, Button } from "native-base";
import {
  View,
  Image,
  Platform,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import {images,SIZE} from "../../constants"
const { width } = Dimensions.get('screen')

const Login = () => {
  const { navigate } = useNavigation()

  const onSubmit = () => {
    navigate('Dashboard')
  }

  return (
    <Box justifyContent={'center'} alignItems='center' flex={1}>
      <ImageBackground
        source={images.loginBg}
        resizeMode={'cover'}
        style={[{
          flex: 1,
          backgroundColor:'gray' },StyleSheet.absoluteFill]}
        />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={{ flex: 1 }} />
        <View style={styles.loginContainer}>
          <Image
            source={images.cehrLogo}
            style={styles.logo}
            resizeMode='contain'
            resizeMethod="auto"
            />

          <View style={styles.textContainer}>
            <Heading size={'lg'} color='gray.800'>Welcome</Heading>
            <Text fontSize={"sm"} color='gray.500'>Please login to continue</Text>

            <View style={styles.formContainer}>
              <FormControl w="75%" maxW="300px">
                <FormControl.Label>Doctor ID</FormControl.Label>
                <Input placeholder="Enter Doctor ID" />
              </FormControl>
              <FormControl w="75%" maxW="300px" marginTop={"2"}>
                <FormControl.Label>Password</FormControl.Label>
                <Input placeholder="Enter Password" secureTextEntry />
              </FormControl>
              <Button w="75%" maxW="300px" marginTop={"4"} onPress={onSubmit}>
                Login
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>

    </Box>
  )
}

const styles = StyleSheet.create({
  logo: {
    marginVertical: 20,
    height: 60,
    marginLeft: -80,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    width:SIZE.width
  },
  loginContainer:{
    flex: 1,
    backgroundColor:'rgba(255, 255, 255, 0.85)',
    padding: 20,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
      }
    })
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:SIZE.width
  },
  formContainer: {
    flex: 1,
    width:SIZE.width,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 30,
  }
})

export default Login;
