import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { styles } from './style';

const Checkbox = ({ checked, onCheck }) => {
  return (
    <TouchableOpacity
      onPress={() => onCheck(!checked)}
      style={styles.container}>
      {checked ? (
        <View style={styles.innerContainer}>
          <Image
            style={styles.checkIcon}
            source={require('../../assets/check.png')}
          />
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default React.memo(Checkbox);
