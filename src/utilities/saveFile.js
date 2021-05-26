import CameraRoll from '@react-native-community/cameraroll';
import RNFetchBlob from 'rn-fetch-blob';
import Toast from 'react-native-root-toast';
import {Platform} from 'react-native';

const showToast = message => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: 120,
  });
};

const saveFile = (sourcePath, title, format) => {
  const {dirs} = RNFetchBlob.fs;
  const dirToSave = Platform.select({
    android: dirs.DownloadDir,
    ios: dirs.DocumentDir,
  });
  const filePath = `${dirToSave}/${title}${Date.now()}.${format}`;

  if (Platform.OS === 'ios') {
    return CameraRoll.save(sourcePath, {tag: 'photo'})
      .then(() => {
        showToast('Image saved successfully to your device');
      })
      .catch(error => {
        showToast('Image not able to save. Check Permission.');
      });
  }

  return RNFetchBlob.config({
    fileCache: true,
    appendExt: format,
    indicator: true,
    path: filePath,
    addAndroidDownloads: {
      path: filePath,
      description: 'Image',
      useDownloadManager: true,
      title,
    },
  })
    .fetch('GET', sourcePath)
    .then(_ => {
      showToast('Image saved successfully to your device');
    })
    .catch(error => {
      showToast('Image not able to save. Check Permission.');
    });
};

export default saveFile;
