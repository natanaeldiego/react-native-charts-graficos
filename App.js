/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  AreaChart,
  Grid,
  PieChart,
  BarChart,
  LineChart,
} from 'react-native-svg-charts';
import * as shape from 'd3-shape';

const App = () => {
  const fill = 'rgb(134, 65, 244)';
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7,
    );
  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log('press', index),
      },
      key: `pie-${index}`,
    }));
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Gráficos - Charts</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>AreaChart</Text>
              <AreaChart
                style={{height: 200}}
                data={data}
                contentInset={{top: 30, bottom: 30}}
                curve={shape.curveNatural}
                svg={{fill: 'rgba(134, 65, 244, 0.8)'}}>
                <Grid />
              </AreaChart>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>BarChart</Text>
              <BarChart
                style={{height: 200}}
                data={data}
                svg={{fill}}
                contentInset={{top: 30, bottom: 30}}>
                <Grid />
              </BarChart>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>LineChart</Text>
              <LineChart
                style={{height: 200}}
                data={data}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={{top: 20, bottom: 20}}>
                <Grid />
              </LineChart>
            </View>

            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>PieChart</Text>
              <PieChart style={{height: 200}} data={pieData} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  header: {
    flex: 1,
    backgroundColor: '#fca61c',
    height: 100,
  },
  headerTitle: {
    flex: 1,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
