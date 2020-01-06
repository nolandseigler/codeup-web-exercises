const test = function () {
    console.log('Function declaration.');
};

const testArrow = () => {
    console.log('Function Arrow')
};

const oneParamArrow = param => {
 console.log(`One param Arrow: ${param}`);
};

const oneParamOneLineArrow = param => console.log(`This doesn't have to be returned: ${param}`);

const multiParamMulitLine = (param1, param2) => {
    console.log(`Line 1: ${param1}`);
    console.log(`Line 2: ${param2}`);
};

const restParamArrow = (num, num2, ...thisIsARestParam) => {
    console.log(num);
    console.log(thisIsARestParam);
};

test();
testArrow();
oneParamArrow('Arrow');
oneParamOneLineArrow('One line arrow');
multiParamMulitLine('Param 1', 'Param 2');
restParamArrow(10, 20, 'Lots', 'Of', 'Params');
