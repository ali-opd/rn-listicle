import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import Button from '../../../components/Button';

import { styles } from './style';

const Splash = ({ navigation }) => {
  const onSignUp = () => {
    console.log('clicked');
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require('../../../assets/splash_image.png')}
      />

      <View style={styles.titleContainer}>
        <Text style={styles.title}>You'll Find</Text>
        <Text style={[styles.title, styles.innerTitle]}>All you need</Text>
        <Text style={styles.title}>here</Text>
      </View>

      <Button title="Sign up" onPress={onSignUp} />

      <Pressable hitSlop={20} onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.signInText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Splash;
