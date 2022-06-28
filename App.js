import React from "react";
import { StyleSheet, Text, View ,SafeAreaView,Image,Animated} from 'react-native';
import { PinchGestureHandler } from "react-native-gesture-handler";
import Svg, {
  Circle,
  Ellipse,
  G,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';
export default function App() {
  const scale = React.useRef(new Animated.Value(1)).current;
  const handlePinch=Animated.event([{nativeEvent:{scale}}], {useNativeDriver: true},);
  return (
    <PinchGestureHandler onGestureEvent={handlePinch}>
      <Animated.Image source = {require('./parkingLot.jpg')} style={[styles.img,{transform:[{scale}]}]}/>
    </PinchGestureHandler>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center"
  },
  img: {
    flex: 1,
    height: null,
    resizeMode: 'stretch',
    width:null,
    justifyContent:"center",    
    //transform: [{ rotate: '90deg' }],
    // aspectRatio: 1
  }

}); 
