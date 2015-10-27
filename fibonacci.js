var fibonacci = {};
fibonacci.numbers = [0, 1];
fibonacci.generate = function (elementNum) {
    var i = 0,
        tempNumber;
    i = this.numbers.length;
    for (; i <= elementNum; i++) {
        tempNumber = this.numbers[i - 1] + this.numbers[i - 2];
        this.numbers.push(tempNumber);
    }
};
fibonacci.getElement = function (index) {
    this.temp = index - 1;
    if (this.numbers[this.temp] !== undefined) {
        return this.numbers[this.temp];
    } else {
        this.generate(index);
        return this.numbers[this.temp];
    }

};