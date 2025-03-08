import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { useFonts, BebasNeue_400Regular} from "@expo-google-fonts/bebas-neue";

import MainMenuBox from '@/components/mainMenuBox'
import LogoBox from "@/components/logoBox";

import stylesMM from "@/styles/mainMenuStyle";

export default function Index() {
  // const navigation = useNavigation();
  // navigation.setOptions({ headerShown: false });
  
  // const Tab = createBottomTabNavigator();

  //For using Font Bebas Neue
  const [fontsLoaded] = useFonts({
    // The key name you use here is what you’ll reference in your styles.
    JerseyM54: require("@/assets/fonts/Jersey-M54.ttf"),
  });


  return (
    <SafeAreaView style={stylesMM.safeContainer}>
      <LogoBox></LogoBox>
      
      <ScrollView contentContainerStyle={stylesMM.scrollContainer}>
        <MainMenuBox image="baltimore.png" text="Wordle" file="wordle"></MainMenuBox>
        <MainMenuBox image="baltimore.png" text="Top10" file="top10"></MainMenuBox>
        <MainMenuBox image="baltimore.png" text="Connections" file="connections"></MainMenuBox>
        <MainMenuBox image="baltimore.png" text="Guess Who" file="guesswho"></MainMenuBox>
      </ScrollView>

      {/* <Tab.Navigator>
        <Tab.Screen name="1" component={LogoBox}></Tab.Screen>
        <Tab.Screen name="2" component={LogoBox}></Tab.Screen>
        <Tab.Screen name="3" component={LogoBox}></Tab.Screen>
      </Tab.Navigator> */}
    </SafeAreaView>
  );
}
