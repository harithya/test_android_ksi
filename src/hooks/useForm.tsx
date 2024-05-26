import {useState} from 'react';
import {FileProps} from '../types/component-type';
import axios, {AxiosError} from 'axios';
import {ToastAndroid} from 'react-native';

const useForm = <T,>(param: {
  initialState: T;
  handleAction: Function;
  onSuccess?: Function;
  onError?: Function;
}) => {
  const {initialState, handleAction, onSuccess, onError} = param;
  const [formState, setFormState] = useState<T>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  type ErrorStateProps = {
    [key: string]: string;
  };
  const initialStateError: ErrorStateProps = {};
  const [errorState, setErrorState] =
    useState<ErrorStateProps>(initialStateError);

  const handleChangeValue = (
    key: string,
    value: string | number | FileProps,
  ) => {
    setFormState({...formState, [key]: value});
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      setErrorState(initialStateError);
      const req = await handleAction(formState);
      ToastAndroid.show(req.data.message, ToastAndroid.SHORT);
      onSuccess ? onSuccess() : null;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const err = error as AxiosError;
        if (err.response?.status === 422) {
          setErrorState((err.response?.data as any).errors);
        } else {
          ToastAndroid.show(
            'Terjadi kesalahan pada server',
            ToastAndroid.SHORT,
          );
        }
        onError?.();
      } else {
        ToastAndroid.show('Terjadi kesalahan', ToastAndroid.SHORT);

        onError?.();
      }
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formState,
    handleChangeValue,
    handleSubmit,
    isLoading,
    errorState,
  };
};

export default useForm;
