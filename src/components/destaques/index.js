import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Destaques({ titulo, legenda, imagem}) {
    return(
        <TouchableOpacity style={estilo.containerDestaques}>
        <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />
        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.legenda}>{legenda}</Text>
        </TouchableOpacity>
        
    );
}
const estilo = StyleSheet.create({
    containerDestaques: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 8,
        marginBottom: 15,
        padding: 15,
        margin: 10,
        alignItems: "center",
        justifyContent: "space-between",
        width: 360,
        height: 250,
        marginLeft: 2,
    },
    titulo: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
    },
    legenda: {
        color: "green",
        fontSize: 15,
        marginLeft: 200,
        marginTop: 5,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: 170,
        borderRadius: 3,
    },
});