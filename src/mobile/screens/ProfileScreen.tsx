import { StyleSheet, View, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native';
import { supabase } from '@/integrations/supabase/client';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type ProfileScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Profile'>;

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erreur', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informations personnelles</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Nom</Text>
          <Text style={styles.value}>John Doe</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>john@example.com</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Rôle</Text>
          <Text style={styles.value}>Agent</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Se déconnecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  label: {
    color: '#666',
  },
  value: {
    fontWeight: '500',
  },
  logoutButton: {
    backgroundColor: '#ff3b30',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
