import keyWordUtil from "./keyWordUtil";

const article1 = {_id: '1', keyword: 'bird'};
const article2 = {_id: '2', keyword: 'cat'};
const article3 = {_id: '3', keyword: 'dog'};
const article4 = {_id: '4', keyword: 'cat'};

describe('keyWordUtil', () => {
  test('should return only distinct keywords', () => {
    expect(keyWordUtil([article2, article4])).toStrictEqual(['cat']);
  });

  test('should return distinct keywords sorted by number of occurences', () => {
    expect(keyWordUtil([article1, article2, article3, article4])).toStrictEqual(['cat', 'bird', 'dog']);
  });

})

