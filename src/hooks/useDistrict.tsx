import useSWR from 'swr';
import http from '../lib/http';
import {ProvinceProps} from '../types/api-type';

const useDistrict = (id: number | string) => {
  const {data, isLoading} = useSWR<ProvinceProps[]>(
    '/district/' + id,
    async (url: string) => {
      if (!id || id === '') {
        return [];
      }
      const req = await http.get(url);
      return req.data.result;
    },
  );

  return {
    data,
    isLoading,
  };
};

export default useDistrict;
