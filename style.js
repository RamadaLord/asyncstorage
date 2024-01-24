import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fc3d73',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cabecalho: {
        fontSize: 20,
        textAlign: "justify",
        fontWeight: "bold",
        textAlignVertical: "center",
      },
    input: {
        height: 40,
        width: 150,
        margin: 12,
        borderWidth: 2,
        borderRadius:10,
        padding: 10,
        backgroundColor:'white',
      },
    button: {
        borderWidth: 1,
        alignItems: "center",
        marginTop:5,
        borderRadius:7,
        padding:4,
        width: 175,
        height: 30,
        backgroundColor: "gold",
      },
    button2: {
        borderWidth: 1,
        alignItems: "center",
        marginTop:5,
        borderRadius:7,
        padding:4,
        width: 175,
        height: 30,
        backgroundColor: "green",
      },
    button3: {
        borderWidth: 1,
        alignItems: "center",
        marginTop:5,
        borderRadius:7,
        padding:4,
        width: 175,
        height: 30,
        backgroundColor: "purple",
      },
  });