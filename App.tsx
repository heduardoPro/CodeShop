import { StatusBar } from 'react-native';
import { SafeAreaView, StyleSheet  } from 'react-native';
import Router from './src/routes';

import { theme } from './src/theme';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Router />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.GRAY,
  },
});
