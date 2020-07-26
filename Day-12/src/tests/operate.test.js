import Big from 'big.js';
import operate from '../logic/operate';

describe('operate', () => {
  it('returns an answer as a String', () => {
    const answer = operate(1, 2, '+');
    expect(typeof answer).toEqual('string');
  });

  it('accepts either strings or numbers as input', () => {
    const answer = operate('42', 15, '%');
    expect(answer).toEqual('12');
  });

  it('throws an error for an improper operation', () => {
    const operation = '*';
    expect(() => {
      operate(4, 90, operation);
    }).toThrowError(`Unknown operation ${operation}`);
  });
});