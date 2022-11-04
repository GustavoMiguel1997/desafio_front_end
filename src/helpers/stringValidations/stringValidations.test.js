import normalizeString from './stringValidations';

describe('normalizeString', () => {
  it('should remove all string assents e turn string into lower case', () => {
    const string = 'ÁrVores estão cheias de maçãs';
    const result = normalizeString(string);
    expect(result).toBe('arvores estao cheias de macas');
  });
});
