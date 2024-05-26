import {View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';
import React from 'react';
import colors from '../../utils/colors';
import {SchoolProps} from '../../types/api-type';
import {useNavigation} from '@react-navigation/native';
import {useNavigationProps} from '../../types/navigation-type';

const ReportItem: React.FC<SchoolProps> = props => {
  const {name, email, total_students} = props;
  const navigation = useNavigation<useNavigationProps>();

  return (
    <TouchableNativeFeedback
      onPress={() => navigation.navigate('Detail', props)}>
      <View style={styles.card}>
        <View style={styles.icon} />
        <View style={styles.body}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.footer}>
            <Text style={styles.subtitle}>{email}</Text>
            <Text style={styles.subtitle}>{total_students} Orang</Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 15,
    width: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: colors['primary-500'],
    borderRadius: 10,
  },
  body: {
    flex: 1,
  },
  card: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'white',
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    //shadow
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 5,
    // shadow radius
  },

  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: 'black',
  },
  subtitle: {
    fontSize: 13,
    color: colors.gray,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // width: '100%',
  },
});

export default ReportItem;
