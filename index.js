Задача 1:
/* Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
  
  var newArray = [];
  
  for (var i = 0; i < array.length; i++) {
                (fn(array[i]);
                 newArray.push;
            }

  return newArray;
  
}

function fn(a) {
  
    return a+2
    
  }

var arrayTest = [1,2,3,4,5,6,7,8,9,10];

console.log(forEach(arrayTest,fn));

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
  
 delete obj[prop];
  
}

var Obj = {

  name: 'Vika',
  height: 169,
  weight: 54

};

deleteProperty(Obj, 'name');
console.log(Obj);

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
  
  if (obj.hasOwnProperty(prop)=== true){
        return true;
  } else {
        return false;
  }
} var Obj = {

  name: 'Vika',
  height: 169,
  weight: 54

};

hasProperty(Obj, 'surname');

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
  var Result = [];
  
  for (var prop in obj){
    Result.push(prop);
    
  }
  return Result;
  
}

var Girl = {

  name: 'Vika',
  height: 169,
  weight: 54

};

getEnumProps(Girl);

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {

var Result = [];
  
  for (var prop in obj){
    var UP = prop.toUpperCase();
    Result.push(UP);
    
  }
  return Result;
  
}

var Girl = {

  name: 'Vika',
  height: 169,
  weight: 54

};

upperProps(Girl);

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
}

