class Base {
    constructor(val) {
        this.data = val || 0;
    }
    print() {
        console.log(this.data);
    }
    bonus() {
        this.data += 10;
    }
}

class Il extends Base {
    constructor(val = 0){
        super(val);
    }
    calculate(num) {
        this.data += num - ((num/100)*35);
    }
}

class Usa extends Base {
    calculate(num) {
        this.data += num - ((num/100)*10);
    }
}

class Aus extends Base {
    calculate(num) {
        this.data += num - ((num/100)*35);
    }
    bonus() {
    }
}


const product = new Aus();
product.calculate(100);
product.bonus();
product.print();
const Gennadiy = new Il(100);
const Evgeny = new Il(99999999);
Gennadiy.calculate(100);
Evgeny.calculate(99999999);
Gennadiy.print();
Evgeny.print();