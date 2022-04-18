// ЗАДАНИЕ 1
//Создать функцию конструктор Dog, который наследует метод eat из объекта  animal 

// let animal = {
//     eat() {
//     console.log("eating")
//  }, 
// }; 

// function Dog(){}; //пустое тело функции 
// Dog.prototype = animal; // собака наследуется от животного 

// // дополнительно 
// let dog1 = new Dog();
// dog1.eat();



// ЗАДАНИЕ 2 
// Реализовать на основе прототипного наследования создание геометрических фигур (например, базовая функция фигура, от которой наследуются функции рисования круга, квадрата,  прямоугольника) - у фигур должны быть свойства цвета, размера, положения на странице, методы нарисовать фигуру, вычислить площадь фигуры

// function Figure(){ //Figure-родитель для других фигур
//     this.draw = function(){
//         console.log("drawing")
//     },

//     this.setValues = function(color, top, left, size){
//         this.color = color; 
//         this.size = size;
//         this.top = top;
//         this.left = left;
//     },
//     this.color = null; 
//     this.size = null;
//     this.top = null;
//     this.left = null;
// }

// // let figure = new Figure();

// function Square(color, top,left, size){
//     this.setValues(color, top,left, size);
//     this.square = function(){}
//     console.log(size * size);
// }
// Square.prototype = new Figure();

// function Circle(color, top,left, size){
//     this.setValues(color, top,left, size);
//     this.square = function(){}
//     console.log(2 * Math.PI *size ** 2);
// }
// Circle.prototype = new Figure();

// function Rectangle(color, top,left, size){
//     this.setValues(color, top,left, size);
//     this.square = function(){}
//     console.log(size * (size * 2));
// }
// Rectangle.prototype = new Figure();

// let square = new Square("red", 10, 30, 20)
// square.square();
// console.log(square);


// let circle = new Circle("red", 4, 80, 20)
// circle.square();
// console.log(circle);


// let rectangle = new Rectangle("red", 50, 100, 20)
// rectangle.square();
// console.log(rectangle);


// ЗАДАНИЕ 3 
//Реализовать на основе прототипного наследования создание модальных окон (например, базовая функция модальное окно, с методами показа и скрытия, от которого наследуются функции создания предупреждающего окна, запрещающего окна, окна с успешным выполнением )


// function Modal (title,style) {
//     this.title = title;
//     this.style = ""; 
//     this.show = function() {}
//     this.hide = function() {}
// }

// function WarnModal(title) {
//     Modal.call(this.title, "background: border: 1px solid orange"); // прив wm к родителю 
// }
// function InfoModal(title) {
//     Modal.call(this.title, "background: border: 1px solid yellow"); 
// }
// function ErrorModal(title) {
//     Modal.call(this.title, "background: border: 1px solid red"); 
// }
// let warnModal = new WarnModal("Warn modal"); 
// let infoModal = new InfoModal("Info modal");
// let errorModal = new ErrorModal("Error modal");

// console.log(warnModal);
// console.log(infoModal);
// console.log(errorModal);
