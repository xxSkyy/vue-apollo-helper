# Vue-Apollo V4 Helper

[![npm](https://img.shields.io/npm/v/@xxskyy/vue-apollo-helper.svg)](https://www.npmjs.com/package/@xxskyy/vue-apollo-helper)
[![npm type definitions](https://img.shields.io/npm/types/@xxskyy/vue-apollo-helper.svg)](https://www.npmjs.com/package/@xxskyy/vue-apollo-helper)

It's small library to make your Vue-apollo experince smoother and less complicated.

## Features

### Watch Result

Fix for known from a long time [issue](https://github.com/vuejs/apollo/issues/1154) that causing cached results don't call onResult function.

### example:

```js
const { result } = useQuery(query)

watchResult(result, (result) => {
  // Will always be called, even on cached queries
  console.log(result)
})
```

### Async Result

Function that returns result from query as `Promise` , helpful with actually in experimental state `Suspense` feature and removing overhead from simple async functions.

### example:

```js
const { result } = useQuery(query)

const result = await asyncResult(result)
```
