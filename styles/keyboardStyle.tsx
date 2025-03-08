import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const stylesKeyboard = StyleSheet.create({
    keyboard:{
        height: '26%',

        justifyContent: 'center',
        alignItems: 'center'

    },
    keyboardLine:{
        flexDirection: 'row',
        
        height: '27%',
        width: '100%',

        justifyContent: 'center',
        alignItems: 'center',
        
        overflow: 'hidden',
    },
    key:{
        height: screenHeight * 0.05,
        width: screenWidth * 0.40,

        flex: 1,

        marginLeft: 2,
        marginRight: 2,

        borderRadius: 5,
    
        justifyContent: 'center',
        alignItems: 'center',
    
        backgroundColor: 'white',

        shadowColor: "black",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
    otherKey:{
        height: screenHeight * 0.05,
        width: '35%',

        marginLeft: 10,
        marginRight: 10,

        borderRadius: 5,
    
        justifyContent: 'center',
        alignItems: 'stretch',
    
        backgroundColor: 'white',

        shadowColor: "black",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 8,
    },
    keyText:{
        textTransform: 'uppercase',

        fontSize: 17,
        fontWeight: 900,

        justifyContent: 'center',
        alignItems: 'center',
    
        textAlign: 'center',
        color: 'black',

        overflow: 'hidden'
    }
});

export default stylesKeyboard;