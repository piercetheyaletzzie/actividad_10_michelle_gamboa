import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';


export default function App() {
  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22,
     backgroundColor: '#c8eddc',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    title: {
      fontSize:25,
      fontFamily: 'Cambria',
      height: 55,
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personas que lloran mucho</Text>
      <FlatList
      data={
        [
          {key: 'Roberto'},
          {key: 'Saul'},
          {key: 'Damaris'},
          {key: 'Ricardo'},
          {key: 'Omar'},
          {key: 'Brayan'},
          {key: 'Dylan'},
          {key: 'Maria'},
          {key: 'Sam'},
          {key: 'Fernanda'},
          {key: 'Vanesa'}
        ]
      }
      renderItem={({item}) => <Text style={styles.item}>- {item.key}</Text>}
      />
      <StatusBar style="auto" />
    </View>
  );
}
