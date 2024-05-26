import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import React from 'react';
import {PageProps} from '../types/navigation-type';
import DetailLayout from '../components/Layout/DetailLayout';
import {BASE_URL} from '../utils/constant';

const DetailPage: React.FC<PageProps<'Detail'>> = ({route}) => {
  const param = route.params;

  const data = {
    'Nama Sekolah': param.name,
    'Tipe Sekolah': param.type,
    Alamat: param.address,
    'Kode Pos': param.postal_code,
    Provinsi: param.province_name,
    'Kota / Kabupaten': param.district_name,
    'No Telp': param.phone_number,
    Email: param.email,
    Facebook: param.facebook ?? '-',
    'Jumlah Siswa': param.total_students,
  };

  return (
    <DetailLayout title="Detail">
      <ScrollView>
        <Image
          source={{uri: BASE_URL + '/storage/schools/' + param.photo}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.container}>
          {Object.entries(data).map(([key, value]) => (
            <View style={styles.item} key={key}>
              <Text style={styles.title}>{key}</Text>
              <Text>{value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 20,
  },
  item: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontWeight: '700',
    width: 150,
  },
  image: {
    width: '100%',
    height: 220,
  },
});

export default DetailPage;
