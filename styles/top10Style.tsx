import { Dimensions, StyleSheet} from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const stylesTop10 = StyleSheet.create({
    top10Container:{
        width: '100%',
        height: '90%',

        flexDirection: 'row',

        justifyContent: 'space-evenly',
        alignItems: 'center',

        backgroundColor: '#1f123a',

        // borderColor: 'white',
        // borderWidth: 1,
        // borderRadius: 5,
    },

    top10Column:{
        height: '100%',
        width: '48%',
            
        justifyContent: 'space-evenly',
        alignItems: 'center',

        // borderColor: 'red',
        // borderWidth: 2,
    },

    livesBox:{
        height: '10%',

        flexDirection: 'row',
    
        alignItems: 'center',
        justifyContent: 'center',
    
        margin: 2,

        // borderBottomColor: 'white',
        // borderBottomWidth: 2
    },


    playerContainer:{
        flexDirection: 'row',
        
        width: '100%',
        height: '19%', 
    
        borderWidth: 4, 
        borderColor: 'white',
        borderRadius: 10,

        marginBottom: 3,

        
        overflow: 'hidden'
    },

    jerseyContainer:{
        width: '35%',
        height: '100%',

        backgroundColor: 'white'
    },

    nameContainer:{
        width: '70%',
        height: '100%',
    
        justifyContent: 'center',

        borderLeftColor: '#1f123a',
        borderLeftWidth: 3,
    
        backgroundColor: 'green'
    },
    nameText:{
        fontSize: 20,
        fontWeight: "bold",
    
        textAlign: 'center',
        color: '#1f123a',
    },


    coverContainer: {
        position: 'absolute',

        width: '100%',
        height: '100%',

        justifyContent:'center',
        alignItems: 'center',

        backgroundColor: '#1f123a',
        color: '#1f123a',

        
    },
    coverText: {
        fontWeight: "bold",
    
        textAlign: 'center',
        color: 'white',

        shadowColor: 'grey',
        shadowOffset: {width: 4, height: 8},
        shadowOpacity: 0.5,
    },

    buttonsBox: {
        width: '100%',
        height: '12%',

        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        width: screenWidth * 0.8,
        height: screenHeight * 0.07,

        backgroundColor: "white",
    },


    filterList: {
        width: '100%',
    }
});

export default stylesTop10;