////// 1 ///////

function reverse(s) {
  let o = ``;
  for (let i = s.length - 1; i >= 0; i--) o += s[i];
  console.log(o);
}

reverse(`string`);

////// 2 ///////

function reverse(s) {
  let o = [];
  for (let i = s.length - 1, j = 0; i >= 0; i--, j++) o[j] = s[i];
  console.log(o.join(``));
}
reverse(`string`);

////// 3 ///////

function reverse(s) {
  let o = [];
  for (let i = 0, len = s.length; i <= len; i++) o.push(s.charAt(len - i));
  console.log(o.join(``));
}
reverse(`string`);

////// 4 ///////

function reverse(s) {
  console.log(s.split(``).reverse().join(``));
}
reverse(`string`);

////// 5 ///////

function reverse(s) {
  let i = s.length,
    o = ``;
  while (i > 0) {
    o += s.substring(i - 1, i);
    i--;
  }
  console.log(o);
}
reverse(`string`);

////// 6 ///////

function reverse(s) {
  let o = ``;
  for (let i = s.length - 1; i >= 0; o += s[i--]) {}
  console.log(o);
}
reverse(`string`);

////// 7 ///////

function reverse(s) {
  return s === "" ? "" : reverse(s.substr(1)) + s.charAt(0);
}
reverse(`string`);

////// 8 ///////

function reverse(s) {
  s = s.split(``);
  let len = s.length,
    halfIndex = Math.floor(len / 2) - 1,
    tmp;
  for (let i = 0; i <= halfIndex; i++) {
    tmp = s[len - i - 1];
    s[len - i - 1] = s[i];
    s[i] = tmp;
  }
  console.log(s.join(``));
}

reverse(`string`);

////// 9 ///////

function reverse(s) {
  if (s.length < 2) return s;
  let halfIndex = Math.ceil(s.length / 2);
  return reverse(s.substr(halfIndex)) + reverse(s.substr(0, halfIndex));
}
reverse(`string`);

////// 10 ///////

function reverse(str) {
  let string = str.split(``);
  for (i = 0; i < string.length; i++) {
    string.splice(i, 0, string.pop());
  }
  console.log(string.join());
}
reverse(`string`);
