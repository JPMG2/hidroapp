import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';

export function ProtectedScreen({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  const [hasTriedRedirecting, setHasTriedRedirecting] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && !hasTriedRedirecting) {
      setHasTriedRedirecting(true);
      setTimeout(() => {
        router.replace('/');
      }, 10);
    }
  }, [isAuthenticated, hasTriedRedirecting]);
  if (!isAuthenticated) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return children;
}
