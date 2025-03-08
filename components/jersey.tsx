import { ImageBackground, View, Text, TextStyle } from "react-native";
import { useState } from "react";
import stylesJersey from "@/styles/jerseyStyle";

const teamJersey: Record<string, any> = {
  arizona: require("@/assets/images/JERSEYS/arizona.png"),
  atlanta: require("@/assets/images/JERSEYS/atlanta.png"),
  baltimore: require("@/assets/images/JERSEYS/baltimore.png"),
  buffalo: require("@/assets/images/JERSEYS/buffalo.png"),
  carolina: require("@/assets/images/JERSEYS/carolina.png"),
  chicago: require("@/assets/images/JERSEYS/chicago.png"),
  cincinnati: require("@/assets/images/JERSEYS/cincinnati.png"),
  cleveland: require("@/assets/images/JERSEYS/cleveland.png"),
  dallas: require("@/assets/images/JERSEYS/dallas.png"),
  denver: require("@/assets/images/JERSEYS/denver.png"),
  detroit: require("@/assets/images/JERSEYS/detroit.png"),
  gb: require("@/assets/images/JERSEYS/gb.png"),
  houston: require("@/assets/images/JERSEYS/houston.png"),
  indianapolis: require("@/assets/images/JERSEYS/indianapolis.png"),
  jacksonville: require("@/assets/images/JERSEYS/jacksonville.png"),
  kc: require("@/assets/images/JERSEYS/kc.png"),
  lac: require("@/assets/images/JERSEYS/lac.png"),
  lar: require("@/assets/images/JERSEYS/lar.png"),
  lv: require("@/assets/images/JERSEYS/lv.png"),
  miami: require("@/assets/images/JERSEYS/miami.png"),
  minnesota: require("@/assets/images/JERSEYS/minnesota.png"),
  ne: require("@/assets/images/JERSEYS/ne.png"),
  no: require("@/assets/images/JERSEYS/no.png"),
  nyg: require("@/assets/images/JERSEYS/nyg.png"),
  nyj: require("@/assets/images/JERSEYS/nyj.png"),
  philadelphia: require("@/assets/images/JERSEYS/philadelphia.png"),
  pittsburgh: require("@/assets/images/JERSEYS/pittsburgh.png"),
  seattle: require("@/assets/images/JERSEYS/seattle.png"),
  sf: require("@/assets/images/JERSEYS/sf.png"),
  tb: require("@/assets/images/JERSEYS/tb.png"),
  tennessee: require("@/assets/images/JERSEYS/tennessee.png"),
  washington: require("@/assets/images/JERSEYS/washington.png"),
};

const nameJersey: Record<string, TextStyle[]> = {
  arizona: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  atlanta: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  baltimore: [{color: 'white', position: 'absolute'}],
  buffalo: [{color: 'white', position: 'absolute'}],
  carolina: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  chicago: [{color: 'white', position: 'absolute'}, {color: 'orange', left: -1, top: -1,}],
  cincinnati: [{color: 'white', position: 'absolute'}, {color: 'orange', left: -1, top: -1,}],
  cleveland: [{color: 'white', position: 'absolute'}],
  dallas: [{color: 'grey', position: 'absolute'}],
  denver: [{color: 'white', position: 'absolute'}],
  detroit: [{color: 'white', position: 'absolute'}, {color: 'grey', left: -1, top: -1,}],
  gb: [{color: 'white', position: 'absolute'}],
  houston: [{color: 'white', position: 'absolute'}],
  indianapolis: [{color: 'white', position: 'absolute'}],
  jacksonville: [{color: 'white', position: 'absolute'}],
  kc: [{color: 'white', position: 'absolute'}, {color: 'yellow', left: -1, top: -1,}],
  lac: [{color: 'white', position: 'absolute'}, {color: 'yellow', left: -1, top: -1,}],
  lar: [{color: 'white', position: 'absolute'}],
  lv: [{color: 'grey', position: 'absolute'}],
  miami: [{color: 'white', position: 'absolute'}, {color: 'orange', left: -1, top: -1,}],
  minnesota: [{color: 'white', position: 'absolute'}],
  ne: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  no: [{color: 'gold', position: 'absolute'}, {color: 'white', left: -1, top: -1,}],
  nyg: [{color: 'white', position: 'absolute'}],
  nyj: [{color: 'white', position: 'absolute'}],
  philadelphia: [{color: 'white', position: 'absolute'}],
  pittsburgh: [{color: 'yellow', position: 'absolute'}],
  seattle: [{color: 'grey', position: 'absolute'}],
  sf: [{color: 'white', position: 'absolute'}],
  tb: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  tennessee: [{color: 'white', position: 'absolute'}, {color: 'blue', left: -1, top: -1,}],
  washington: [{color: 'yellow', position: 'absolute'}],
};

