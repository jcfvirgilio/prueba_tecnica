import React from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

export const HistorialCurrency = navigation => {
  const ptData = [
    {value: 280, date: '11 Apr 2022'},
    {value: 260, date: '12 Apr 2022'},
    {value: 340, date: '13 Apr 2022'},
    {value: 385, date: '14 Apr 2022'},
    {value: 280, date: '15 Apr 2022'},
    {value: 390, date: '16 Apr 2022'},

    {value: 370, date: '17 Apr 2022'},
    {value: 285, date: '18 Apr 2022'},
    {value: 295, date: '19 Apr 2022'},

    {value: 280, date: '21 Apr 2022'},
    {value: 295, date: '22 Apr 2022'},
    {value: 260, date: '23 Apr 2022'},
    {value: 255, date: '24 Apr 2022'},

    {value: 190, date: '25 Apr 2022'},
    {value: 220, date: '26 Apr 2022'},
    {value: 205, date: '27 Apr 2022'},
    {value: 230, date: '28 Apr 2022'},
    {
      value: 210,
      date: '29 Apr 2022',
      label: '29 Apr',
      labelTextStyle: {color: 'lightgray', width: 60},
    },

    {value: 240, date: '1 May 2022'},
    {value: 250, date: '2 May 2022'},
    {value: 280, date: '3 May 2022'},
    {value: 250, date: '4 May 2022'},
    {value: 210, date: '5 May 2022'},
  ];
  return (
    <View
      style={{
        paddingVertical: 100,
        paddingLeft: 20,
        backgroundColor: '#1C1C1C',
      }}>
      <Text
        style={{
          color: 'white',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        {navigation.route.params.name.title}
      </Text>
      <LineChart
        areaChart
        data={ptData}
        rotateLabel
        width={300}
        hideDataPoints
        spacing={10}
        color="#00ff83"
        thickness={2}
        startFillColor="rgba(20,105,81,0.3)"
        endFillColor="rgba(20,85,81,0.01)"
        startOpacity={0.9}
        endOpacity={0.2}
        initialSpacing={0}
        noOfSections={6}
        stepHeight={50}
        height={300}
        maxValue={600}
        yAxisColor="white"
        yAxisThickness={0}
        rulesType="solid"
        rulesColor="gray"
        yAxisTextStyle={{color: 'gray'}}
        yAxisTextNumberOfLines={2}
        xAxisColor="lightgray"
        pointerConfig={{
          pointerStripHeight: 160,
          pointerStripColor: 'lightgray',
          pointerStripWidth: 2,
          pointerColor: 'lightgray',
          radius: 6,
          pointerLabelWidth: 100,
          pointerLabelHeight: 90,
          pointerLabelComponent: items => {
            return (
              <View>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 6,
                    textAlign: 'center',
                  }}>
                  {items[0].date}
                </Text>

                <View
                  style={{
                    backgroundColor: 'white',
                  }}>
                  <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
                    {'$' + items[0].value + '.0'}
                  </Text>
                </View>
              </View>
            );
          },
        }}
      />
    </View>
  );
};
