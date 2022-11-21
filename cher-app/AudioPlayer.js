import { StyleSheet, Text, View,TouchableOpacity, Animated} from 'react-native'
import React,{useState,useEffect, useRef} from 'react'
import { Entypo } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

const Playback = ({audiourl,sendername}) => {
    const sliderRef = useRef(null);
    const slideranimation  = useRef(new Animated.Value(0)).current
    const [play,setPlay] = useState(false);
    const [Loaded, SetLoaded] = React.useState(false);
    const [Loading, SetLoading] = React.useState(false);
    const [duration, setDuration] = useState(0);
    const [totalduration,setTotalDuration] = useState(0);
    // const SampleTrack = require("../assets/audiofiles/test1.wav");
    const SampleTrack = {uri:audiourl};
    const sound = React.useRef(new Audio.Sound());
    console.log("rerendermethod")
    useEffect(() => {
      LoadAudio();
      slideranimation.value = .5
    }, []);
    useEffect(()=>{
        if(play){
            PlayAudio();
        }else{
            PauseAudio();
        }
    },[play])
    useEffect(()=>{
        if(Loaded){
            console.log("loaded!");
            totalDuration();
        }
    },[Loaded])
    const totalDuration = async()=>{
        try {
            const result = await sound.current.getStatusAsync();
            if(result.isLoaded){
                console.log("duration :",result.durationMillis);
                setTotalDuration(result.durationMillis);
            }
          } catch (error) {}
        };
        const PlayAudio = async () => {
            
            try {  
                sound?.current?.setProgressUpdateIntervalAsync(10);
                sound?.current?.setOnPlaybackStatusUpdate((e)=>{sliderRef.current.setNativeProps({ value: e?.positionMillis/totalduration});});
              const result = await sound.current.getStatusAsync();
              if (result.isLoaded) {
                if (result.isPlaying === false) {
                  sound.current.playAsync();
                }
              }
            } catch (error) {}
          };
      const PauseAudio = async () => {
        try {
          const result = await sound.current.getStatusAsync();
          if (result.isLoaded) {
            if (result.isPlaying === true) {
              sound.current.pauseAsync();
            }
          }
        } catch (error) {}
      };
      const LoadAudio = async () => {
        SetLoading(true);
        const checkLoading = await sound.current.getStatusAsync();
        if (checkLoading.isLoaded === false) {
          try {
            const result = await sound.current.loadAsync(SampleTrack, {}, true);
            if (result.isLoaded === false) {
              SetLoading(false);
              console.log('Error in Loading Audio');
            } else {
              SetLoading(false);
              SetLoaded(true);
            }
            
          } catch (error) {
            console.log(error);
            SetLoading(false);
          }
        } else {
          // console.log("Value duration :",checkLoading?.durationMillis)
          SetLoading(false);
        } 
      };
const positionchanger = async(slideposition)=>{

  try {
    const result = await sound?.current.getStatusAsync();
    if (result.isLoaded) {
      sound?.current.setPositionAsync(Math.floor(slideposition * totalduration));
      if(play){
        PlayAudio();
      }
    }
  } catch (error) {}
}
  return (
    <View style={styles.maincontainer}>
       <Text style={styles.nameText}>{sendername}</Text>
     <View style={{flexDirection:"row",alignItems:'center',marginLeft:5}}>
     <TouchableOpacity onPress={()=>{setPlay(!play);}} activeOpacity={.9}>
      <Entypo name={!play?"controller-play":"controller-paus"} size={24} color="#0073AE" />
      </TouchableOpacity>
     

<Slider
  ref = {sliderRef}
  style={{width: 150, height: 40,color:'#0073AE'}}
  minimumValue={0}
  maximumValue={1}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  thumbTintColor='white'
  onSlidingComplete={(e)=>{positionchanger(e);}}
  onSlidingStart={(e)=>{PauseAudio()}}
  onValueChange={(e)=>{if(e >= .99){setPlay(false)}}}

/>
</View>
    </View>
  )
}
export default Playback
const styles = StyleSheet.create({
    maincontainer:{
        alignItems:'flex-start',
        justifyContent:'center',
        width:200,
        height:70,
        borderRadius:10,
        backgroundColor:'#BFDCEB'
    },
    nameText:{
        marginLeft:5,
        fontSize: 15,
        letterSpacing: 1,
        fontWeight: "700",
        color: "#0073AE",
    }
})