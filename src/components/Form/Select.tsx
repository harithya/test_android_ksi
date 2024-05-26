import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Picker, PickerProps} from '@react-native-picker/picker';
import {inputStyle} from './Input';
import Label from './Label';

interface ItemProps {
  label: string;
  value: string | number;
}
interface Props extends PickerProps {
  label?: string;
  placeholder?: string;
  items: ItemProps[] | undefined;
  required?: boolean;
  isLoading?: boolean;
  error?: string;
}
const Select: React.FC<Props> = props => {
  const {label, placeholder, required, items, isLoading, error} = props;
  return (
    <View>
      {label && <Label required={required}>{label}</Label>}
      <View style={[style.input, error ? inputStyle.errorInput : undefined]}>
        <Picker style={style.picker} {...props}>
          {placeholder && (
            <Picker.Item
              style={style.placeholder}
              label={isLoading ? 'Loading...' : placeholder}
              value=""
            />
          )}
          {items?.map((item, index) => (
            <Picker.Item
              key={index}
              style={style.item}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
      {error && <Text style={inputStyle.errorLabel}>{error}</Text>}
    </View>
  );
};

const style = StyleSheet.create({
  picker: {
    paddingVertical: 0,
    margin: 0,
    borderWidth: 1,
    fontSize: 14,
  },
  input: {
    ...inputStyle.input,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  item: {
    fontSize: 14,
  },
  placeholder: {
    fontSize: 14,
    color: '#a4a4a4',
  },
});

export default Select;
