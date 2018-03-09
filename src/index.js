var counter=1;
class SmartCalculator {
  constructor(initialValue) {
    // your implementation
      this.value = [];
      this.value.push(initialValue);
      counter=1;
      return this;
  }

  add(number) {
    // your implementation
      this.value.push('+', number);
      counter=1;
      return this;
  }
  
  subtract(number) {
    // your implementation
      this.value.push('-', number);
      counter=1;
      return this;
  }

  multiply(number) {
    // your implementation
      this.value.push('*', number);
      counter=1;
      return this;
  }

  devide(number) {
    // your implementation
      this.value.push('/', number);
      counter=1;
      return this;
  }

  pow(number) {
    // your implementation
      this.value[this.value.length - counter] = 'Math.pow(' + this.value[this.value.length - counter] + ', ';
      this.value.splice(this.value.length - counter + 1);
      this.value.push(number);
      for(let i = 0; i < counter; i++) {
          this.value.push(')');
      }
      counter++;

      return this;
  }


  valueOf(){
  return eval(this.value.join(''));
  }
}

module.exports = SmartCalculator;
