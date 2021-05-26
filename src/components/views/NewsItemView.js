import {Image, TouchableWithoutFeedback, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';

import Text from '../typography/Text';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  imageViewWrapper: {
    backgroundColor: theme.colors.light,
    borderRadius: 8,
    margin: 16,
    padding: 16,
  },
  newsImage: {
    borderWidth: 1,
    height: 140,
    marginBottom: 16,
    resizeMode: 'cover',
    width: '100%',
  },
});

function NewsItemView({newsData}) {
  const {description} = newsData;
  const navigation = useNavigation();

  const handleNewsNavigation = () => {
    navigation.navigate('News', {
      data: newsData,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleNewsNavigation}>
      <View style={styles.imageViewWrapper}>
        <Image
          source={{uri: 'https://picsum.photos/id/50/300/150'}}
          style={styles.newsImage}
        />
        <Text align="justify" numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

NewsItemView.propTypes = {
  newsData: PropTypes.object.isRequired,
};

export default NewsItemView;
