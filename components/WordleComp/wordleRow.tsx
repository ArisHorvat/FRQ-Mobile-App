import {View} from 'react-native'
import WordleCell from './wordleCell'
import stylesWordle from '@/styles/wordleStyle';


export default function WordleRow({ letters, color, row }: {letters: string[]; color: string[]; row: number;}){
    return (
        <View style={stylesWordle.wordleRow}>
        {letters.map((letter, colIndex) => (
            <WordleCell key={`${row}-${colIndex}`} letter={letter} color={color[colIndex]} />
        ))}
        </View>
    );
}