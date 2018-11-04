console.log(1);

function* generator(i)  {
    yield i + 1;
    yield i + 2;
}

const gen = generator(32);
console.log(gen.value);
console.log(gen.next());

console.log(gen.next());
console.log(gen.next());

