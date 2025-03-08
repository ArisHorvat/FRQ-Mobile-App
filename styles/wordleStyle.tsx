import { Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const stylesWordle = StyleSheet.create({
    wordleContainer:{
        height: '60%',
            
        justifyContent: 'center',
        alignItems: 'center'
    },
    wordleRow:{
        flexDirection: 'row',
        
        height: '15%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',

        marginBottom: 3,
        
        overflow: 'hidden',
    },
    jersey:{
        aspectRatio: 1,

        // width: 'auto',
        // height: '100%',
        flex: 1,
    
        justifyContent: 'center',
        alignItems: 'center',
    
        backgroundColor: 'rgba(0, 0, 0, 0)',

        shadowColor: "black",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
    jerseyText:{
        textTransform: 'uppercase',

        fontWeight: 900,

        justifyContent: 'center',
        alignItems: 'center',
    
        textAlign: 'center',
        color: 'black',

        overflow: 'hidden'
    }
});

export default stylesWordle;