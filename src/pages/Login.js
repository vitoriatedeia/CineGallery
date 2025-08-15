import { StatusBar } from "expo-status-bar";
import {
  Text,
  ImageBackground,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";

// IMPORTAÇÃO COMPONENTES
import InputComp from "../components/InputComp";
import TextComp from "../components/TextComp";

import { styles } from "../styles/styles";

// IMPORTAÇÃO NATIVE
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const Navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/images/fundologin.jpg")}
    >
      <View style={styles.inputcomp}>
        <TextComp txt="Usuário:" />
        <InputComp textPlaceHolder={"Digite seu usuário"} password={false} />
        <TextComp txt="Senha:" />
        <InputComp textPlaceHolder={"Digite sua senha"} password={true} />
      </View>

      <TouchableOpacity
        onPress={() => Navigation.navigate("Home")}
        style={styles.btnSI}
      >
        <Text style={styles.cadastroSI}> ENTRAR </Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}
