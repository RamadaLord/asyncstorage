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
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function handleAsyncNome() {
    return alert(usuario);
  }
  function handleAsyncSenha() {
    return alert(senha);
  }

  async function handleLogin() {
    
    const resposta = await apiLocal.post('/LogInMotoqueiros',{
      nusuario,
      senha
    })
    
    if (!usuario || !senha) {
      return alert("Campos Em Branco");
    }
    console.log(usuario, senha)
    alert(usuario, senha)

    setUsuario("");
    setSenha("");
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
          value={usuario}
          style={styles.input}
          onChangeText={(text) => setUsuario(text)}
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
    </SafeAreaView>
  );
}
