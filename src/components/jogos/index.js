import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Jogos({ titulo, valor, imagem}) {
    return{
        <TouchableOpacity style={estilo.containerJogos}>
        <Image
            style={estilo.images}
            source={require('../../imagens/${imagem}')}
        />    
    }
}