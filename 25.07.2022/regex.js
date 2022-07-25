let text = "0567800539";
let pattern = /((050|052|051|057)|\+972(50|52|51))\d{7}$/;
let result = pattern.test(text);
console.log(result);

const regexp = /([a-z]|\d)+/ig;
const str = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,     remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets        containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const array = [...str.matchAll(regexp)];
console.log(array.forEach(item => console.log(item[0])));
console.log(array.length)
const arr = [1,2,3]
let test = [...arr];