const numberJersey: Record<string, TextStyle[]> = {
  arizona: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1}],
  atlanta: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  baltimore: [{color: 'white', position: 'absolute'}, {color: 'gold', top: 0, right: "0.75%"}],
  buffalo: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  carolina: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  chicago: [{color: 'white', position: 'absolute'}, {color: 'orange', left: -1, top: -1,}],
  cincinnati: [{color: 'white', position: 'absolute'}, {color: 'orange', left: -1, top: -1,}],
  cleveland: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  dallas: [{color: 'white', position: 'absolute'}, {color: 'grey', left: -1, top: -1,}],
  denver: [{color: 'white', position: 'absolute'}, {color: 'blue', left: -1, top: -1,}],
  detroit: [{color: 'white', position: 'absolute'}, {color: 'grey', left: -1, top: -1,}],
  gb: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  houston: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  indianapolis: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  jacksonville: [{color: 'white', position: 'absolute'}, {color: 'teal', left: -1, top: -1,}],
  kc: [{color: 'white', position: 'absolute'}, {color: 'yellow', left: -1, top: -1,}],
  lac: [{color: 'white', position: 'absolute'}, {color: 'yellow', left: -1, top: -1,}],
  lar: [{color: 'white', position: 'absolute'}, {color: 'yellow', left: -1, top: -1,}],
  lv: [{color: 'grey', position: 'absolute'}],
  miami: [{color: 'white', position: 'absolute'}, {color: 'orange', left: -1, top: -1,}],
  minnesota: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  ne: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  no: [{color: 'gold', position: 'absolute'}, {color: 'white', left: -1, top: -1,}],
  nyg: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  nyj: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  philadelphia: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  pittsburgh: [{color: 'white', position: 'absolute'}],
  seattle: [{color: 'grey', position: 'absolute'}, {color: 'green', left: -1, top: -1,}],
  sf: [{color: 'white', position: 'absolute'}, {color: 'black', left: -1, top: -1,}],
  tb: [{color: 'white', position: 'absolute'}, {color: 'red', left: -1, top: -1,}],
  tennessee: [{color: 'white', position: 'absolute'}, {color: 'blue', left: -1, top: -1,}],
  washington: [{color: 'yellow', position: 'absolute'}, {color: 'white', left: -1, top: -1,}],
};

export default function Jersey({team, name, number}: {team: string, name: string, number: number}){
     const [containerSize, setContainerSize] = useState(0);
    
      const onLayout = (event: any) => {
        const { width, height } = event.nativeEvent.layout;
        const size = Math.min(width, height);
        setContainerSize(size);
      };
    
      const dynamicFontSizeName = containerSize * 0.08;
      const dynamicFontSizeNumber = containerSize * 0.35;

    return (
      <ImageBackground
        source={teamJersey[team]}
        resizeMode="contain"
        style={stylesJersey.jersey}
        onLayout={onLayout}
      >
        <View style={stylesJersey.jerseyNameContainer}>
            <Text 
              style={[stylesJersey.jerseyName, {fontSize: dynamicFontSizeName}, nameJersey[team][1]]}
              numberOfLines={1}
              ellipsizeMode= "tail"
              >
                {name}</Text>
            <Text 
              style={[stylesJersey.jerseyName, {fontSize: dynamicFontSizeName}, nameJersey[team][0]]}
              numberOfLines={1}
              ellipsizeMode= "tail"
              >
                {name}</Text>
        </View>

        <View style={stylesJersey.jerseyNumberContainer}>
            <Text style={[stylesJersey.jerseyNumber, {fontSize: dynamicFontSizeNumber}, numberJersey[team][1]]}>{number}</Text>
            <Text style={[stylesJersey.jerseyNumber, {fontSize: dynamicFontSizeNumber}, numberJersey[team][0]]}>{number}</Text>
        </View>
      </ImageBackground>
    )
}