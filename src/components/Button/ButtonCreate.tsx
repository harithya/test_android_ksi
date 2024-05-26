import {View} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import Button, {ButtonProps} from '.';

const ButtonCreate: React.FC<ButtonProps> = ({children, onPress}) => {
  return (
    <View style={styles.position}>
      <Button onPress={onPress} icon="plus" style={styles.button}>
        {children}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
  },
  position: {
    position: 'absolute',
    bottom: 24,
    right: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ButtonCreate;
