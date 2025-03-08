import { StyleSheet } from "react-native";

const stylesMM = StyleSheet.create({
    //Main Menu
    safeContainer: {
      flex: 1,
      backgroundColor: '#1f123a'
    },
    scrollContainer: {
  
      justifyContent: 'center',
      alignItems: 'center'
    },
  
    //Logo Box
    logoBox:{
      height: '14%',
  
      alignItems: 'center',
      justifyContent: 'center',
  
      borderBottomColor: 'white',
      borderBottomWidth: 2
    },
    logoImage: {
        width: '100%',
        height: '90%',
    
        resizeMode: 'contain'
    },
  
    
    //Main Menu Box
    mmBox:{
        flexDirection: 'row',
        
        width: '80%',
        height: 100, 
    
        borderWidth: 2, 
        borderColor: 'black', 
        borderRadius: 10, 
    
        margin: 25,
        
        overflow: 'hidden',
    },
    imageContainer:{
        width: '30%',
        height: '100%',
    },
    imageStyle:{
        width:'100%',
        height:'100%',
    
        backgroundColor: 'white',
        
        borderRightColor: 'black',
        borderRightWidth: 3,
        
        resizeMode: 'cover'
    },
    textContainer:{
        width: '70%',
        height: '100%',
    
        justifyContent: 'center',
    
        backgroundColor: 'white'
    },
    textStyle:{
        fontSize: 30,
        fontWeight: "bold",
    
        textAlign: 'center',
        color: '#1f123a',
    },
});

export default stylesMM;