// app/home.tsx
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuth } from '@/context/AuthContext';
import { useEffect } from 'react';
import { ProtectedScreen } from '@/components/ProtectedScreen';

export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <ProtectedScreen>
      <View style={styles.container}>
        <Text style={styles.text}>🎉 Bienvenido al menú principal</Text>
        <Button title="Cerrar sesión" onPress={logout} />
      </View>
    </ProtectedScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 22,
    marginBottom: 20,
  },
});
