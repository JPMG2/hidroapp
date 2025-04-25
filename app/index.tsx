import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import color from '@/styles/color';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function IndexScreen() {
  const { isAuthenticated, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/home');
    }
  }, [isAuthenticated]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Logo_blanco.png')} style={styles.image} />
      <Text style={styles.title}>Bienvenido</Text>

      <TextInput
        placeholder={'Correos'}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <TextInput
        placeholder={'Contraseña'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login(email, password);
        }}
      >
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
