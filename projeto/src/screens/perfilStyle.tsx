import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#d1d1d1",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
        
    },
    texto:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    },
    botao:{
        backgroundColor: "purple",
        height: 50,
        width: 250,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
        
    },
    foto:{
        width: 300,
        height: 300,
        borderRadius: 8,
    },
   
})

export default styles;