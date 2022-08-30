import React from 'react';
import { Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';

const Home = ({ title, onPress, style }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text>Home</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(Home);
