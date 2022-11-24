import { StyleSheet, View,Dimensions} from "react-native";
import React from "react";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {useSharedValue,useAnimatedStyle,withTiming,useAnimatedReaction,} from "react-native-reanimated";

const {width,height} = Dimensions.get("window") 
// states
const sizew=width-20 ; //main container size
const sizeh= width-20 ; //main container size
const InstaZoomable = ({ ChildNode }) => {
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
  // for scalling validation
  useAnimatedReaction(
    () => {
      return animationScaling.value;
    },
    (data) => {
      if (data >= 1) {
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
    .onStart((e) => {
      animationFocalX.value = e.focalX;
      animationFocalY.value = e.focalY;
    })
    .onUpdate((e) => {
      animationScaling.value = e.scale;
    })
    .onEnd((e) => {
      animationScaling.value = withTiming(1, { duration: 500 });
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
  return (
    <View style={styles.mainConatainer}>
      <GestureDetector gesture={_pinchGesture}>
        <Animated.View
          style={[
            { backgroundColor: "rgba(205, 242, 250, 0.8)",flex:1 },
            animationScaleStyle,
          ]}
        >
          {ChildNode}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

export default InstaZoomable;
const styles = StyleSheet.create({
  mainConatainer: {
     width:sizew,
     height:sizeh
  },
  container: {
    flex: 1,
    backgroundColor: "red",
  },
});
