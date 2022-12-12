import { useNavigation } from "@react-navigation/native";
import {Box,KeyboardAvoidingView,Text,Heading,Input,FormControl,Button,} from "native-base";
import {View,Image,Platform,StyleSheet,ImageBackground,} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { images, SIZE } from "../../constants";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import Animated, { FadeIn,SlideInUp} from "react-native-reanimated";
import { COLORS } from "./../../constants/theme";
import UrlConfigSheet from './../../components/UrlConfigSheet';
import { isLoaded } from "expo-font";

const dummycardArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const LOGIN_URL = "https://eyecare-emr.zvolv.com/rest/v17/user/login";
const form = new FormData();
form.append("email", "sriram@pentafox.in");
form.append(
  "password",
  "50ca282b64d1a07fa3cbf33d729a918a852574939c2f5316448c414c2d84904c2ff06c79166161c4a407be5516832e271690d788af68e77657a879a3f735ea76"
);

const Login = () => {
 
  const { navigate } = useNavigation();
  const [isSecure, setIsSecure] = useState(true);
  const [isModel, setIsModel] = useState(false);
  const [clinicName, setClinicName] = useState("Choose Clinic");
  const [isLocal,setIsLocal] = useState(true);
  const onSubmit = () => {
    navigate("Dashboard");
  };

  const loginProcess = async () => {
    try {
      const response = await fetch(LOGIN_URL, {
        headers: {
          businessDomain: "eyecare-emr",
          businessTagID: "98NCMBD2KBZ4R",
          "content-type":
            "multipart/form-data; boundary=---011000010111000001101001",
          device: "browser",
          jwt: "true",
        },
        method: "POST",
        body: form,
      });
      const result = await response.json();
      if (response.status == 200) {
        console.log(result);
        onSubmit();
      }
    } catch (error) {
      console.log("[ERR]", error.message);
    }
  };

  return (
    <Box justifyContent={"center"} alignItems="center" flex={1}>
      <ImageBackground
        source={images.loginBg}
        resizeMode={"cover"}
        style={[
          {
            flex: 1,
            backgroundColor: "gray",
          },
          StyleSheet.absoluteFill,
        ]}
      />

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1 }} />
        <View style={styles.loginContainer}>
          <Image
            source={images.cehrLogo}
            style={styles.logo}
            resizeMode="contain"
            resizeMethod="auto"
          />

          <View style={styles.textContainer}>
            <Heading size={"lg"} color="gray.800">
              Welcome
            </Heading>
            <Text fontSize={"sm"} color="gray.500">
              Please login to continue
            </Text>

            <View style={styles.formContainer}>
              <FormControl w="75%" maxW="300px">
                <FormControl.Label>Doctor ID</FormControl.Label>
                <Input
                  height={10}
                  placeholder="Enter Email ID"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                />
              </FormControl>
              <FormControl w="75%" maxW="300px" marginTop={"2"}>
                <FormControl.Label>Password</FormControl.Label>
                <Input
                  height={10}
                  placeholder="Enter Password"
                  secureTextEntry={isSecure}
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
                  backgroundColor={"white"}
                  InputRightElement={
                    <TouchableOpacity
                      style={{
                        marginHorizontal: 10,
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                      }}
                      onPress={() => {
                        setIsSecure(!isSecure);
                      }}
                    >
                      <Ionicons
                        name={
                          isSecure ? "ios-eye-off-outline" : "ios-eye-outline"
                        }
                        size={18}
                        color="grey"
                      />
                    </TouchableOpacity>
                  }
                />
              </FormControl>
              <FormControl w="75%" maxW="300px" marginTop={"2"}>
                <FormControl.Label>Clinic</FormControl.Label>
                <TouchableOpacity
                  style={styles.clinicparentCon}
                  onPress={() => {
                    setIsModel(true);
                  }}
                >
                  <Text style={styles.loginConotainerText}>{clinicName}</Text>
                  <MaterialIcons
                    name="drag-indicator"
                    size={15}
                    color="rgba(1, 5, 5, .4)"
                  />
                </TouchableOpacity>
                {/* <ClinicDropDown/> */}
              </FormControl>
              <Button
                w="75%"
                maxW="300px"
                height={10}
                marginTop={"4"}
                onPress={() => {
                  loginProcess();
                }}
              >
                Login
              </Button>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>

      {isModel && (
        <TouchableOpacity
          onPress={() => {
            setIsModel(false);
          }}
          activeOpacity={1}
          style={[
            StyleSheet.absoluteFill,
            {
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(197, 197, 197, 0.4)",
            },
          ]}
        >
          <Animated.ScrollView
            entering={FadeIn}
            style={[styles.modelCon]}
            showsVerticalScrollIndicator={false}
          >
            {dummycardArr.map((e, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  onPress={() => {
                    setClinicName(e);
                    setIsModel(false);
                  }}
                  style={{
                    height: 30,
                    borderBottomColor: "grey",
                    borderBottomWidth: StyleSheet.hairlineWidth,
                    height: 50,
                    justifyContent: "center",
                  }}
                >
                  <Text>hello react</Text>
                </TouchableOpacity>
              );
            })}
            <View style={{ height: 30 }} />
          </Animated.ScrollView>
        </TouchableOpacity>
      )}
      <TouchableOpacity style={styles.settingCon}>
        <Ionicons
          name="settings-outline"
          size={30}
          color={COLORS.secondaryColor}
        />
      </TouchableOpacity>
      {isLocal && 
        <UrlConfigSheet isLocal={isLocal} setIsLocal={setIsLocal}/>
        }
    </Box>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginVertical: 20,
    height: 60,
    marginLeft: -80,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    width: SIZE.width,
  },
  loginContainer: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: 20,
    alignItems: "center",
    ...Platform.select({
      ios: {
        borderTopStartRadius: 40,
        borderTopEndRadius: 40,
      },
    }),
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SIZE.width,
  },
  formContainer: {
    flex: 1,
    width: SIZE.width,
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  clinicparentCon: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: 300,
    height: 40,
    borderWidth: 1,
    borderColor: "rgba(197, 197, 197, 0.8)'",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 13,
  },
  loginConotainerText: {
    fontSize: 12,
    color: "rgba(1, 5, 5, .4)",
  },
  modelCon: {
    position: "absolute",
    width: 400,
    height: 400,
    maxHeight: 400,
    backgroundColor: "white",
    borderRadius: 10,
    // justifyContent:"center",
    alignContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow: "scroll",
    top: SIZE.height / 2 - 200,
    left: SIZE.width / 2 - 200,
  },
  settingCon: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    position: "absolute",
    opacity:.7,
    justifyContent: "center",
    alignItems: "center",
    top: 50,
    right: 30,
  },
});

export default Login;
