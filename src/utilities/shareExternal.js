import {Share} from 'react-native';

const shareExternal = async content => {
  try {
    const result = await Share.share({
      message: content,
    });

    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    // error
  }
};

export default shareExternal;
