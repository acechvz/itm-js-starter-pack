const { playground } = require('../01-vars-and-types');

describe('Vars & Types', () => {
  it('should not throw an error', () => {
    const { foo } = playground();
    expect(foo).not.toBeNaN();
    expect(typeof foo).toEqual('number');
    expect(foo).toEqual(10);
  });
});
