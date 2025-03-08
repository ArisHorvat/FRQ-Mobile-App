import { Text, View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import { useNavigation } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LogoBox from "@/components/logoBox";
import stylesMM from "@/styles/mainMenuStyle";

export default function GuessWho() {
  // const navigation = useNavigation();
  // navigation.setOptions({ headerShown: false });
  
//   const Tab = createBottomTabNavigator();

  return (
    <SafeAreaView style={stylesMM.safeContainer}>
      <LogoBox></LogoBox>
      
      <View style={{height: '60%', overflow: 'hidden', borderColor: 'red', borderWidth: 2,}}>
        <Text>Work in progress</Text>
      </View>

      {/* <Tab.Navigator>
        <Tab.Screen name="1" component={LogoBox}></Tab.Screen>
        <Tab.Screen name="2" component={LogoBox}></Tab.Screen>
        <Tab.Screen name="3" component={LogoBox}></Tab.Screen>
      </Tab.Navigator> */}
    </SafeAreaView>
  );
}
