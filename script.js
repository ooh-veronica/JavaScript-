// ЗАДАНИЕ 1
//Создать объект car с набором свойств по желанию. Вывести в цикле все ключи и значения объекта.

// let car = {
//     model : "mazda", 
//     color : "red", 
//     outdoor : 4,
// }

// console.log(car);

// ЗАДАНИЕ 2 
// Создать объект user с свойствами name, email, phone, id. Скопировать этот объект со всеми свойствами в новую переменную newUser.


// let user = {
//     name : "Veronica", 
//     email : "aaa@gmail.com",
//     phone : 375445555555 , 
//     id: 7887878,
// }
// console.log("user", user);
// let newUser = Object.assign(user); 
// console.log("new user", newUser);



// ЗАДАНИЕ 3 
// Создать объект circle со свойствами: radius, color. 
// Также создать в объекте метод   calculateCircumference(), при вызове которого, в консоль выводится длина окружности (2 * число пи * радиус).

// let circle = { 
//     radius : 5,
//     color : "red",
//     calculateCircumference(){
//         return 2 * Math.PI * radius;
//     },
// };

// circle.calculateCircumference();



// ЗАДАНИЕ 4
// Создать объект message с полем text и методами: getMessage(string), showMessage(). При вызове метода getMessage в поле text записывается переданная в качестве аргумента строка. При вызове метода showMessage() вызывается alert() с содержимым поля text 


// let message = {
//     text : "", 

//     getMessage(string){
//         this.text = string;
//     },
//     showMessage(){
//         alert(this.text);
//     },
// };

// message.getMessage("Hello");
// message.showMessage();


// ЗАДАНИЕ 5 
// Создать объект Прямоугольник (rectangle) с параметрами высота (height) и ширина (width) и методом getArea(), который возвращает площадь

// console.log(rectangle.width);       // => 10
// console.log(rectangle.height);      // => 20
// console.log(rectangle.getArea());   // => 200

// let rectangle = {
//     width: 10, 
//     height:15, 
//     getArea(){
//         return this.width * this.height;
//     },
//     setWidth(newWidth){
//         this.width = newWidth;
//     },
//     setHeight(newHeight){
//         this.height = newHeight;
//     },
//     setSize(newWidth, newHeight){
//         this.width = newWidth; 
//         this.height = newHeight;
//     },
// }; 


// ЗАДАНИЕ 6 
// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false. 


// function isEmpty(obj){ 
//     for(let key in obj) {
//         return true;
//     } {
//         return false;
//     };
// };



// задание 7 
// 1. и записать в поля этого же объекта 

//Создать объект selfGeneratedUser с методами: 
// 1) getInfo(), при вызове которого мы через prompt() поочередно получим данные об имени (name), емейле (email) и телефоне (phone) пользователя и запишем их в соответствующие свойства объекта. 
// 2) introduce(), при вызове которого мы поочередно выводим c помощью alert name, email и phone. Если поля нет - не выводим его, переходим к другому полю.


// let selfGeneratedUser = {
//     namE : "Veronica", 
//     email : "adfaf@gmail.com", 
//     phone : "",
//     getInfo(){
//         prompt("Ваше имя", this.namE);
//         prompt("Ваше email", this.email);
//         prompt("Ваш номер телефона", this.phone);

//         for(key in selfGeneratedUser){ 
//             console.log(selfGeneratedUser[key]);
//         };
//     },
//     introduce(){
//         if(this.selfGeneratedUser !== ""){
//             alert(this.namE , this.email , this.phone);
//         }
//     },
// };


// selfGeneratedUser.getInfo();
// selfGeneratedUser.introduce();





// ***************************************************
// ПРОДОЛЖЕНИЕ...



// ЗАДАНИЕ 1
// Создать  произвольный массив и пройти по нему с помощью цикла for .. of 

// let number = [8,16,18];

// for(let value of number){
//     value = value + 1;
//     console.log(value);
// }

// ЗАДАНИЕ 2
// Существует ul список на странице. Получить все текстовые значения элементов списка. Создать из них массив и к каждому элементу массива добавить его порядковый номер. Вывести полученный массив

// НЕ РЕШЕНО! НУЖНА ПОДСКАЗКА((((


// let list = document.getElementById("list"); 
// let item = document.querySelectorAll(".item"); 

// let arr = [item];

// for(let value of arr){
//     let name1 = arr[0];
//     console.log(value);
// }


// ЗАДАНИЕ 3 
//Есть объект prices с произвольным количеством свойств, содержащих цены продуктов.
// Напишите функцию sumPrices(prices), которая возвращает сумму всех цен с помощью метода Object.values


// let prices = {
//     "apple" : 10, 
//     "pineapple": 12, 
//     "orange": 15,
// };

// function sumPrices(prices){
//     let sum = 0;
//     for(let cost of Object.values(prices)){
//         sum = sum + cost;
//     }
//     return sum;
// }

// console.log(sumPrices(prices));




// ЗАДАНИЕ 4 
// Присвоить каждое свойство объекта к отдельной переменной 

// let product = {
//     name: "John",
//     price: 30,
//     sold: false
// };

// let {name, price, sold} = product; 
// console.log(name); 
// console.log(price); 
// console.log(sold);


// ЗАДАНИЕ 5 
// Есть массив [ ‘Tony’, ‘Stark’,  1 , 45, 2, 5, 34, 9, 11]
// Присвоить первое и второе значения массива к соответствующим переменным, а остальные значения сложить 



// let [firstName, surname, ...rest] = [ "Tony", "Stark",  1 , 45, 2, 5, 34, 9, 11]; 

// let arr = [...rest];

// function sumRest(...rest){
//     let sum = 0; 
//     for(let number of arr){
//         sum = sum + number;
//     }
//     return sum;
// }

// console.log(firstName); 
// console.log(surname);
// console.log(sumRest(...rest));


