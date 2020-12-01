import CategoryService from './category.service';

const categoryService = new CategoryService();
// eslint-disable-next-line no-undef
describe('GET - Category Service', () => {
  // eslint-disable-next-line no-undef
  test('Probando metodo index', () => {
    const expeted = 'Hola Service';
    const result = categoryService.index();

    // eslint-disable-next-line no-undef
    expect(result).toStrictEqual(expeted);
  });
});
