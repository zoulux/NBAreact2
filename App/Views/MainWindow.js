/* eslint-disable semi, space-before-function-paren, space-before-blocks*/
console.disableYellowBox = true;
import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Platform
} from 'react-native';

import ScrollableTabView, {
    DefaultTabBar
} from 'react-native-scrollable-tab-view';

import ScoresPage from './ScoresPage';
import StandingsPage from './StandingsPage';
import Date from '../Components/Date';

class MainWindow extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          hidden={Platform.OS === 'android' ? true : false}
          backgroundColor='#FF5722'
          barStyle='light-content'
        />
        <Date />
        <ScrollableTabView
          renderTabBar={() => <DefaultTabBar style={styles.tabBar2} />}
          tabBarActiveTextColor='#FFFFFF'
          tabBarInactiveTextColor='#e5e5e5'
          tabBarUnderlineColor='#FFCCBC'
        >
          <ScoresPage tabLabel='Scores我是列表' />
          <StandingsPage tabLabel='Standings我是啥呢' />
        </ScrollableTabView>
      </View>
    )
  }
};

var styles = StyleSheet.create({
  tabBar2: {
    backgroundColor: '#E64A19'
  }
});

module.exports = MainWindow;
/* eslint-enable semi, space-before-function-paren, space-before-blocks*/
