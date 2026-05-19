import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {
  const produtos = [
    {'id' : '1', 'nome' : 'Notebook'},
    {'id' : '2', 'nome' : 'Memoria'},
    {'id' : '3', 'nome' : 'Monitor'},
    {'id' : '4', 'nome' : 'Teclado'},
    {'id' : '5', 'nome' : 'Mouse'},
  ]
  
  return (
    <View style={styles.container}>
      <FlatList  
      data = {produtos}
      keyExtractor={item => item.id}
      renderItem={({item}) => (
        <text>{item.id} - {item.nome}</text>
      )}/>
      <StatusBar style="auto" />
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
});
