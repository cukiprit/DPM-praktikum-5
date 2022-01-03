import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Background from "../../../assets/Background.jpg";
import Book from "../../../assets/Book.png";
import Sim from "../../../assets/Vector.png";
import { auth } from "../../../firebase";
import { sizing } from "../../utils/style";

const Dashboard = ({ navigation }) => {
  const logo = { uri: "http://unipma.ac.id/images/logo.png" };

  const logout = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={Background}
          style={styles.imgBg}
          resizeMode="cover"
        >
          <View style={{ marginTop: sizing.xxl }}>
            <View style={styles.header}>
              <Image source={logo} style={styles.logo} />
              <Text style={styles.SIM}>Sistem Informasi Manajemen</Text>
              <Text style={styles.unipma}>Universitas PGRI Madiun</Text>
            </View>
            <View style={styles.lineHeader} />
            <View style={{ backgroundColor: "#EEEEEE" }}>
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <TouchableOpacity>
                  <View style={styles.headerMenu}>
                    <Text style={styles.headerButton}>Ganti Kata Sandi</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={logout}>
                  <View style={styles.headerMenu}>
                    <Text style={styles.headerButton}>Logout</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.mainContent}>
                <Text style={styles.modul}>DAFTAR MODUL</Text>
                <View>
                  <TouchableOpacity>
                    <View
                      style={[styles.container, { backgroundColor: "#0C1845" }]}
                    >
                      <Text style={styles.contentText}>SIM Akademik</Text>
                      <Image
                        source={Sim}
                        style={[{ height: 40, width: 40 }, styles.mainIcon]}
                      />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Elma")}>
                    <View
                      style={[
                        styles.container,
                        { backgroundColor: "#0C81F6", marginBottom: 30 },
                      ]}
                    >
                      <Text style={styles.contentText}>
                        eLMA (e-Learning unipma)
                      </Text>
                      <Image
                        source={Book}
                        style={[{ width: 45, height: 40 }, styles.mainIcon]}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <Text style={styles.contentAccess}>Akses Cepat</Text>
              <TouchableOpacity>
                <View
                  style={[
                    styles.container,
                    { backgroundColor: "#3D5AF1", marginLeft: sizing.xl },
                  ]}
                >
                  <Text style={styles.contentText}>Sister UNIPMA</Text>
                  <Text style={styles.subContentText}>
                    Sistem Informasi Sumberdaya Terintegrasi Universitas PGRI
                    Madiun
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  imgBg: {
    width: "100%",
    height: "100%",
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
  headerMenu: {
    height: 35,
    width: 130,
    backgroundColor: "#C4C4C4",
    alignItems: "center",
    justifyContent: "center",
    marginTop: sizing.md,
    marginBottom: sizing.lg,
  },
  headerButton: {
    color: "#373232",
    fontSize: 15,
    fontWeight: "bold",
  },
  mainContent: {
    alignItems: "center",
  },
  modul: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: sizing.md,
  },
  container: {
    width: 240,
    height: 100,
    marginTop: 20,
  },
  mainIcon: {
    left: 180,
    top: 10,
  },
  contentText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: sizing.lg,
    marginLeft: sizing.md,
  },
  footer: {
    backgroundColor: "#FFF",
    paddingBottom: sizing.xl,
    marginBottom: sizing.xl,
  },
  contentAccess: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: sizing.xl,
    marginTop: sizing.lg,
  },
  subContentText: {
    marginTop: sizing.md,
    marginLeft: sizing.md,
    color: "#FFF",
  },
});

export default Dashboard;
