import React, { useState, useEffect } from "react";
import { View, ImageBackground, Image, StyleSheet, Text } from "react-native";
import { TextInput, Checkbox, Button } from "react-native-paper";
import Constants from "expo-constants";
import { sizing } from "../../utils/style";
import Background from "../../../assets/Background.jpg";
import { auth } from "../../../firebase";

const Login = ({ navigation }) => {
  const logo = { uri: "http://unipma.ac.id/images/logo.png" };
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    const login = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Dashboard");
      }
    });
    return login;
  }, []);

  const login = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log(`Masuk sebagai ${user.email}`);
      })
      .catch((error) => alert(error.message));
  };

  const register = () => {
    navigation.navigate("Register");
    setEmail("");
    setPassword("");
  };

  return (
    <View>
      <ImageBackground
        source={Background}
        style={styles.imgBg}
        resizeMode="cover"
      >
        <View style={styles.primaryBg}>
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.SIM}>Sistem Informasi Manajemen</Text>
            <Text style={styles.unipma}>Universitas PGRI Madiun</Text>
          </View>
          <View style={styles.lineHeader} />
          <View style={styles.mainForm}>
            <View style={{ alignItems: "center" }}>
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={[styles.form, { marginTop: sizing.lg }]}
                label="Email"
                mode="outlined"
                activeOutlineColor="white"
                dense={false}
              />
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={true}
                style={[
                  styles.form,
                  { marginTop: sizing.xl, marginBottom: sizing.xl },
                ]}
                label="Password"
                mode="outlined"
                activeOutlineColor="white"
                dense={false}
              />
            </View>
            <View style={styles.checkbox}>
              <Checkbox
                status={checked ? "checked" : "unchecked"}
                onPress={() => setChecked(!checked)}
                color={"#0386FF"}
              />
              <Text style={{ color: "#0386FF" }}>Ingat Saya</Text>
            </View>
          </View>
          <View style={{ backgroundColor: "#FFF", width: 300 }}>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={login}
              color={"#0386FF"}
            >
              Masuk Aplikasi
            </Button>
            <Button
              style={[styles.btn, { marginTop: 0, marginBottom: sizing.xl }]}
              mode="contained"
              onPress={register}
              color={"#0386FF"}
            >
              Buat Akun
            </Button>
            <Text style={styles.forgotPw}>Lupa Password?</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
  primaryBg: {
    marginTop: sizing.xxl,
    alignItems: "center",
  },
  header: {
    backgroundColor: "#000",
    width: 300,
    alignItems: "center",
  },
  logo: {
    height: 90,
    width: 90,
    marginVertical: sizing.lg,
  },
  SIM: {
    color: "#FFF",
    fontSize: 20,
    textAlign: "center",
    marginBottom: sizing.md,
  },
  unipma: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: sizing.lg,
  },
  lineHeader: {
    backgroundColor: "#FFD705",
    width: 300,
    height: 4,
  },
  mainForm: {
    width: 300,
    backgroundColor: "#C4C4C4",
  },
  form: {
    width: 260,
    height: 35,
    backgroundColor: "#FFF",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: sizing.md + 5,
    marginBottom: 10,
  },
  btn: {
    width: 260,
    marginTop: sizing.xl,
    marginBottom: sizing.lg,
    alignSelf: "center",
  },
  forgotPw: {
    color: "#0386FF",
    marginLeft: sizing.lg + 5,
    marginBottom: sizing.lg,
  },
});

export default Login;
