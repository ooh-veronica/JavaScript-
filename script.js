// Переписать функцию-конструктор в виде класса: 

// ЗАДАНИЕ 1
// class Car{
//     constructor(name, year, color) {
//         this.name = name;
//         this.year = year;
//         this.color = color;    
//     }

//     changeColor(newColor){
//         this.color = newColor;
//     }
// }

// let car = new Car('BMW', 2012 , "red"); 
// car.changeColor('black');
// console.log(car);



// ЗАДАНИЕ 2 
// Ваша задача реализовать класс Person. Вы должны заполнить метод Constructor, чтобы принять имя как строку и возраст как число, реализовать метод getInfo получения информации, который должен вернуть, например, “johns age 34”

// class Person {
//     constructor(name, age){
//         this.name = name; 
//         this.age = age; 
//     }
//     getInfo(){
//         alert(`${this.name} age ${this.age}`);
//     }
// }

// let person = new Person("Veronica", 24);
// person.getInfo();




// ЗАДАНИЕ 3
// Ваша задача - реализовать класс Cat, который расширяет Animal, и заменить метод speak, чтобы вернуть имя кошки + мяу. например «Mr Whiskers meows.». Атрибут name передается с this.name

// class Animal { 
//     constructor(name){ 
//         this.name = name; 
//     }
//     speak(){
//         alert(this.name + "say hi"); 
//     }
// }
// class Cat extends Animal {
//     constructor(name){
//         super(name);
//     }
//     speak(){
//         alert(this.name + "мяу")
//     }
// }

// let name1 = new Cat("КОТИК");
// console.log(name1);
// name1.speak();


// ЗАДАНИЕ 4 

// Создать класс Person со стандартными свойствами (имя, возраст) и действиями(идти, разговаривать, есть) человека, от него наследовать классы Ребенок и взрослый со своими особенными и методами свойствами (н-р, у ребенка - плакать или ходить в школу)


// class Person{
//     constructor(name, age, go, speak,eat){
//         this.name = name; 
//         this.age = age; 
//         this.go = go; 
//         this.speak = speak; 
//         this.eat = eat; 
//     }
// }

// class Childs extends Person {
//     constructor(name, age, go, speak,eat){
//         super(name, age, go, speak,eat); 
//     }
//         childsNeeds () {
//             alert(this.name + " мое имя");
//             alert(this.age + " мой возраст");
//             alert(this.go + " в школу");
//             alert(this.speak + " на русском языке");
//             alert(this.eat + " вредную еду");
//         };
// }

// class Adult extends Person {
//     constructor(name, age, go, speak,eat){
//         super(name, age, go, speak,eat); 
//     }
//         adultNeeds (){
//             alert(this.name + " мое имя");
//             alert(this.age + " мой возраст");
//             alert(this.go + " на работу");
//             alert(this.speak + " на русском и английском языке");
//             alert(this.eat + " полезную еду");
//         }
// }

// let childs = new Childs("Veronica", 24, "ходить", "разговаривать", "есть"); 
// console.log(childs); 
// childs.childsNeeds();

// let adult = new Adult("Veronica", 48, "ходить", "разговаривать", "кушать"); 
// console.log(adult); 
// adult.adultNeeds();


// ЗАДАНИЕ 5
// Реализовать с помощью классов функциональность из задачи 3  темы “прототипы” :

// Реализовать на основе прототипного наследования создание модальных окон (например, базовая функция модальное окно, с методами показа и скрытия, от которого наследуются функции создания предупреждающего окна, запрещающего окна, окна с успешным выполнением )


// const open = document.getElementById('button_open');
// const modalContainer = document.getElementById('modalContainer');
// const text = document.getElementById('text');
// const ok = document.getElementById('button_ok');
// const close = document.getElementById('button_close');

// class Button{
//     constructor(button, open, modalContainer, text, close, ok ){
//         this.button = button;
//     }
// }

// class Open extends Button {
//     constructor(button){
//         super(button)
//     }
//     openModal (){
//         open.addEventListener("click", () =>{
//             modalContainer.style.display = "block"
//         });
//     }
// }
// class Close extends Open {
//     constructor(open){
//         super(open)
//     }
//     closeModal (){
//         close.addEventListener("click", () =>{
//             modalContainer.style.display = "none"
//         });
//     }
// }
// class Text extends Open {
//     constructor(text){
//         super(text)
//     }
//     Text (){
//         ok.addEventListener("click", () =>{
//             text.style.display = "block"
//         });
//     }
// }


// let open1 = new Open();
// console.log(open1);
// open1.openModal()

// let close1 = new Close();
// console.log(close1);
// close1.closeModal()

// let text1 = new Text();
// console.log(text1);
// text1.Text()
    
    



// ЗАДАНИЕ 6 
// Создать класс Ball, тип которого regular, если аргумент не передан, super, если передан  аргумент “superBall”
// ball1 = new Ball();
// ball2 = new Ball("superBall");
// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "superBall"
//****************************************** */

// class Ball {
//     constructor(regular, superBall){
//         this.ball1 = regular; 
//         this.ball2 = superBall; 
//     }
//     get ballType(){
//         return this._ball2;
//     }
//     set ballType(value){
//         if(value.lenght == ""){
//             return this._ball1;
//             console.log(ball1);
//         }
//     }

// }

// let balls = new Ball("");
// console.log(balls)






