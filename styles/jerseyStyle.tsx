import { Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const stylesJersey = StyleSheet.create({
    jersey:{

        // width: '100%',
        // height: '100%',
        flex: 1,
        
        // justifyContent: 'center',
        // alignItems: 'center',
        
    
        // backgroundColor: 'rgba(0, 0, 0, 0)',

        // shadowColor: "black",
        // shadowOffset: { width: 0, height: 8 },
        // shadowOpacity: 0.5,
        // shadowRadius: 8,
        // elevation: 8,
        
        // borderColor: 'yellow',
        // borderWidth: 2,
    },

    jerseyNameContainer:{
        position: 'absolute',
        top: '20%', 
        width: '45%',
        alignItems: 'center',
        alignSelf: 'center',



        // height: '8%',
        // width: '55%',

        // justifyContent: 'center',
        // alignItems: 'center',

        // overflow: 'hidden',

        // borderColor: 'yellow',
        // borderWidth: 2,
    },
    jerseyNumberContainer:{
        position: 'absolute',
        top: '32%', 
        width: '100%',
        alignItems: 'center',


        // borderColor: 'yellow',
        // borderWidth: 2,
    },

    jerseyName:{
        width: '100%',

        fontFamily: 'JerseyM54',

        fontWeight: 900,

        justifyContent: 'center',
        alignItems: 'center',
    
        textAlign: 'center',
        textTransform: 'uppercase',
        color: 'white',

        overflow: 'hidden',

        // borderColor: 'yellow',
        // borderWidth: 2,
    },

    jerseyNumber:{
        width: '100%',
        // height: '70%',

        fontFamily: 'JerseyM54',

        textTransform: 'uppercase',
        fontWeight: 900,
    
        textAlign: 'center',
        color: 'white',

        overflow: 'hidden',

        // shadowColor: 'red',
        // shadowOffset: { width: 0, height: 8 },
        // shadowOpacity: 0.5,

        // borderColor: 'yellow',
        // borderWidth: 2,
    },
});

export default stylesJersey;