import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  botonActive: {
   borderWidth: 4,
    borderColor: "white",
    width: "45%",
     height: 40,
      borderRadius: 14,
       display: "flex",
        justifyContent: "center",
         alignItems: "center",
          backgroundColor: "black",
          borderColor:"green"
  } ,
  botonDesactivado: {
    borderWidth: 4,
     borderColor: "black",
    width: "45%",
     height: 40,
      borderRadius: 14,
       display: "flex",
        justifyContent: "center",
         alignItems: "center",
          backgroundColor: "black",
  },

  botonOn: {
    borderWidth: 4, 
    borderColor: "white",
    width: "45%",
     height: 40,
      borderRadius: 14,
       display: "flex",
        justifyContent: "center",
         alignItems: "center",
          backgroundColor: "black",
          borderColor:"green"

  }
})

export default styles