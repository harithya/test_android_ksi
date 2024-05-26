import {StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import HomeLayout from '../components/Layout/HomeLayout';
import ReportItem from '../components/Report/ReportItem';
import useSchool from '../hooks/useSchool';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import {useSearch} from '../store/searchStore';

const HomePage: React.FC = () => {
  const keyword = useSearch(state => state.keyword);
  const {data, isLoading} = useSchool(keyword);

  return (
    <HomeLayout>
      {isLoading && <Loading />}
      {data?.length === 0 && <Empty />}
      <ScrollView contentContainerStyle={styles.container}>
        {data?.map((school, index) => (
          <ReportItem key={index} {...school} />
        ))}
      </ScrollView>
    </HomeLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
});

export default HomePage;
