## Функциция mapSeq

Принимает любой Iterable объект и Iterable с функциями.
Возвращает итератор, где каждому элементу левого Iterable псоледовательно применяются все функции из правого

```js
console.log(...mapSeq([1, 2, 3], [(el) => el * 2, (el) => el - 1])); // [1, 3, 5]
```