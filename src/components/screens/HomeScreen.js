import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useLazyAxios} from 'use-axios-client';
import Config from 'react-native-config';
import React, {useEffect} from 'react';

import axiosInstance from '../../utilities/axios';
import HeaderBar from '../bars/HeaderBar';
import NewsListView from '../views/NewsListView';
import Text from '../typography/Text';
import theme from '../../styles/theme';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
function HomeScreen({navigation}) {
  navigation.setOptions({
    header: () => <HeaderBar title="News" size="extraLarge" />,
  });

  const [getNews, {data, error, loading}] = useLazyAxios({
    url: `sources?apiKey=${Config.API_KEY}`,
    axiosInstance,
  });

  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={theme.colors.green} />
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Ops! Something went wrong!</Text>
      </View>
    );
  }
  return <NewsListView news={data?.sources} />;
}

export default HomeScreen;
