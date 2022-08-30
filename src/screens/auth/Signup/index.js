import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import AuthHeader from '../../../components/AuthHeader';
import Button from '../../../components/Button';
import Checkbox from '../../../components/Checkbox';
import GoogleLogin from '../../../components/GoogleLogin';
import Input from '../../../components/Input';
import Separator from '../../../components/Separator';

import { styles } from './styles';

const Signup = ({ navigation }) => {
  const [checked, setIsChecked] = useState(true);

  const onSignIn = () => {
    navigation.navigate('Signin');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <AuthHeader title="Sign Up" onBackPress={() => navigation.goBack()} />
        <Input label="Name" placeHolder="John Doe" />
        <Input label="Email" placeHolder="example@gmail.com" />
        <Input isPassword label="Password" placeHolder="******" />

        <View style={styles.agreeRow}>
          <Checkbox checked={checked} onCheck={setIsChecked} />
          <Text style={styles.agreeText}>
            I agree with <Text style={styles.agreeTextBold}>Terms</Text> &{' '}
            <Text style={styles.agreeTextBold}>Privacy</Text>
          </Text>
        </View>
        <Button style={styles.button} title="Sign Up" />

        <Separator text="Or sign up with" />

        <GoogleLogin />

        <Text style={styles.footerText}>
          Already have an account?
          <Text onPress={onSignIn} style={styles.footerLink}>
            {' '}
            Sign In
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
