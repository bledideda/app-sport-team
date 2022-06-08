import { Dimensions, Platform } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const platform = Platform.OS;
const DeviceInfo = {
    windowWidth,
    windowHeight,
    platform,
}
export default DeviceInfo;