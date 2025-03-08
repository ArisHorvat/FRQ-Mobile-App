import React, { useState, useEffect } from 'react';
import {Text, ImageBackground } from 'react-native';
import Animated, {useSharedValue, useAnimatedStyle, withTiming, runOnJS} from 'react-native-reanimated';
import stylesWordle from '@/styles/wordleStyle';

const colorJersey: Record<string, any> = {
  white: require("@/assets/images/LETTERS/white.png"),
  grey: require("@/assets/images/LETTERS/grey.png"),
  green: require("@/assets/images/LETTERS/green.png"),
  yellow: require("@/assets/images/LETTERS/yellow.png"),
  special: ""
};


export default function WordleCell({ letter, color }: {letter: string, color: string}) {
  //Animation
  const [displayColor, setDisplayColor] = useState(color);
  const opacity = useSharedValue(1);

  useEffect(() => {
    if (color !== displayColor) {
      opacity.value = withTiming(0, { duration: 300 }, () => {
        
        runOnJS(setDisplayColor)(color);
        opacity.value = withTiming(1, { duration: 300 });
      });
    }
  }, [color]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));



  //Font size
  const [containerSize, setContainerSize] = useState(0);

  const onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    const size = Math.min(width, height);
    setContainerSize(size);
  };

  const dynamicFontSize = containerSize * 0.45;

  return (
    <Animated.View style={[stylesWordle.jersey, animatedStyle]}>
      <ImageBackground
        source={colorJersey[displayColor]}
        style={stylesWordle.jersey}
        resizeMode="contain"
        onLayout={onLayout}
      >
        <Text style={[stylesWordle.jerseyText, {fontSize: dynamicFontSize}, color == "special" ? {color: 'white'}:{}]}>{letter}</Text>
      </ImageBackground>
    </Animated.View>
  );
}