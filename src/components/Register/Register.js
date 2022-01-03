import React, { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Background from "../../../assets/RegisterBg.jpg";
import { auth } from "../../../firebase";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`Terdaftar sebagai ${user.email}`);
        setEmail("");
        setPassword("");
      })
      .catch((error) => alert(error.message));
  };

  const login = () => {
    navigation.replace("Login");
  };

  return (
    <View>
      <ImageBackground
        source={Background}
        style={{ height: "100%", width: "100%" }}
        resizeMode="cover"
      >
        <Text style={styles.title}>Buat Akun</Text>
        <TextInput
          mode="outlined"
          value={email}
          onChangeText={(text) => setEmail(text)}
          label="Email"
          style={styles.forms}
          dense={false}
        />
        <TextInput
          mode="outlined"
          value={password}
          onChangeText={(text) => setPassword(text)}
          label="Password"
          style={styles.forms}
          dense={false}
          secureTextEntry={true}
        />
        <Button
          mode="contained"
          style={styles.btn}
          color="#0386FF"
          onPress={register}
        >
          Buat Akun
        </Button>
        <Button
          mode="contained"
          style={styles.btn}
          color="#0386FF"
          onPress={login}
        >
          Login
        </Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 50,
    color: "#FFF",
    marginBottom: 20,
  },
  forms: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  btn: {
    marginHorizontal: 30,
    paddingVertical: 10,
    marginBottom: 20,
  },
});

export default Register;
