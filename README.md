# nextjs-with-jest-ts-jest

A very simple example of Next.js-based website with `jest` and `ts-jest`

## Install

```sh
$ yarn install
```

## Test

```sh
$ yarn test
```

## Project config explanation

- `jest.config.js`: use `ts-jest` to test TypeScript files; use mocks for imported CSS/SCSS files; use TypeScript compiler to handle both TS/JS files
- `jest.setup.js`: use `enzyme` to test with [jQuery-like APIs](https://github.com/airbnb/enzyme#readme)
- `tsconfig.spec.json`: allow JavaScript files (e.g., `jest.setup.js`) during the test

## Reference

https://github.com/arcatdmz/nextjs-with-jest-typescript
