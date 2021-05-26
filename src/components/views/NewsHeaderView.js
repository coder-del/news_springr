import PropTypes from 'prop-types';
import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

import checkPermission from '../../utilities/checkPermission';
import Row from '../layout/Row';
import saveFile from '../../utilities/saveFile';
import shareExternal from '../../utilities/shareExternal';
import Text from '../typography/Text';
import theme from '../../styles/theme';

import {downloadIcon, shareIcon} from '../../assets';

const styles = StyleSheet.create({
  downloadIconWrapper: {
    backgroundColor: theme.colors.light,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    position: 'absolute',
    right: 8,
    top: 8,
  },
  downloadIcon: {
    width: 24,
    height: 18,
    resizeMode: 'contain',
  },
  textButtonStyle: {
    borderWidth: 1,
    padding: 4,
  },
  newsImage: {
    height: 200,
    marginBottom: 16,
    resizeMode: 'cover',
    width: '100%',
  },
  shareTextWrapper: {
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  shareIcon: {
    height: 20,
    width: 20,
  },
});

function NewsHeaderView({newsItem}) {
  const {description, name} = newsItem;
  const url = 'https://picsum.photos/id/50/300/150';

  const handleImageDownload = async () => {
    const permission = await checkPermission();
    if (permission) {
      saveFile(url, name, 'jpg');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: url}} style={styles.newsImage} />
      <View style={styles.title}>
        <Text align="justify" size="large" weight="bold">
          {description}
        </Text>
      </View>
      <Row style={styles.shareTextWrapper}>
        <Text color="grey">{name}</Text>
        <TouchableWithoutFeedback onPress={() => shareExternal(description)}>
          <Image source={shareIcon} style={styles.shareIcon} />
        </TouchableWithoutFeedback>
        <Text color="grey">{'6 July ,2020'}</Text>
      </Row>
      <View style={styles.downloadIconWrapper}>
        <TouchableWithoutFeedback onPress={handleImageDownload}>
          <Image source={downloadIcon} style={styles.downloadIcon} />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

NewsHeaderView.propTypes = {
  newsItem: PropTypes.object.isRequired,
};

export default NewsHeaderView;
