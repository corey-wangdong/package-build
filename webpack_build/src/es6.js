const decorator = (target, key, descriptor) => {
  console.log('target----', target);
  console.log('key----', key);
  console.log('descriptor----', descriptor);
  target[key] = function (...args) {
    console.log(`目前的名字是${this.name}`);
    return descriptor.vale.apply(this, args)
  }
}

export default class Person {
  name = 'corey';
  age = '25';
  // @decorator;
  changeName = (name) => {
    console.log(`之前名字是:${this.name},现在名字是${name}`);
  }

  changeAge = (age) => {
    console.log(`之前名字是:${this.age},现在名字是${age}`);
  }
}