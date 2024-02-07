import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
    </SafeAreaView>
  )
}

