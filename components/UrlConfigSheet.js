import { StyleSheet,Image,View,TouchableOpacity } from "react-native";
import React,{useState} from "react";
import {images, SIZE} from "../constants"
import Animated,{SlideInDown,FadeIn,FadeOut} from "react-native-reanimated"
import {Box,KeyboardAvoidingView,Stack,InputGroup,InputRightAddon, InputLeftAddon,Text,Heading,Input,FormControl,Button,} from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

const UrlConfigSheet = ({isLocal,setIsLocal}) => {
   const [serverKey,setServerKey] = useState(null);
   //  change in future
   const [isUserNameValied,setisUserNameValied] = useState(true);
   const [isPasswordvalied,setisPasswordvalied] = useState(true);
    
   const email_validation = (email)=>{
    const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return (regx.test(email));
   }
   const passwordValidation = (password)=>{
    const regx = /\w{7,}\d{1,}/g
    console.log(regx.test(password))
   }


  return(
    <Animated.View entering={SlideInDown.duration(400)} style={styles.mainContainer}>
     <View style={{width:"100%",alignItems:"center"}}>
     <View style={{width:300,height:90}}>
        <Image
        source={images.cehrLogo}
        resizeMode={"contain"}
        style={{width:"100%",height:"100%"}}
        />
        </View>
     </View>

     
         <FormControl w="100%" maxW="300px" style={{marginTop:100}}>
            <FormControl.Label>Saver Url</FormControl.Label>
            <Input
                height={10}
                placeholder="Enter server URL"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            /> 
           {!isUserNameValied &&<Animated.View entering={FadeIn} exiting={FadeOut} style={{width:"100%",height:20,top:1,borderBottomLeftRadius:5,borderBottomRightRadius:5,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",paddingHorizontal:10}}>
            <MaterialIcons name="error" size={12} color="rgba(250, 47, 47, 1)" style={{marginRight:5}}/>
              <Text style={{color:'rgba(250, 47, 47, 1)',fontSize:10}}>Not in Empty</Text>
            </Animated.View>}
        </FormControl>
        
        <FormControl w="100%" maxW="300px"  style={{marginTop:40}}>
            <FormControl.Label>Licence Key</FormControl.Label>
            <Input
                height={10}
                placeholder="Enter Licence Key"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            />
           {!isPasswordvalied && <Animated.View entering={FadeIn} exiting={FadeOut} style={{width:"100%",height:20,top:1,borderBottomLeftRadius:5,borderBottomRightRadius:5,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",paddingHorizontal:10}}>
            <MaterialIcons name="error" size={12} color="rgba(250, 47, 47, 1)" style={{marginRight:5}}/>
              <Text style={{color:'rgba(250, 47, 47, 1)',fontSize:10}}>Not in Empty</Text>
            </Animated.View>}
        </FormControl>
        <Button
                style={{marginTop:50}}
                w="25%"
                maxW="300px"
                height={10}
                marginTop={"4"}
                onPress={() => {
                 setisPasswordvalied(!isPasswordvalied);
                 setisUserNameValied(!isUserNameValied);
                }}
              >
                Test
              </Button>
    <TouchableOpacity style={{position:"absolute",top:20,left:20,alignItems:'center',justifyContent:'center'}} 
    onPress={()=>{
      setIsLocal(false);
    }}
    >
    <MaterialIcons name="cancel" size={18} color="grey" />
    </TouchableOpacity>
    </Animated.View>
  )
  
};

export default UrlConfigSheet;

const styles = StyleSheet.create({
  mainContainer: {
    width: SIZE.width - 20,
    height: SIZE.height - 20,
    backgroundColor: "white",
    position: "absolute",
    borderRadius:20,
    alignItems:"flex-start",
    justifyContent:"flex-start",
    padding:70,

  },
});
