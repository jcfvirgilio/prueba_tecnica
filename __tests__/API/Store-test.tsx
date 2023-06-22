import {saveItem} from '../../src/store/store';

describe('Store save item', () => {
  test('renders currency exchange', async () => {
    const key = 'USD';
    const value = 'United states';

    const exchangeResult = await saveItem(key, value);
    expect(exchangeResult).toBe(true);
  });
});
