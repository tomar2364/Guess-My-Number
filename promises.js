"use strict";
const f1 = () => {
  return "1";
};
const f2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2");
    }, 2000);
  });
};
const f3 = () => {
  return "3";
};
let callme = async () => {
  console.log(f1());
  console.log(f2());
  console.log(f3());
};
callme();
