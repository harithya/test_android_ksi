import useSWR from 'swr';
import http from '../lib/http';
import {SchoolProps, SchoolStateProps} from '../types/api-type';

const useSchool = (keyword?: string) => {
  const {data, isLoading, mutate} = useSWR<SchoolProps[]>(
    '/school?search=' + keyword,
    async (url: string) => {
      const req = await http.get(url);
      return req.data.result;
    },
  );

  const createSchool = async (store: SchoolStateProps) => {
    const formData = new FormData();
    formData.append('type', store.type);
    formData.append('name', store.name);
    formData.append('address', store.address);
    formData.append('postal_code', store.postal_code);
    formData.append('province', store.province);
    formData.append('district', store.district);
    formData.append('phone_number', store.phone_number.replace(/[^0-9]/g, ''));
    formData.append('email', store.email);
    formData.append('facebook', store.facebook);
    formData.append('total_students', store.total_students);

    if (store.photo.uri !== '') {
      formData.append('photo', {
        uri: store.photo.uri,
        type: 'image/jpg',
        name: store.photo.name,
      });
    }

    const req = await http.post('/school', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return req;
  };

  return {
    data,
    isLoading,
    createSchool,
    mutate,
  };
};

export default useSchool;
