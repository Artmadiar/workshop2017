Promises
---
 
Work with promises.

Work by article:
https://habrahabr.ru/company/mailru/blog/269465/
 
function somePromiseAPI() {
  return Promise.resolve()
    .then(function () {
      doSomethingThatMayThrow();
      return 'foo';
    })
    .then(/* ... */);
}