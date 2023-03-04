import { describe, it, expect } from 'vitest';
import { trim } from './trim'

describe('Testing trim() from `lib` folder', () => {
  it('Expect `React is awesome` to be `react-is-awesome`', () => {
    expect(trim('React is awesome')).toBe('react-is-awesome');
  });

  it('Expect ` 123 45 6 ` to be `123-45-6`', () => {
    expect(trim(' 123 45 6 ')).toBe('123-45-6');
  });
});