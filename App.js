import { StatusBar } from "expo-status-bar";
import apiLocal from "./api/apiLocal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { styles } from "./style";

export default function App() {
  const [nusuario, setNusuario] = useState("");
  const [senha, setSenha] = useState("");
  const [respNome, setRespNome] = useState("");
  const [respToken, setRespToken] = useState("");

  
  async function handleLogin() {
    try {
      const resposta = await apiLocal.post("/LogInMotoqueiros", {
        nusuario,
        senha,
      });
      await AsyncStorage.setItem("@nome", JSON.stringify(resposta.data.nome));
      await AsyncStorage.setItem("@token", JSON.stringify(resposta.data.token));
    } catch (error) {}

    if (!nusuario || !senha) {
      return alert("Campos Em Branco");
    }
    console.log(nusuario, senha);
    alert(nusuario, senha);

    setUsuario("");
    setSenha("");
    async function handleAsyncNome() {
      const iNome = await AsyncStorage.getItem('@nome')
      const nome = JSON.parse(iNome)
      setRespToken('')
      setRespNome(nome)
      return alert(nusuario); 
    }
    async function handleAsyncSenha() {
      const iToken = await AsyncStorage.getItem('@token')
      const token = JSON.parse(iToken)
      setRespNome('')
      setRespToken(token)
      return alert(senha);
    }
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View>
        <Text style={styles.cabecalho}>LogIn</Text>
      </View>

      <View>
        <Text>Usuario:</Text>
        <TextInput
          value={nusuario}
          style={styles.input}
          onChangeText={(text) => setNusuario(text)}
          placeholder="Digite Seu Usuario"
        />
        <Text>Senha:</Text>
        <TextInput
          value={senha}
          style={styles.input}
          onChangeText={(text) => setSenha(text)}
          secureTextEntry={true}
          keyboardType="numeric"
          placeholder="Digite Sua Senha"
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text>Send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={handleAsyncNome}>
          <Text>Async_Nome</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={handleAsyncSenha}>
          <Text>Async_Senha</Text>
        </TouchableOpacity>
      </View>
      <Text>{respNome}</Text>
      <Text>{respToken}</Text>
    </SafeAreaView>
  );
}
