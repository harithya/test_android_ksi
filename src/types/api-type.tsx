import {FileProps} from './component-type';

export interface ProvinceProps {
  id: number;
  name: string;
}

export interface SchoolStateProps {
  type: string;
  name: string;
  address: string;
  postal_code: string;
  province: string;
  district: string;
  phone_number: string;
  email: string;
  facebook: string;
  total_students: string;
  photo: FileProps;
}

export interface SchoolProps {
  id: number;
  type: string;
  name: string;
  address: string;
  postal_code: number;
  district_id: number;
  phone_number: string;
  email: string;
  facebook?: string;
  total_students: number;
  photo: string;
  district_name: string;
  province_name: string;
}
