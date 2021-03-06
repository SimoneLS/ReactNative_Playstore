
import { FlatList, StyleSheet, Text, View } from "react-native";
import Botao from "./src/components/botao";
import Cabecalho from "./src/components/cabecalho";
import Jogos from "./src/components/jogos";
import Dados from "./dados/Jogos";
import Destaques from "./src/components/destaques";
import Banner from "./dados/Destaques";
import Livros from "./src/components/livros";
import Capas from "./dados/Livros";
import Filmes from "./src/components/filmes";
import Cenas from "./dados/Filmes";

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
        marginLeft:15,
        fontSize:20,
        marginTop:25,}}
        >Jogos em Destaques </Text>

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
        marginLeft:15,
        fontSize:20,
        marginTop:25,}}
        >Jogos em lançamento</Text>

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
        <Text style={{color:'black',
        marginLeft:15,
        fontSize:20,
        marginTop:25,}}
        >Livros em Destaque</Text>

      <FlatList
        horizontal={true}
        data = {Capas}
        keyExtractor= {(item) => item.id}
        renderItem = { ({item}) => (
          <Livros
            titulo = {item.nome}
            autor = {item.autor}
            imagem = {item.imagem}
            valor = {item.valor}
          />
        )}
      />
        <Text style={{color:'black',
        marginLeft:15,
        fontSize:20,
        marginTop:25,}}
        >Filmes em Destaque</Text>

      <FlatList
        horizontal={true}
        data = {Cenas}
        keyExtractor= {(item) => item.id}
        renderItem = { ({item}) => (
          <Filmes
            titulo = {item.nome}
            imagem = {item.imagem}
            legenda = {item.legenda}
          />
        )}
     />


    </View>
  );
}
 
