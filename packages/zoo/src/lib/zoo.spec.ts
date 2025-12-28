import { zoo } from './zoo.js';

describe('zoo', () => {
  it('should return animal sound', () => {
    const result = zoo();
    expect(result).toMatch(/^(cow|pig|sheep) says (moo|oink|baa)!$/);
  });
});
