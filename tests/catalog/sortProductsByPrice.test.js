const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const direction = 'asc';
    const result = sortProductsByPrice(products, direction);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]', () => {
    const result = sortProductsByPrice(products);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const direction = 'asc';
    const targetIds = [1, 3, 4];
    const prod = targetIds.map(id => products.find(product => product.id === id))
    const result = sortProductsByPrice(prod, direction);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const direction = 'desc';
    const result = sortProductsByPrice(products, direction);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const direction = 'desc';
    const targetIds = [3, 1, 4];
    const prod = targetIds.map(id => products.find(product => product.id === id))
    const result = sortProductsByPrice(prod, direction);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const direction = 'desc';
    const targetIds = [5, 2, 6];
    const prod = targetIds.map(id => products.find(product => product.id === id))
    const result = sortProductsByPrice(prod, direction);
    const ids = result.map(product => product.id);
    expect(ids).toEqual([2, 5, 6]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const direction = 'asc';
    const targetIds = [1, 3, 4];
    const prod = targetIds.map(id => products.find(product => product.id === id))
    const result = sortProductsByPrice(prod, direction);
    const ids = prod.map(product => product.id);
    expect(ids).toEqual([1, 3, 4]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const direction = 'desc';
    const targetIds = [1, 3, 4];
    const prod = targetIds.map(id => products.find(product => product.id === id))
    const result = sortProductsByPrice(prod, direction);
    const ids = prod.map(product => product.id);
    expect(ids).toEqual([1, 3, 4]);
  });
  test('направление по умолчанию не меняет исходный массив всех товаров', () => {
    const result = sortProductsByPrice(products);
    const ids = products.map(product => product.id);
    expect(ids).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
