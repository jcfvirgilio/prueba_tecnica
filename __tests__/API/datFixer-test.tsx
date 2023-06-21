import {dataFixer} from '../../src/API/AllExchange/dataFixer';

describe('spaces before came-case capital letters', () => {
  test('renders currency', async () => {
    const {exchangeRatesResult} = await dataFixer();
    const currencyExists = 'YER' in exchangeRatesResult;
    expect(currencyExists).toBe(true);
  });
});
