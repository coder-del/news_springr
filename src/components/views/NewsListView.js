import PropTypes from 'prop-types';
import React from 'react';
import {FlatList, StyleSheet} from 'react-native';

import NewsItemView from './NewsItemView';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  listViewWrap: {
    backgroundColor: theme.colors.green,
  },
});

function NewsListView({news}) {
  return (
    <FlatList
      data={news}
      renderItem={({item}) => <NewsItemView newsData={item} />}
      keyExtractor={item => item.id}
      contentContainerStyle={styles.listViewWrap}
    />
  );
}

NewsListView.propTypes = {
  news: PropTypes.array,
};

NewsListView.defaultProps = {
  news: [],
};

export default NewsListView;
