import React, {useState, useEffect} from 'react';
import {ItemExchange} from '../ItemExchange/ItemExchange';
import {dataFixer} from '../../API/dataFixer';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

export const ExchangeRate: React.FC<ExchangeRateProps> = () => {
  const [lastUpdated, setLastUpdated] = useState();
  const [data, setData] = useState([
    {currency: 0.213396, title: 'AED * JC'},
    {currency: 4.985961, title: 'AFN'},
    {currency: 5.716159, title: 'ALL'},
    {currency: 22.450423, title: 'AMD'},
    {currency: 0.104827, title: 'ANG'},
    {currency: 43.691352, title: 'AOA'},
    {currency: 14.485339, title: 'ARS'},
    {currency: 0.08558, title: 'AUD'},
    {currency: 0.104726, title: 'AWG'},
    {currency: 0.098578, title: 'AZN'},
    {currency: 0.104102, title: 'BAM'},
    {currency: 0.117443, title: 'BBD'},
    {currency: 6.294652, title: 'BDT'},
    {currency: 0.104107, title: 'BGN'},
    {currency: 0.021901, title: 'BHD'},
    {currency: 164.327026, title: 'BIF'},
    {currency: 0.0581, title: 'BMD'},
    {currency: 0.0781, title: 'BND'},
    {currency: 0.401957, title: 'BOB'},
    {currency: 0.278335, title: 'BRL'},
    {currency: 0.05812, title: 'BSD'},
    {currency: 0.00000201792, title: 'BTC'},
    {currency: 4.77633, title: 'BTN'},
    {currency: 0.770887, title: 'BWP'},
    {currency: 0.146815, title: 'BYN'},
    {currency: 1138.763567, title: 'BYR'},
    {currency: 0.117246, title: 'BZD'},
    {currency: 0.076794, title: 'CAD'},
    {currency: 138.568943, title: 'CDF'},
    {currency: 0.052215, title: 'CHF'},
    {currency: 0.00169, title: 'CLF'},
    {currency: 46.621322, title: 'CLP'},
    {currency: 0.417917, title: 'CNY'},
    {currency: 241.10704, title: 'COP'},
    {currency: 31.423053, title: 'CRC'},
    {currency: 0.0581, title: 'CUC'},
    {currency: 1.539655, title: 'CUP'},
    {currency: 5.868619, title: 'CVE'},
    {currency: 1.265166, title: 'CZK'},
    {currency: 10.356195, title: 'DJF'},
    {currency: 0.396575, title: 'DKK'},
    {currency: 3.197658, title: 'DOP'},
    {currency: 7.891981, title: 'DZD'},
    {currency: 1.795359, title: 'EGP'},
    {currency: 0.871503, title: 'ERN'},
    {currency: 3.196433, title: 'ETB'},
    {currency: 0.053244, title: 'EUR'},
    {currency: 0.128459, title: 'FJD'},
    {currency: 0.045632, title: 'FKP'},
    {currency: 0.045531, title: 'GBP'},
    {currency: 0.15135, title: 'GEL'},
    {currency: 0.045632, title: 'GGP'},
    {currency: 0.660206, title: 'GHS'},
    {currency: 0.045632, title: 'GIP'},
    {currency: 3.453148, title: 'GMD'},
    {currency: 500.139617, title: 'GNF'},
    {currency: 0.455395, title: 'GTQ'},
    {currency: 12.302491, title: 'GYD'},
    {currency: 0.454677, title: 'HKD'},
    {currency: 1.432027, title: 'HNL'},
    {currency: 0.405313, title: 'HRK'},
    {currency: 8.085156, title: 'HTG'},
    {currency: 19.807369, title: 'HUF'},
    {currency: 869.974695, title: 'IDR'},
    {currency: 0.210411, title: 'ILS'},
    {currency: 0.045632, title: 'IMP'},
    {currency: 4.768259, title: 'INR'},
    {currency: 76.138761, title: 'IQD'},
    {currency: 2454.732675, title: 'IRR'},
    {currency: 7.917308, title: 'ISK'},
    {currency: 0.045632, title: 'JEP'},
    {currency: 9.0155, title: 'JMD'},
    {currency: 0.041245, title: 'JOD'},
    {currency: 8.237299, title: 'JPY'},
    {currency: 8.145688, title: 'KES'},
    {currency: 5.074528, title: 'KGS'},
    {currency: 239.983988, title: 'KHR'},
    {currency: 26.252551, title: 'KMF'},
    {currency: 52.289293, title: 'KPW'},
    {currency: 75.106977, title: 'KRW'},
    {currency: 0.017845, title: 'KWD'},
    {currency: 0.048472, title: 'KYD'},
    {currency: 26.097419, title: 'KZT'},
    {currency: 1106.596632, title: 'LAK'},
    {currency: 873.047516, title: 'LBP'},
    {currency: 17.915997, title: 'LKR'},
    {currency: 10.260331, title: 'LRD'},
    {currency: 1.067893, title: 'LSL'},
    {currency: 0.171555, title: 'LTL'},
    {currency: 0.035144, title: 'LVL'},
    {currency: 0.278783, title: 'LYD'},
    {currency: 0.582338, title: 'MAD'},
    {currency: 1.042354, title: 'MDL'},
    {currency: 263.721592, title: 'MGA'},
    {currency: 3.279596, title: 'MKD'},
    {currency: 122.146979, title: 'MMK'},
    {currency: 200.978293, title: 'MNT'},
    {currency: 0.468846, title: 'MOP'},
    {currency: 20.741755, title: 'MRO'},
    {currency: 2.638344, title: 'MUR'},
    {currency: 0.892129, title: 'MVR'},
    {currency: 59.700607, title: 'MWK'},
    {currency: 1, title: 'MXN'},
    {currency: 0.270109, title: 'MYR'},
    {currency: 3.674863, title: 'MZN'},
    {currency: 1.067871, title: 'NAD'},
    {currency: 40.163487, title: 'NGN'},
    {currency: 2.127336, title: 'NIO'},
    {currency: 0.623186, title: 'NOK'},
    {currency: 7.641859, title: 'NPR'},
    {currency: 0.094022, title: 'NZD'},
    {currency: 0.022366, title: 'OMR'},
    {currency: 0.058165, title: 'PAB'},
    {currency: 0.211035, title: 'PEN'},
    {currency: 0.209806, title: 'PGK'},
    {currency: 3.229964, title: 'PHP'},
    {currency: 16.699126, title: 'PKR'},
    {currency: 0.236575, title: 'PLN'},
    {currency: 420.996528, title: 'PYG'},
    {currency: 0.211545, title: 'QAR'},
    {currency: 0.264275, title: 'RON'},
    {currency: 6.243736, title: 'RSD'},
    {currency: 4.907136, title: 'RUB'},
    {currency: 66.715442, title: 'RWF'},
    {currency: 0.217922, title: 'SAR'},
    {currency: 0.484225, title: 'SBD'},
    {currency: 0.778037, title: 'SCR'},
    {currency: 34.947232, title: 'SDG'},
    {currency: 0.627135, title: 'SEK'},
    {currency: 0.078058, title: 'SGD'},
    {currency: 0.070693, title: 'SHP'},
    {currency: 1.30793, title: 'SLE'},
    {currency: 1147.478602, title: 'SLL'},
    {currency: 33.03015, title: 'SOS'},
    {currency: 2.184701, title: 'SRD'},
    {currency: 1202.556463, title: 'STD'},
    {currency: 0.50894, title: 'SVC'},
    {currency: 145.97431, title: 'SYP'},
    {currency: 1.059193, title: 'SZL'},
    {currency: 2.023163, title: 'THB'},
    {currency: 0.635176, title: 'TJS'},
    {currency: 0.203932, title: 'TMT'},
    {currency: 0.179412, title: 'TND'},
    {currency: 0.136588, title: 'TOP'},
    {currency: 1.371559, title: 'TRY'},
    {currency: 0.394289, title: 'TTD'},
    {currency: 1.798276, title: 'TWD'},
    {currency: 138.743227, title: 'TZS'},
    {currency: 2.148125, title: 'UAH'},
    {currency: 215.562379, title: 'UGX'},
    {currency: 0.0581, title: 'USD'},
    {currency: 2.219464, title: 'UYU'},
    {currency: 668.343702, title: 'UZS'},
    {currency: 154003.480236, title: 'VEF'},
    {currency: 1.581501, title: 'VES'},
    {currency: 1366.806781, title: 'VND'},
    {currency: 6.839192, title: 'VUV'},
    {currency: 0.157108, title: 'WST'},
    {currency: 34.912215, title: 'XAF'},
    {currency: 0.002512, title: 'XAG'},
    {currency: 0.0000299995, title: 'XAU'},
    {currency: 0.157019, title: 'XCD'},
    {currency: 0.043377, title: 'XDR'},
    {currency: 34.912055, title: 'XOF'},
    {currency: 6.370684, title: 'XPF'},
    {currency: 14.545378, title: 'YER'},
    {currency: 1.068774, title: 'ZAR'},
    {currency: 522.971099, title: 'ZMK'},
    {currency: 1.013532, title: 'ZMW'},
    {currency: 18.708235, title: 'ZWL'},
  ]);

  useEffect(() => {
    // getData();
  }, []);

  const Separator = () => <View style={styles.separator} />;

  const getData = async () => {
    const {exchangeRatesResult, dateResult} = await dataFixer();
    setLastUpdated(dateResult);
    setData(
      Object.entries(exchangeRatesResult).map(([title, currency]) => ({
        title,
        currency,
      })),
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.itemContainerLasUpdated}>
        <Text>Última actualización: {lastUpdated}</Text>
        <TouchableOpacity style={styles.appButtonContainer}>
          <Text style={styles.appButtonText}>Actualizar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.itemHeader}>
        <Text style={styles.itemTextTitle}>Moneda</Text>
        <Text style={styles.itemTextTitle}>Tipo de Cambio</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return <ItemExchange title={item.title} currency={item.currency} />;
        }}
        keyExtractor={item => item.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    marginBottom: 25,
  },
  itemContainerLasUpdated: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemTextTitle: {
    fontSize: 15,
    fontWeight: '800',
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
