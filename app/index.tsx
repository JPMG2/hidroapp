import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import color from './styles/color';

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Logo_blanco.png')} style={styles.image} />
      <Text style={styles.title}>Bienvenido</Text>

      <TextInput placeholder={'Correo'} style={styles.input} />
      <TextInput placeholder={'Contraseña'} secureTextEntry={true} style={styles.input} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 110,
  },
  image: {
    width: 200,
    height: 150,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: color.darkText,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
  },
  button: {
    backgroundColor: color.primary,
    padding: 6,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: color.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
