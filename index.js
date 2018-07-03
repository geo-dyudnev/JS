/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isAllTrue(array, fn) {

    try {
        if (array.length == 0 || typeof (array) !== 'object') {
            throw new Error('empty array');
        }
        if (typeof (fn) !== 'function') {
            throw new Error('fn is not a function');
        }
    } catch (e) {
        console.error(e.message);
    }

    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (fn(array[i]) === true) {
            newArr.push(array[i]);
        }
    }

    if (array.length == newArr.length) {
        return true;
    } else {
        return false;
    }
}

var array = [10, 15, 20, 25, 45, 5, 67, 7, 8, 19, 3];
function fn(number) {
    return number > 10;
}

var Result = isAllTrue(array, fn);

/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {

    try {
        if (array.length == 0 || typeof (array) !== 'object') {
            throw new Error('empty array');
        }
        if (typeof (fn) !== 'function') {
            throw new Error('fn is not a function');
        }
    } catch (e) {
        console.error(e.message);
    }

    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        if (fn(array[i]) === true) {
            newArr.push(array[i]);
        }
    }

    if (newArr.length > 0) {
        return true;
    } else {
        return false;
    }
}

var array = [10, 15, 20, 25, 45, 5, 67, 7, 8, 19, 3];
function fn(number) {
    return number > 10;
}

var Result = isSomeTrue(array, fn);

/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
    var Result = [];

    for (var i = 1; i < arguments.length; i++) {
        fn();
    }

    function fn() {
        try {
            if (typeof (arguments[i]) !== 'function') {
                throw new Error('fn is not a function')
            }
        } catch (e) {
            console.error(e.message);
            Result.push(arguments[i]);
        }
        /*return arguments[i];*/
    }

    return Result;
};

var Test = returnBadArguments(fn, 5, 7, 89, 13, function fn2() { return 'hello';});


/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {

    try {                                          //Обрабатываем ошибки
        if (typeof (arguments[0]) !== 'number') {
            throw new Error('number is not a number');
        }
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] == 0) {
                throw new Error('division by 0');
            }
        }
    } catch (e) {
        console.error(e.message);
    }

    if (typeof (arguments[0]) == "undefined") {   //Проверяем number (параметр функции с порядковым номером 0) и задаем значение по умолчанию
        arguments[0] = 0;
    }

    var arg = [];                                 //Делаем из коллекции arguments нормальный массив
    for (var i = 0; i < arguments.length; i++) {
        arg[i] = arguments[i];
    }

    var Obj = {                                    //Создаем объект и методы
        sum: function sum(arg) {
            var sum = arg[0]; 
            for (var i = 1; i < arg.length; i++) {
                sum = sum + arg[i];
            }
            return sum;
        },
        dif: function dif(arg) {
            var dif = arg[0];
            for (var i = 1; i < arg.length; i++) {
                dif = dif - arg[i];
            }
            return dif;
        },
        div: function div(arg) {
            var div = arg[0];
            for (var i = 1; i < arg.length; i++) {
                div = div / arg[i];
            }
            return div;
        },
        mul: function mul(arg) {
            var mul = arg[0];
            for (var i = 1; i < arg.length; i++) {
                mul = mul * arg[i];
            }
            return mul;
        }
    };

    return Obj;                                     //Возвращаем объект
}

calculator(5, 7, 9, 3);                             //Вызываем функцию

export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
