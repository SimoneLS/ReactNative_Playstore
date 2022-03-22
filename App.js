
import { StyleSheet, Text, View } from "react-native";
import Botao from "./src/components/botao";
import Cabecalho from "./src/components/cabecalho";


export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho></Cabecalho>
      <Botao
        Logo="game-controller"
        texto="Jogos"
        cor="purple"
        Logo2="book-outline"
        texto2="Livros"
        cor2="turquoise"
        />
        <Botao
        Logo= "videocam"
        texto= "Filmes"
        cor= "blue"
        Logo2= "ios-musical-notes"
        texto2= "Música"
        cor2= "dodgerblue"
        />
        <Botao
        Logo= "logo-android"
        texto= "Apps"
        cor= "slateblue"
        Logo2= "bookmark"
        texto2= "Favoritos"
        cor2= "darkblue"
      />

     </View>
  );
}