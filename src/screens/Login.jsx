import React, { useState } from 'react'
import LoginImage from "../images/login.jpg";
import { Image, Text , TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import { colores, styles } from '../theme/theme';
import axios from "axios";

const initialState ={
    matricula:'',
    password:'',
}
const Login = () => {
    const [datos, setDatos] = useState(initialState);
    const {matricula, password}= datos;
    const LOGIN_IMAGE = Image.resolveAssetSource (LoginImage).uri;
    const handleChange = (nom, valor) => {
        setDatos({...datos, [nom]:valor});
      }
    const handleSubmit = ()=>{
  axios
    .post('http://172.20.100.220:5000/alumnos/acceder', datos)
    .then(function (response) {
    // handle success
    console.log(response.data);
    })
    .catch(function (error) {
    // handle error
    console.log(error);
    })
    .finally(function () {
     ToastAndroid.show('hecho', ToastAndroid.SHORT)
    });
     
    }
  return (
    <View style ={styles.login_container}>
    <Image
      source={{uri: LOGIN_IMAGE}}
      style={styles.login_image}
      />
      <Text style={styles.login_texto}>Introduce tu matricula y contraseña </Text>
      <TextInput
      placeholder ='Matricula'
      placeholderTextColor ={colores.ocho}
      textAlign ='center'
      style={styles.login_input}
      value={matricula}
      onChangeText={valor => handleChange('matricula', valor)}
      />
       <TextInput
      placeholder ='Contraseña'
      placeholderTextColor ={colores.ocho}
      textAlign ='center'
      style={styles.login_input}
      secureTextEntry={true}
      value={password}
      onChangeText={valor => handleChange('password', valor)}
      />
      <TouchableOpacity
        style={{
        flex:1}}
        onPress={handleSubmit}
        
      >
        <View style={styles.login_boton}>
            <Text style={styles.login_boton_texto}>Ingresar</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

export default Login;
