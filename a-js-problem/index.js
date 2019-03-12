const List = (value, next) => f => f(value, next);
const Nil = (_, f) => f();
const Append = (newValue, list) => list((value, next) => List(value, Append(newValue, next)), _ => List(newValue, Nil))

const range = (start, end) => List(start, start < end ? range(start + 1, end) : Nil);
const map = (list, f) => list((value, next) => List(f(value), map(next, f)), _ => Nil);
const reverse = list => list((value, next) => Append(value, reverse(next)), _ => Nil);
const foreach = (list, f) => list((value, next) => (foreach(next, f, f(value))), _ => Nil);

// Converts List to js Array. Helper for debugging 
const toJsArray = list => list((head, tail) => [head].concat(toJsArray(tail)), _ => []);

var numbers = range(1, 10);
numbers = map(numbers, n => n * n);
numbers = reverse(numbers);
foreach(numbers, console.log);
