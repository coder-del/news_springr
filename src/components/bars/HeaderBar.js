import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import Row from '../layout/Row';
import Text from '../typography/Text';
import theme from '../../styles/theme';

import {backIcon} from '../../assets';

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: theme.colors.light,
    paddingVertical: 8,
  },
  headerContainer: {
    alignItems: 'center',
  },
  backIcon: {
    height: 20,
    width: 20,
  },
  backPress: {
    left: 16,
    position: 'absolute',
  },
});

function HeaderBar({goBack, size, title}) {
  const navigation = useNavigation();

  return (
    <Row style={styles.headerWrapper}>
      {goBack && (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <View style={styles.backPress}>
            <Image source={backIcon} style={styles.backIcon} />
          </View>
        </TouchableWithoutFeedback>
      )}
      <View style={styles.headerContainer}>
        <Text size={size}>{title}</Text>
      </View>
    </Row>
  );
}

HeaderBar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderBar;
