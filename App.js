import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Galeriagatos from './componentes/Galeriagatos';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Galeria gatitos V2</Text>
      <ScrollView>
      <Galeriagatos nombre='Gato Negro'
        imagen={require('./imagenes/gatonegro.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Blanco'
        imagen={require('./imagenes/gatoblanco.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Serio'
        imagen={require('./imagenes/gatoserio.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Triste'
        imagen={require('./imagenes/gatotriste.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Ataque'
        imagen={require('./imagenes/gatoataque.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Admirado'
        imagen={require('./imagenes/gatoadmirado.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Furioso'
        imagen={require('./imagenes/gatofurioso.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Aburrido'
        imagen={require('./imagenes/gatoaburrido.jpg')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Jugueton'
        imagen={require('./imagenes/gatojugueton.webp')}
      ></Galeriagatos>
      <Galeriagatos
        nombre='Gato Chiquito'
        imagen={require('./imagenes/gatochiquito.jpg')}
      ></Galeriagatos>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    marginTop:40,
  fontSize:20,
  fontWeight:'bold',
  textDecorationLine: 'underline', color:'blue',
  }
});
