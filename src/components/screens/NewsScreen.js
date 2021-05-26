import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';

import HeaderBar from '../bars/HeaderBar';
import NewsHeaderView from '../views/NewsHeaderView';
import Text from '../typography/Text';
import theme from '../../styles/theme';

const content =
  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.\n\nThe point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.\n\nMany desktop publishing packages and webpage editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: theme.colors.light,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
});

function NewsScreen({navigation, route}) {
  navigation.setOptions({
    header: () => <HeaderBar title="News" size="extraLarge" goBack />,
  });
  const item = route.params.data;

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <NewsHeaderView newsItem={item} />
      <Text size="medium">{content}</Text>
    </ScrollView>
  );
}

export default NewsScreen;
