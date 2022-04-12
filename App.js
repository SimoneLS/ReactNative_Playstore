
import { FlatList, StyleSheet, Text, View } from "react-native";
import Botao from "./src/components/botao";
import Cabecalho from "./src/components/cabecalho";
import Jogos from "./src/components/jogos";
import Dados from "./dados/Jogos";
import Destaques from "./src/components/destaques";
import Banner from "./dados/Destaques";

export default function App() {
  return (
    <View style={{backgroundColor:'#D3D3D3', flex:1}}>
      <Cabecalho> </Cabecalho>
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
       <Text style={{color:'black',
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold'}}
        >Jogos em Destaques</Text>

      <FlatList
        horizontal={true}
        data = {Dados}
        keyExtractor= {(item) => item.id}
        renderItem = { ({item}) => (
          <Jogos
            titulo = {item.nome}
            imagem = {item.imagem}
            valor = {item.valor}
          />
        )}
      />
        <Text style={{color:'black',
        marginLeft:20,
        fontSize:20,
        fontWeight:'bold'}}
        >Em lançamento!</Text>

      <FlatList
        horizontal={true}
        data = {Banner}
        keyExtractor= {(item) => item.id}
        renderItem = { ({item}) => (
          <Destaques
            titulo = {item.nome}
            imagem = {item.imagem}
            legenda = {item.legenda}
          />
        )}
     />
      

    </View>
  );
}
 
