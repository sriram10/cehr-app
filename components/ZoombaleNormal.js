import {StyleSheet,View,} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {useSharedValue,useAnimatedStyle,withTiming,useAnimatedReaction,} from "react-native-reanimated";
import { SIZE } from "../constants";
const sizew=SIZE.width-20 ; //main container size 
const ZoomableNormal = ({ ChildCon,iszoomable}) => {
  // states
  // should change the value of the size=child container width and height
  
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
    y: sizew / 2,
  };
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
            e.y - sizew - (e.y - sizew) * animationFinalScaling.value >
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
    <View style={styles.mainConatainer}>
      <GestureDetector gesture={composed}>
        <Animated.View
          style={[
            {
              width: sizew,
              height: sizew,
              backgroundColor: "rgba(205, 242, 250, 0.8)",
            },
            animationScaleStyle,
          ]}
        >
          {ChildCon}
        </Animated.View>
      </GestureDetector>
    </View>
  );
};
export default ZoomableNormal;
const styles = StyleSheet.create({
  mainConatainer: {
    width: sizew,
    height: sizew,
    overflow: "hidden",
  },

});
