import {View, Text, Pressable} from 'react-native'
import stylesKeyboard from '@/styles/keyboardStyle';
import WordleBoard from '@/objects/WordleBoard';




export default function KeyboardLine({keys, keyColors, onKeyPress}: {keys: string[], keyColors: Record<string, string>, onKeyPress: (key: string) => void}){

    return (
        <View style={stylesKeyboard.keyboardLine}>
            {keys.map(
                (letter) => (
                    <Pressable 
                        style={[letter.length > 1 ? stylesKeyboard.otherKey : stylesKeyboard.key, 
                        { backgroundColor: keyColors[letter] || "white" }]} 
                        
                        key={letter} onPress={() => onKeyPress(letter)}>
                        <Text style={stylesKeyboard.keyText}>{letter}</Text>
                    </Pressable>
                )
            )}
        </View>
    );
}