import React from "react";
import { StyleSheet, Text, View ,SafeAreaView,Image,Animated,ImageBackground} from 'react-native';
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
    
      <ImageBackground source = {require('./parkingLot.jpg')} style={styles.img}>
      <Svg>
         <Line x1="100" y1="200" x2="270" y2="200" stroke="red" strokeWidth="2" />
         <Line x1="100" y1="115" x2="100" y2="200" stroke="red" strokeWidth="2" /> 
         <Line x1="270" y1="80" x2="270" y2="200" stroke="red" strokeWidth="2" />  
         <Line x1="270" y1="80" x2="300" y2="80" stroke="red" strokeWidth="2" />
         <Line x1="80" y1="115" x2="100" y2="115" stroke="red" strokeWidth="2" />

      </Svg> 
      
      </ImageBackground>
       
   
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
    height: 300,
    resizeMode: 'contain',
    width:380,
    justifyContent:"center",    
    //transform: [{ rotate: '90deg' }],
    aspectRatio: 1,
    position: 'absolute', 
    bottom: 300
  }

}); 
