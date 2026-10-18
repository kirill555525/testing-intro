const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const query = 'Наушники'
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([1])
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const query = 'Чистый код'
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([6])
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const query = 'Настольная лампа'
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([4])
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const query = 'javascript'
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([3])
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const query = 'ЧЕХОЛ'
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([5])
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const query = 'наушники'
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([1])
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = ''
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6])
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '   '
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6])
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const query = '\t\n'
    const result = searchProducts(products, query);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6])
  });
});
