import {StyleSheet, ScrollView, View} from 'react-native';
import React from 'react';
import {PageProps} from '../types/navigation-type';
import DetailLayout from '../components/Layout/DetailLayout';
import Input from '../components/Form/Input';
import Select from '../components/Form/Select';
import {useMaskedInputProps} from 'react-native-mask-input';
import {PHONE_MASK} from '../utils/constant';
import ImagePicker from '../components/Form/ImagePicker';
import Button from '../components/Button';
import colors from '../utils/colors';
import useProvince from '../hooks/useProvince';
import useDistrict from '../hooks/useDistrict';
import useForm from '../hooks/useForm';
import {SchoolStateProps} from '../types/api-type';
import useSchool from '../hooks/useSchool';
import {useSWRConfig} from 'swr';

const CreatePage: React.FC<PageProps<'Create'>> = ({navigation}) => {
  const {createSchool} = useSchool();
  const {mutate} = useSWRConfig();
  const {formState, handleChangeValue, handleSubmit, isLoading, errorState} =
    useForm<SchoolStateProps>({
      initialState: {
        type: '',
        name: '',
        address: '',
        postal_code: '',
        province: '',
        district: '',
        phone_number: '',
        email: '',
        facebook: '',
        total_students: '',
        photo: {uri: '', type: '', name: ''},
      },
      handleAction: () => createSchool(formState),
      onSuccess: async () => {
        await mutate('/school?search=');
        navigation.goBack();
      },
    });

  const maskedInputProps = useMaskedInputProps({
    value: formState.phone_number,
    onChangeText: (value: any) => handleChangeValue('phone_number', value),
    mask: PHONE_MASK,
  });

  const province = useProvince();
  const district = useDistrict(formState.province);

  return (
    <DetailLayout title="Tambah">
      <ScrollView contentContainerStyle={styles.container}>
        <Select
          label="Tipe Sekolah"
          placeholder="Pilih Tipe Sekolah"
          required
          items={[
            {label: 'Negeri', value: 'negeri'},
            {label: 'Swasta', value: 'swasta'},
          ]}
          selectedValue={formState.type}
          onValueChange={value => handleChangeValue('type', value)}
          error={errorState.type}
        />
        <Input
          label="Nama Sekolah"
          placeholder="Contoh : SMK 2 Tasikmalaya"
          required
          value={formState.name}
          onChangeText={value => handleChangeValue('name', value)}
          error={errorState.name}
        />
        <Input
          label="Alamat"
          required
          value={formState.address}
          onChangeText={value => handleChangeValue('address', value)}
          error={errorState.address}
        />
        <Input
          label="Kode Pos"
          required
          keyboardType="numeric"
          maxLength={5}
          value={formState.postal_code}
          onChangeText={value => handleChangeValue('postal_code', value)}
          error={errorState.postal_code}
        />
        <Select
          label="Provinsi"
          placeholder="Pilih Provinsi"
          required
          isLoading={province.isLoading}
          items={province.data?.map(item => {
            return {label: item.name, value: item.id};
          })}
          selectedValue={formState.province}
          onValueChange={value => {
            handleChangeValue('province', value);
            if (formState.district !== '') {
              handleChangeValue('district', '');
            }
          }}
          error={errorState.province}
        />
        <Select
          label="Kota / Kabupaten"
          placeholder="Pilih Kota / Kabupaten"
          required
          isLoading={district.isLoading}
          items={district.data?.map(item => {
            return {label: item.name, value: item.id};
          })}
          selectedValue={formState.district}
          onValueChange={value => handleChangeValue('district', value)}
          error={errorState.district}
        />
        <Input
          label="No Telpon Sekolah"
          required
          {...maskedInputProps}
          keyboardType="phone-pad"
          error={errorState.phone_number}
        />
        <Input
          label="Email Sekolah"
          required
          keyboardType="email-address"
          value={formState.email}
          onChangeText={value => handleChangeValue('email', value)}
          error={errorState.email}
        />
        <Input
          label="Facebook"
          value={formState.facebook}
          onChangeText={value => handleChangeValue('facebook', value)}
          error={errorState.facebook}
        />
        <Input
          label="Jumlah Siswa"
          required
          keyboardType="numeric"
          value={formState.total_students}
          onChangeText={value => handleChangeValue('total_students', value)}
          error={errorState.total_students}
        />
        <ImagePicker
          label="Foto Sekolah"
          required
          onChange={value => handleChangeValue('photo', value)}
          error={errorState.photo}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Button onPress={handleSubmit} isLoading={isLoading}>
          Simpan Perubahan
        </Button>
      </View>
    </DetailLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    gap: 15,
    paddingBottom: 50,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 14,
    backgroundColor: colors.white,
    // shadow top
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpadistrict: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: -20,
  },
});

export default CreatePage;
