function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  return function func1() {};
}

function returnsAnAnonymousFunction() {
  return function () {};
}
