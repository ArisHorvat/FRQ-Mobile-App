import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Animated, {useSharedValue} from "react-native-reanimated";

import LogoBox from "@/components/logoBox";
import KeyboardLine from "@/components/WordleComp/keyboardLine";
import WordleRow from "@/components/WordleComp/wordleRow";

import stylesMM from "@/styles/mainMenuStyle";
import stylesKeyboard from "@/styles/keyboardStyle";
import stylesWordle from "@/styles/wordleStyle";

import WordleBoard from "@/objects/WordleBoard";



export default function Wordle() {
//   const navigation = useNavigation();
//   navigation.setOptions({ headerShown: false });
  
//   const Tab = createBottomTabNavigator();

  const word = "jackson";
  const [wordleBoard, setBoard] = useState(new WordleBoard(word));
  const [, forceUpdate] = useState({});


  const handleKeyPress = (key: string) => {
    if (key === "Delete") {
      wordleBoard.removeLetter();
    } else if (key === "Enter") {
      wordleBoard.submitWord();
    } else {
      wordleBoard.addLetter(key);
    }

    forceUpdate({});
  }  


  return (
    <SafeAreaView style={stylesMM.safeContainer}>
      <LogoBox></LogoBox>

      <View style={stylesWordle.wordleContainer}>
        <WordleRow letters={wordleBoard.board[0]} color={wordleBoard.cellColor[0]} row={1}></WordleRow>
        <WordleRow letters={wordleBoard.board[1]} color={wordleBoard.cellColor[1]} row={2}></WordleRow>
        <WordleRow letters={wordleBoard.board[2]} color={wordleBoard.cellColor[2]} row={3}></WordleRow>
        <WordleRow letters={wordleBoard.board[3]} color={wordleBoard.cellColor[3]} row={4}></WordleRow>
        <WordleRow letters={wordleBoard.board[4]} color={wordleBoard.cellColor[4]} row={5}></WordleRow>
        <WordleRow letters={wordleBoard.board[5]} color={wordleBoard.cellColor[5]} row={6}></WordleRow>
      </View>

      <View style={stylesKeyboard.keyboard}>
        <KeyboardLine keys={['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']} keyColors={wordleBoard.keyColors} onKeyPress={handleKeyPress}></KeyboardLine>
        <KeyboardLine keys={['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']} keyColors={wordleBoard.keyColors} onKeyPress={handleKeyPress}></KeyboardLine>
        <KeyboardLine keys={['z', 'x', 'c', 'v', 'b', 'n', 'm']} keyColors={wordleBoard.keyColors} onKeyPress={handleKeyPress}></KeyboardLine>
        <KeyboardLine keys={['Delete', 'Enter']} keyColors={wordleBoard.keyColors} onKeyPress={handleKeyPress}></KeyboardLine>
      </View>

      {/* <Tab.Navigator>
        <Tab.Screen name="1" component={LogoBox}></Tab.Screen>
        <Tab.Screen name="2" component={LogoBox}></Tab.Screen>
        <Tab.Screen name="3" component={LogoBox}></Tab.Screen>
      </Tab.Navigator> */}
    </SafeAreaView>
  );
}
