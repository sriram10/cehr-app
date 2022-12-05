import {StyleSheet,View,} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {useSharedValue,useAnimatedStyle,withTiming,useAnimatedReaction,Layout} from "react-native-reanimated";
import { responsiveWidth } from 'react-native-responsive-dimensions';
//main container size 
const ZoomableNormal = ({ ChildCon,iszoomable,widthPersentage}) => {
  // states
  // should change the value of the size=child container width and height
  const sizew=(responsiveWidth(widthPersentage)) ; //main container size 
  const sizeh=(responsiveWidth(widthPersentage))*1.3 ; 
  const pinchManualActivation = useSharedValue(0);
  const contextScale = useSharedValue({ scale: 1 });
  const contextTrans = useSharedValue({ x: 0, y: 0 });
  const animationScaling = useSharedValue(1);
  const animationFinalScaling = useSharedValue(1);
  const animationFocalX = useSharedValue(0);
  const animationFocalY = useSharedValue(0);
  const animationPanTransX = useSharedValue(0);
  const animationPanTransY = useSharedValue(0);
  const animationFinalPanTrans = useSharedValue({ x: 0, y: 0 });

  const centerFocalImage = {
    x: sizew / 2,
    y: sizeh / 2,
  };
  
  // full scaling Icon Component

  // for scalling validation
  useAnimatedReaction(
    () => {
      return animationScaling.value;
    },
    (data) => {
      if (data >= 1.3) {
        if (data <= 3) {
          animationFinalScaling.value = data;
        }
      } else {
        animationFinalScaling.value = 1;
        animationPanTransX.value = withTiming(0, { duration: 100 });
        animationPanTransY.value = withTiming(0, { duration: 100 });
      }
    }
  );
  // not in use only for the translate x and y resitrictions
  useAnimatedReaction(
    () => {
      return [animationPanTransX.value, animationPanTransY.value];
    },
    (data) => {
      animationFinalPanTrans.value = { x: data[0], y: data[1] };
    }
  );
  const _pinchGesture = Gesture.Pinch()
  .enabled(iszoomable)
    .onStart((e) => {
      animationFocalX.value = e.focalX;
      animationFocalY.value = e.focalY;
    })
    .onUpdate((e) => {
      animationScaling.value = e.scale + contextScale.value.scale;
    })
    .onEnd((e) => {
      contextScale.value = { scale: e.scale };
    });
  const _panGestutr = Gesture.Pan()
  .enabled(iszoomable)
    .enableTrackpadTwoFingerGesture(true)
    .minPointers(2)
    .onStart((e) => {
      contextTrans.value = {
        x: animationPanTransX.value,
        y: animationPanTransY.value,
      };
      pinchManualActivation.value = 1;
    })
    .onUpdate((e) => {
      if (animationFinalScaling.value > 1.5) {
        if (e.translationX > 0) {
          if (
            e.x * animationFinalScaling.value - e.x >
            e.translationX + contextTrans.value.x
          ) {
            animationPanTransX.value = e.translationX + contextTrans.value.x;
          }
        } else {
          if (
            e.x - sizew - (e.x - sizew) * animationFinalScaling.value >
            -(e.translationX + contextTrans.value.x)
          ) {
            animationPanTransX.value = e.translationX + contextTrans.value.x;
          }
        }
        if (e.translationY > 0) {
          if (
            e.y * animationFinalScaling.value - e.y >
            e.translationY + contextTrans.value.y
          ) {
            animationPanTransY.value = e.translationY + contextTrans.value.y;
          }
        } else {
          if (
            e.y - sizeh - (e.y - sizeh) * animationFinalScaling.value >
            -(e.translationY + contextTrans.value.y)
          ) {
            animationPanTransY.value = e.translationY + contextTrans.value.y;
          }
        }
      }
    })
    .onEnd(() => {
      pinchManualActivation.value = 0;
    });
  const animationScaleStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: animationPanTransX.value },
      { translateY: animationPanTransY.value },
      { translateX: animationFocalX.value },
      { translateY: animationFocalY.value },
      { translateX: -centerFocalImage.x },
      { translateY: -centerFocalImage.y },
      { scale: animationFinalScaling.value },
      { translateX: -animationFocalX.value },
      { translateY: -animationFocalY.value },
      { translateX: centerFocalImage.x },
      { translateY: centerFocalImage.y },
    ],
  }));
  const composed = Gesture.Simultaneous(_pinchGesture, _panGestutr);

  return (
    <Animated.View layout={Layout.duration(300)} style={[styles.mainConatainer,{width: sizew,
      height: sizew*1.3,}]}>
      <GestureDetector gesture={composed}>
        <Animated.View
          style={[
            styles.shadow,
            { 
              justifyContent:"center",
              width: sizew,
              height: sizew*1.3,
              
            },
            animationScaleStyle,
          ]}
        >
          {ChildCon}
        </Animated.View>
      </GestureDetector>
      
    </Animated.View>
  );
};
export default ZoomableNormal;
const styles = StyleSheet.create({
  mainConatainer: {
    overflow: "hidden",
    // backgroundColor:'red'
  },
  shadow:{
    shadowColor: "grey",
shadowOffset: {
width: 0,
height: -1,
},
shadowOpacity:  .5,
shadowRadius: 1,
elevation: 0
  }

});
