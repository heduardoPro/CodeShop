import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { styles } from './styles';

export default function Profile() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  )
}