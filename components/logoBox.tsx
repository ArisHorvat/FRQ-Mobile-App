import {View, Image, StyleSheet} from 'react-native'
import styles from '@/styles/mainMenuStyle'

export default function LogoBox(){
    return (
        <View style={styles.logoBox}>
            <Image source={require('@/assets/images/frq1.png')} style={styles.logoImage}></Image>
        </View>
    )
}