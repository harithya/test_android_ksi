import {
  View,
  StyleSheet,
  Modal,
  TouchableNativeFeedback,
  Pressable,
  Text,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {inputStyle} from './Input';
import Label from './Label';
import colors from '../../utils/colors';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {request, PERMISSIONS, RESULTS} from 'react-native-permissions';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {FileProps} from '../../types/component-type';

interface Props {
  label: string;
  required?: boolean;
  onChange?: (res: FileProps) => void;
  error?: string;
}
const ImagePicker: React.FC<Props> = props => {
  const [isVisible, setIsVisible] = useState(false);
  const [uri, setUri] = useState('');
  const {label, required, onChange} = props;

  const handleCamera = async () => {
    try {
      const permission = await request(PERMISSIONS.ANDROID.CAMERA);
      if (permission === RESULTS.GRANTED) {
        const image = await launchCamera({
          mediaType: 'photo',
          quality: 0.5,
        });
        if (image.assets) {
          setUri(image.assets[0].uri ?? '');
          onChange &&
            onChange({
              uri: image.assets[0].uri ?? '',
              name: image.assets[0].fileName ?? '',
              type: image.assets[0].type ?? '',
            });
        }
      } else {
        ToastAndroid.show('Camera permission required', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('Error: ' + error, ToastAndroid.SHORT);
    }
    setIsVisible(false);
  };

  const handleGallery = async () => {
    try {
      const image = await launchImageLibrary({
        mediaType: 'photo',
        quality: 0.5,
      });
      if (image.assets) {
        setUri(image.assets[0].uri ?? '');
        onChange &&
          onChange({
            uri: image.assets[0].uri ?? '',
            name: image.assets[0].fileName ?? '',
            type: image.assets[0].type ?? '',
          });
      }
    } catch (error) {
      ToastAndroid.show('Error: ' + error, ToastAndroid.SHORT);
    }
    setIsVisible(false);
  };

  return (
    <View>
      {label && <Label required={required}>{label}</Label>}
      <TouchableNativeFeedback onPress={() => setIsVisible(true)}>
        <View
          style={[
            styles.picker,
            props.error ? inputStyle.errorInput : undefined,
          ]}>
          {!uri ? (
            <Image
              source={require('../../assets/placehoder.png')}
              resizeMode="contain"
              style={styles.image}
            />
          ) : (
            <Image
              source={{uri: uri}}
              resizeMode="contain"
              style={styles.image}
            />
          )}
        </View>
      </TouchableNativeFeedback>
      {props.error && <Text style={inputStyle.errorLabel}>{props.error}</Text>}
      <Modal
        animationType="fade"
        visible={isVisible}
        hardwareAccelerated={true}
        statusBarTranslucent
        style={{backgroundColor: colors['warning-800']}}
        transparent>
        <Pressable style={styles.backdoof} onPress={() => setIsVisible(false)}>
          <View style={styles.modal}>
            <TouchableOpacity onPress={handleGallery} style={styles.option}>
              <Icon name="image" size={45} color={colors.gray} />
              <Text>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCamera} style={styles.option}>
              <Icon name="camera" size={45} color={colors.gray} />
              <Text>Camera</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  picker: {
    ...inputStyle.input,
    height: 150,
  },
  modal: {
    height: 150,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  backdoof: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ImagePicker;
