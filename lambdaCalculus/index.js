const compose = f => g => a => f(g(a)) 
//const succ = num => fn => a => fn(num(fn)(a));
const succ = num => fn => compose(fn)(num(fn));

const zero = fn => x => x;
const one = succ(zero);
const two = fn => x => fn(fn(x));
const three = succ(two);
const four = succ(three);

const True = a => b => a;
const False = a => b => b;

// const add = left => right => fn => x => left(fn)(right(fn)(x));
const add = left => right => right(succ)(left);
//const mult = left => right => fn => x => left(right(fn))(x);
const mult = compose;

const not = bool => a => b => bool(b)(a);
// const and = l => r => a => b => l(r(a)(b))(l(a)(b))
const and = l => r => l(r)(l)
const or = (l, r) => a => b => l(l(a)(b))(r(a)(b))

const Pair = (first, second) => fn => fn(first, second);
const First = pair => pair((first, second) => first);
const Second = pair => pair((first, second) => second);

const List = (head, tail) => fn => fn(head, tail);
const Nil = (_, fn) => fn()
const concat = (first, second) => first((head, tail) => List(head, concat(tail, second)), _ => second);



//tests

const toNumber = num => num(acc => acc + 1)(0);
const toBoolean = bool => bool(true)(false);
const toArray = list => list((head, tail) => [head].concat(toArray(tail)), _ => []);

console.log(toNumber(one));
console.log(toNumber(add(two)(three)));
console.log(toNumber(mult(two)(three)));
console.log('=== booleans ===');
console.log(toBoolean(not(True)));
console.log(toBoolean(and(True)(True)));

console.log(Second(Pair(1, 2)));
const list1 = List(1, List(2, List(3, Nil)));
const list2 = List(4, List(5, List(6, Nil)));
console.log(toArray(list1));
console.log(toArray(concat(list1, list2)));
