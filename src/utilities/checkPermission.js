import {PermissionsAndroid, Platform} from 'react-native';

function checkStoragePermission() {
  return new Promise(resolve => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      )
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            resolve(true);
          }
          resolve(null);
        })
        .catch(_e => {
          resolve(null);
        });
    } else {
      resolve(true);
    }
  });
}

export default checkStoragePermission;
