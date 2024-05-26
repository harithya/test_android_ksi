import useSWR from 'swr';
import http from '../lib/http';
import {ProvinceProps} from '../types/api-type';

const useProvince = () => {
  const {data, isLoading} = useSWR<ProvinceProps[]>(
    '/province',
    async (url: string) => {
      const req = await http.get(url);
      return req.data.result;
    },
  );

  return {
    data,
    isLoading,
  };
};

export default useProvince;
