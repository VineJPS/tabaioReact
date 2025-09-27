import React from "react";
import { View, StyleSheet, Pressable, Text, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './HomeStyles';

export default function Home({navigation}: any) {
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
     function navToConta(){
        navigation.navigate('Conta');
    }
   
    return(
        <View style={styles.container}>
            <Image style={styles.foto} source={require('../../assets/nazuna1.jpg')}></Image>
            <Pressable style={styles.botao} onPress={navToPerfil}>
                <Text style={styles.texto}>Perfil</Text>
            </Pressable>
              <Pressable style={styles.botao} onPress={navToServicos}>
                <Text style={styles.texto}>Servicos</Text>
            </Pressable>
             <Pressable style={styles.botao} onPress={navToFotos}>
                <Text style={styles.texto}>Fotos</Text>
            </Pressable>

             
            <Text style={styles.link} onPress={navToConta}>Não Possui conta?</Text>
            

        </View>
    );
}