import {View, Text, Pressable} from 'react-native'
import { useState } from 'react';

import Jersey from '../jersey';

import stylesTop10 from '@/styles/top10Style';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors';


export default function Top10Player({index, player}: {index: number, player: string}){
    const [containerSize, setContainerSize] = useState(0);
    const [coverOpacity, setCoverOpacity] = useState(1);

    const onLayout = (event: any) => {
    const { width, height } = event.nativeEvent.layout;
    const size = Math.min(width, height);
    setContainerSize(size);
    };

    const dynamicFontSize = containerSize * 0.6;
    
    
    return(
        <View style={stylesTop10.playerContainer} onLayout={onLayout}>
            <View style={stylesTop10.jerseyContainer}>
                <Jersey team="baltimore" name="jackson" number={8}></Jersey>
            </View>
            
            <View style={stylesTop10.nameContainer}>
                <Text style={stylesTop10.nameText}>{player}</Text>
            </View>

            
            <Pressable style={[stylesTop10.coverContainer, {opacity: coverOpacity}]} onPress={() => setCoverOpacity(coverOpacity === 1 ? 0:1)}>
                <Text style={[stylesTop10.coverText, {fontSize: dynamicFontSize}]}>{index}</Text>
            </Pressable>
        </View>
    );
}