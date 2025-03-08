import {View, Image, Text, StyleSheet} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import stylesTop10 from '@/styles/top10Style'

export default function LivesBox(){
    return (
        <View style={stylesTop10.livesBox}>
            <AntDesign name="heart" size={30} color="red" style={{margin: 3}} key={3}/>
            <AntDesign name="heart" size={30} color="red" style={{margin: 3}} key={2}/>
            <AntDesign name="heart" size={30} color="red" style={{margin: 3}} key={1}/>
        </View>
    )
}