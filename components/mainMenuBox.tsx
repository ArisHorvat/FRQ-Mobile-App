import {View, Text, Image, StyleSheet, Pressable} from 'react-native'
import { RelativePathString, useRouter } from 'expo-router';
import styles from '@/styles/mainMenuStyle';

export default function MainMenuBox({image, text, file}: {image: string, text: string, file: string}){
    const router = useRouter();

    return(
        <Pressable style={styles.mmBox} 
            onPress={() => {console.log(`pressed ${text}`);
                            const routerFile = `/${file}`;
                            router.push(routerFile as RelativePathString); }}>
            <View style={styles.imageContainer}>
                <Image source={require('@/assets/images/' + image)} style={styles.imageStyle}></Image>
            </View>
            
            <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{text}</Text>
            </View>
        </Pressable>
    );
}