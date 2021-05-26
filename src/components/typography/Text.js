import {Text as RNText} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import theme from '../../styles/theme';

function Text({align, children, color, size, weight, ...other}) {
  return (
    <RNText
      style={[
        {color: theme.colors[color]},
        {fontSize: theme.textSize[size]},
        {fontWeight: theme.textWeight[weight]},
        {textAlign: align},
      ]}
      {...other}>
      {children}
    </RNText>
  );
}

Text.propTypes = {
  align: PropTypes.oneOf(['left', 'justify']),
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  size: PropTypes.oneOf(Object.keys(theme.textSize)),
  weight: PropTypes.oneOf(Object.keys(theme.textWeight)),
};

Text.defaultProps = {
  align: 'left',
  color: 'accent',
  size: 'normal',
  weight: 'normal',
};

export default Text;
