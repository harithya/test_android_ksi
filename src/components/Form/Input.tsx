import {View, TextInput, TextInputProps, StyleSheet, Text} from 'react-native';
import React from 'react';
import Label from './Label';
import colors from '../../utils/colors';

interface Props extends TextInputProps {
  label?: string;
  required?: boolean;
  error?: string;
}
const Input: React.FC<Props> = props => {
  const {label, required, error} = props;
  return (
    <View>
      {label && <Label required={required}>{label}</Label>}
      <TextInput
        style={[inputStyle.input, error ? inputStyle.errorInput : undefined]}
        placeholderTextColor={'#a4a4a4'}
        {...props}
      />
      {error && <Text style={inputStyle.errorLabel}>{error}</Text>}
    </View>
  );
};

export const inputStyle = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingHorizontal: 20,
    borderColor: '#f2f2f2',
    borderRadius: 5,
    backgroundColor: '#f2f2f2',
  },
  errorInput: {
    borderColor: colors['danger-500'],
  },
  errorLabel: {
    color: colors['danger-500'],
    fontSize: 12,
  },
});
export default Input;
