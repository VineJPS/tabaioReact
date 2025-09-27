import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './fotosStyles';

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
            <Image style={styles.foto} source={require('../../assets/nazuna4.jpg')}></Image>
            <Pressable style={styles.botao} onPress={navToHome}>
                <Text style={styles.texto}>Home</Text>
            </Pressable>
            <Pressable style={styles.botao} onPress={navToPerfil}>
                <Text style={styles.texto}>Perfil</Text>
            </Pressable>
              <Pressable style={styles.botao} onPress={navToServicos}>
                <Text style={styles.texto}>Servicos</Text>
            </Pressable>

        </View>
    );
}