import {currencyExchange} from '../../src/API/CurrencyExchange/CurrencyExchange';

describe('spaces before came-case capital letters', () => {
  test('renders currency exchange', async () => {
    const from = 'USD';
    const to = 'MXN';
    const amount = 1;

    const exchangeResult = await currencyExchange(from, to, amount);
    expect(exchangeResult.success).toBe(true);
  });
});
