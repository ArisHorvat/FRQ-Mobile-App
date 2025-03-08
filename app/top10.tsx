import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, StyleSheet, ScrollView, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard, Dimensions } from "react-native";
import { TextInput } from "react-native-paper";

import LogoBox from "@/components/logoBox";

import stylesMM from "@/styles/mainMenuStyle";
import stylesTop10 from "@/styles/top10Style";

import Top10Player from "@/components/Top10Comp/top10Player";
import LivesBox from "@/components/Top10Comp/top10Lives";

export default function Top10() {
  const options = ["Apple", "Banana", "Cherry", "Date", "Grape", "Mango", "Orange"];
  const [input, setInput] = useState("Enter a player...");
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);

  const handleInputChange = (text: string) => {
    setInput(text);
    if (text.length > 0) {
      const filtered = options.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions([]);
    }
  };

  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      () => setKeyboardVisible(true)
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      () => setKeyboardVisible(false)
    );
  
    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);
  

  const screenHeight = Dimensions.get("window").height * 0.14;

  return (
   <SafeAreaView style={stylesMM.safeContainer}>
      <LogoBox />

      {keyboardVisible || filteredOptions.length > 0 ? 
        (<ScrollView 
          style={[stylesTop10.filterList, keyboardVisible ? {maxHeight: '26%'} : {maxHeight: '70%'} ]}>
             {filteredOptions.map((player, index) => (
              <Top10Player key={player} index={index + 1} player={player} />
            ))
          }
        </ScrollView>) : 
    
        
        (<View style={{width: '100%', height: '70%'}}>
        <LivesBox></LivesBox>

        <View style={stylesTop10.top10Container}>
          <View style={stylesTop10.top10Column}>
            <Top10Player index={1} player={"Lamar Jackson"} />
            <Top10Player index={2} player={"Lamar Jackson"} />
            <Top10Player index={3} player={"Lamar Jackson"} />
            <Top10Player index={4} player={"Lamar Jackson"} />
            <Top10Player index={5} player={"Lamar Jackson"} />
          </View>
          <View style={stylesTop10.top10Column}>
            <Top10Player index={6} player={"Lamar Jackson"} />
            <Top10Player index={7} player={"Lamar Jackson"} />
            <Top10Player index={8} player={"Lamar Jackson"} />
            <Top10Player index={9} player={"Lamar Jackson"} />
            <Top10Player index={10} player={"Lamar Jackson"} />
          </View>
        </View>
        </View>)}

        <View style={stylesTop10.buttonsBox}>
          <TextInput
            value={input}
            onChangeText={handleInputChange}
            mode="outlined"
            textColor="#1f123a"
            outlineColor="#1f123a"
            style={stylesTop10.textInput}
          /> 
        </View>
      
    </SafeAreaView>
  );
}
