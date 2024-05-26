import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils/colors';
import {useSearch} from '../../store/searchStore';

const SearchBar: React.FC = () => {
  const [keyword, setKeyword] = useSearch(state => [
    state.keyword,
    state.setKeyword,
  ]);
  return (
    <View style={styles.searchbar}>
      <Icon name="magnify" color={colors.font} size={24} />
      <TextInput
        placeholder="Mau cari apa nich ?"
        style={styles.textInput}
        value={keyword}
        onChangeText={setKeyword}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchbar: {
    backgroundColor: 'white',
    borderRadius: 50,
    marginHorizontal: 24,
    marginBottom: 5,
    marginTop: -30,
    paddingVertical: 3,
    paddingHorizontal: 16,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  textInput: {
    // fontSize: 16,
    width: '100%',
  },
});

export default SearchBar;
