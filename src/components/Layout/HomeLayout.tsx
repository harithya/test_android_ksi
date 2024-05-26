import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import colors from '../../utils/colors';
import SearchBar from '../SearchBar';
import ButtonCreate from '../Button/ButtonCreate';
import {useNavigation} from '@react-navigation/native';
import {UseNavigationProps} from '../../types/navigation-type';

const HomeLayout: React.FC<PropsWithChildren> = ({children}) => {
  const navigation = useNavigation<UseNavigationProps>();
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors['primary-500']}
        barStyle="light-content"
      />
      <View style={styles.hero}>
        <Text style={styles.subtitle}>Selamat Datang</Text>
        <Text style={styles.title}>Harithya Wisesa</Text>
        <View style={styles.bubble1} />
        <View style={styles.bubble2} />
      </View>
      <SearchBar />
      <View style={styles.content}>{children}</View>
      <ButtonCreate onPress={() => navigation.navigate('Create')}>
        Tambah Data
      </ButtonCreate>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  content: {
    flex: 1,
  },
  hero: {
    height: 180,
    padding: 24,
    position: 'relative',
    gap: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: colors['primary-500'],
  },
  title: {
    fontSize: 28,
    color: colors.white,
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 16,
    color: colors.white,
  },
  bubble1: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 100,
    top: -0,
    right: -30,
  },
  bubble2: {
    position: 'absolute',
    width: 200,
    height: 200,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 150,
    bottom: -50,
    right: -20,
  },
});

export default HomeLayout;
