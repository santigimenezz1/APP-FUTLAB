import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
    
    input:{
        color:"hsl(215, 18%, 13%)",
        borderWidth:2,
        borderColor:"hsl(215, 18%, 13%)",
        width: RFValue(120),
        height: RFValue(40),
        borderRadius:12,
        color:"white",
        paddingLeft:10,
        fontFamily: 'NunitoSans_400Regular',
        letterSpacing:2,
        backgroundColor:"hsl(215, 18%, 13%)"

    },
    button:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"hsl(215, 18%, 13%)",
        padding:8,
        borderRadius:22,
        width:120,
    },
  
    container:{
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:10,
        padding:10,      
    }
})
export default styles