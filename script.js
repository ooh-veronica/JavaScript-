//Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов. 

// function appendText(selector, text) {
//     let elems = document.querySelectorAll(selector)

//     for(let elem of elems) {
//         elem.innerHTML = text + ' add';
//     }
// }

// appendText('.elem', 'text');



// ЗАДАНИЕ 1
//Создать элемент p с классом “text” и с текстом - “Это всего лишь текст”, после него вставьте div с классом “alert” и с текстом “А это сообщение об ошибке” с красным фоном, белым текстом и полями (padding) размером 20px


// let text = document.createElement('p')
// text.innerHTML = 'А это сообщение об ошибке'
// text.style.background = 'red'
// text.style.color = '#fff'
// text.style.padding = '20px'
// let div = document.createElement('div')
// div.className='alert'
// document.body.prepend(div)
// div.prepend(text)


// ЗАДАНИЕ 2

//Создать список элементов с помощью тега <ol> со значениями из массива строк: ["Viktor", "Tatiana", "Eduard", "Michael", "Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]
// Каждый четный элемент должен иметь css класс “even” и иметь зеленый фон, а нечетный - “odd” и иметь синий фон.


// let list = document.createElement('ol')
// document.body.append(list)


// let names = ["Denis", "Peter", "Ann", "Dmitry", "Sergey", "Ivan", "Alan"]


// function addElem() {
    
//     for(let i=0; i < names.length; i++) {
//         let elem = document.createElement('li') 
//         elem.innerText = names[i]
//         list.appendChild(elem)

//         if(i % 2 === 0){
//             elem.style.background = 'green'
//             elem.className = 'even'
//         }else{
//             elem.style.background = 'blue'
//             elem.className = 'odd'
//         }
//     }

    
// }

// addElem()

//Напишите функцию showMessage, которая будет вставлять на страницу div с классом “message” на странице с указанными аргументами: текст сообщения, цвет фона сообщения, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left)
// Пример вызова функции:  showMessage(“Всем привет”, ‘yellow’, 100, 50);



// function showMessage(text, background,top, left ) { 

//     let div = document.createElement('div')
//     div.className = 'message'

//     div.innerHTML = text;
//     div.style.background = background;
//     div.style.marginTop = top + 'px';
//     div.style.marginLeft = left + 'px'; 


// }

// showMessage('Всем приве ', 'yellow', 100, 50)








