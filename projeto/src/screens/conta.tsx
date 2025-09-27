import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './contaStyles';

export default function Fotos({navigation}: any) {
    function navToHome(){
        navigation.navigate('Home');
    }
    function navToPerfil(){
        navigation.navigate('Perfil');
    }
    function navToServicos(){
        navigation.navigate('Servicos');
    }
    function navToFotos(){
        navigation.navigate('Fotos');
    }
   
    return(
        <View style={styles.container}>
            <Image style={styles.foto} source={require('../../assets/nazuna5.png')}></Image>
            
            <Text style={styles.texto}>Então vai continuar sem ;)</Text>
            
            

        </View>
    );
}