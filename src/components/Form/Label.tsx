import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface LabelProps {
  children?: React.ReactNode;
  required?: boolean;
}
const Label: React.FC<LabelProps> = ({children, required}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.label}>{children}</Text>
      {required && <Text style={styles.required}>*</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  required: {
    fontSize: 14,
    color: 'red',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default Label;
