import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors['primary-500']} />
      <Text style={styles.text}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginTop: 10,
    color: colors['primary-500'],
  },
});

export default Loading;
