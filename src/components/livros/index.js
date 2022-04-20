import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image} from "react-native";

export default function Livros({ titulo, autor, valor, imagem}) {
    return(
        <TouchableOpacity style={estilo.containerLivros}>
        <Image
            style={estilo.images}
            source={require(`../../imagens/${imagem}`)}
        />
        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.autor}>{autor}</Text>
        <Text style={estilo.valor}>{valor}</Text>
        </TouchableOpacity>
        
    );
}
const estilo = StyleSheet.create({
    containerLivros: {
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 20,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-between",
        width: 120,
        height: 250,
        marginLeft: 8,
    },
    titulo: {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",
        textAling: "center",
    },
    valor: {
        color: "green",
        fontSize: 12,
        marginLeft: 29,
        marginTop: 5,
        fontWeight: "bold",
    },
    images: {
        width: "100%",
        height: 150,
        borderRadius: 3,
    },
    autor: {
        color: "grey",
        fontSize: 12,
        fontWeight: "bold",
        marginTop: 5,
        textAling: "center",
    },
});