import React, { useState } from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';
import { TextInput, Checkbox, Button } from 'react-native-paper';
import Constants from 'expo-constants';
import { sizing } from '../../utils/style';
import Background from '../../../assets/Background.jpg';

const Login = ({ navigation }) => {
  const logo = { uri: 'http://unipma.ac.id/images/logo.png' };
  const [checked, setChecked] = useState(false);
  const [user, setUser] = useState(null);
  const [pass, setPass] = useState(null);

  const onPress = () => {
    if (user === '123' && pass === '123') {
      setUser('');
      setPass('');
      navigation.navigate('Dashboard')
    } else {
      alert('login gagal');
      setUser('');
      setPass('');
    }
  };

  return (
    <View>
      <ImageBackground
        source={Background}
        style={styles.imgBg}
        resizeMode="cover">
        <View style={styles.primaryBg}>
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.SIM}>Sistem Informasi Manajemen</Text>
            <Text style={styles.unipma}>Universitas PGRI Madiun</Text>
          </View>
          <View style={styles.lineHeader} />
          <View style={styles.mainForm}>
            <View style={{ alignItems: 'center' }}>
              <TextInput
                value={user}
                onChangeText={(value) => setUser(value)}
                style={[styles.form, { marginTop: sizing.lg }]}
                label="Akun Pengguna"
                mode="outlined"
                activeOutlineColor='white'
                dense={false}
              />
              <TextInput
                value={pass}
                onChangeText={(value) => setPass(value)}
                secureTextEntry={true}
                style={[
                  styles.form,
                  { marginTop: sizing.xl, marginBottom: sizing.xl },
                ]}
                label="Password"
                mode="outlined"
                activeOutlineColor='white'
                dense={false}
              />
            </View>
            <View style={styles.checkbox}>
              <Checkbox
                status={checked ? 'checked' : 'unchecked'}
                onPress={() => setChecked(!checked)}
                color={'#0386FF'}
              />
              <Text style={{ color: '#0386FF' }}>Ingat Saya</Text>
            </View>
          </View>
          <View style={{ backgroundColor: '#FFF', width: 300 }}>
            <Button
              style={styles.btn}
              mode="contained"
              onPress={onPress}
              color={'#0386FF'}>
              Masuk Aplikasi
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
    widht: '100%',
    height: '100%',
    alignItems: 'center',
  },
  primaryBg: {
    marginTop: sizing.xxl,
    alignItems: 'center',
  },
  header: {
    backgroundColor: '#000',
    width: 300,
    alignItems: 'center',
  },
  logo: {
    height: 90,
    width: 90,
    marginVertical: sizing.lg,
  },
  SIM: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: sizing.md,
  },
  unipma: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: sizing.lg,
  },
  lineHeader: {
    backgroundColor: '#FFD705',
    width: 300,
    height: 4,
  },
  mainForm: {
    width: 300,
    backgroundColor: '#C4C4C4',
  },
  form: {
    width: 260,
    height: 35,
    backgroundColor: '#FFF'
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: sizing.md + 5,
    marginBottom: 10,
  },
  btn: {
    width: 260,
    marginTop: sizing.xl,
    marginBottom: sizing.lg,
    alignSelf: 'center',
  },
  forgotPw: {
    color: '#0386FF',
    marginLeft: sizing.lg + 5,
    marginBottom: sizing.lg,
  },
});

export default Login;
