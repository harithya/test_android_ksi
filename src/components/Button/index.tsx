import {
  View,
  Text,
  TouchableNativeFeedback,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface ButtonProps {
  children: React.ReactNode;
  onPress?: () => void;
  icon?: string;
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = props => {
  const {children, onPress, icon, style, isLoading} = props;
  return (
    <TouchableNativeFeedback onPress={onPress} disabled={isLoading}>
      <View
        style={[
          styles.button,
          isLoading ? styles.isLoading : undefined,
          style,
        ]}>
        {icon && <Icon name={icon} color={colors.white} size={24} />}
        <Text style={styles.text}>{isLoading ? 'Loading ...' : children}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors['primary-500'],
    width: 'auto',
    paddingVertical: 15,
    paddingHorizontal: 28,
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  isLoading: {
    backgroundColor: colors['primary-300'],
  },
});

export default Button;
