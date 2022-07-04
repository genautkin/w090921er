const message = "new Message"; 

const printer = require('./modules/print');

const returnValue = printer.print(message);
printer.printTwoVariable("messageA","Message B");

