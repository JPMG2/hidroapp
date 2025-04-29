import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import color from '@/styles/color';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '@/context/AuthContext';

export default function IndexScreen() {
  const { isAuthenticated, isChecking, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const router = useRouter();

  useEffect(() => {
    if (!isChecking && isAuthenticated) {
      router.replace('/home');
    }
  }, [isAuthenticated, isChecking]);

  const handleLogin = () => {
    const newErrors: { [key: string]: string } = {};

    if (!email) {
      newErrors.email = 'El correo es obligatorio';
    }

    if (!password) {
      newErrors.password = 'La contraseña es obligatoria';
    }

    setErrors(newErrors);

    // Si hay errores, no continuar
    if (Object.keys(newErrors).length > 0) return;

    login(email, password);
  };

  if (isChecking) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingRow}>
          <ActivityIndicator size="small" color="#87CEEB" />
          <Text style={styles.loadingTitle}>Cargando...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/Logo_blanco.png')} style={styles.image} />
      <Text style={styles.title}>Bienvenido</Text>

      <TextInput
        placeholder={'Correo'}
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        placeholder={'Contraseña'}
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        style={styles.input}
      />
      {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
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
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loadingTitle: {
    marginLeft: 10,
    fontSize: 22,
    color: '#87CEEB',
  },
  input: {
    width: '100%',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#f1f1f1',
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 13,
    marginBottom: 10,
    alignSelf: 'flex-start',
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
