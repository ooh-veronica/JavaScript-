//Сделайте так, чтобы по клику на первую кнопку на экран выводилось число 1, по клику на вторую - число 2, а по клику на третью - число 3. 


// let but1 = document.querySelector("#button1")
// let but2 = document.querySelector("#button2")
// let but3 = document.querySelector("#button3")

// but1.addEventListener('click', function() {
//     alert('FIRST')
// })
// but2.addEventListener('click', function() {
//     alert('SECOND')
// })
// but3.addEventListener('click', function() {
//     alert('THIRD')
// })

//Дана кнопка. По двойному клику по ней выведите на экран какое-нибудь сообщение. 

// but1.addEventListener('dblclick', function() {
//     alert('DOUBLE CLICK')
// })


//Дана кнопка. По наведению на нее выведите на экран какое-нибудь сообщение 

// but1.addEventListener('mouseover', function() {
//     alert('MOUSE OVER')
// })

//Дана кнопка. По уходу курсора с нее выведите на экран какое-нибудь сообщение. 

// but1.addEventListener('mouseout', function() {
//     alert('MOUSE OUT')
// })



//Даны 5 абзацев:
// Дана следующая функция:


// Привяжите эту функцию ко всем 5-ти абзацам.

// let text1 = document.getElementById('elem1')
// text1.addEventListener('click', func)
// let text2 = document.getElementById('elem2')
// text2.addEventListener('click', func)
// let text3 = document.getElementById('elem3')
// text3.addEventListener('click', func)
// let text4 = document.getElementById('elem4')
// text4.addEventListener('click', func)
// let text5 = document.getElementById('elem5')
// text5.addEventListener('click', func)

// function func() {
// 	alert('message');
// }


//Привяжите все эти функции к нашему абзацу. 

// let text = document.getElementById('elem')
// text.addEventListener('click', func1)
// text.addEventListener('click', func2)
// text.addEventListener('click', func3)

// function func1() {
// 	alert('1');
// }

// function func2() {
// 	alert('2');
// }

// function func3() {
// 	alert('3');
// }



//Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.

// const but = document.getElementById('elem')
// const but2 = document.getElementById('but')
// but2.addEventListener('click', function() {
//     alert(but.type)
// })


//Создать 2 кнопки со значениями удалить и добавить. При нажатии кнопки добавить на страницу добавляется элемент с каким-либо текстом. Добавлять можно сколько угодно раз. При нажатии кнопки удалить - удаляется последний добавленный элемент.

// const container = document.getElementById('container')
// const add = document.getElementById('add')
// const remove = document.getElementById('remove')

// add.addEventListener('click', function() {
//     let p = document.createElement('p')
//     p.classList = 'text'
//     p.innerHTML = 'text ADD'
//     container.append(p)

// })

// remove.addEventListener('click', function() {
//     let pRemove = document.querySelectorAll('.text')
//     let lastRemove = pRemove[pRemove.length -1]
//     lastRemove.remove()
// })




// Узнайте количество его классов.

// const getClass = document.getElementById("elem")

// let length1= getClass.classList.length
// console.log(length1)


//Создание геометрических фигур

// Реализовать функцию drawFigure, которая принимает в качестве аргументов: название геометрической фигуры, цвет заливки, положение от верхнего края страницы (css свойство top)  и положение от левого края страницы (css свойство left), а также радиус, если это круг, сторону, если квадрат и ширину и высоту, если прямоугольник. Вызывать функцию при нажатии на соответствующие клавиши, например круг - Q, квадрат - W и тд
 
// Пример использования: drawFigure(‘круг’, ‘red’, 100, 200, 40); // рисует красный круг с радиусом 40px и на расстоянии 100px от верхнего 200px от левого края 


// function drawFigure(name, background, marginTop, marginLeft, param1, param2) {
    

//     if(name === 'circle' || name === 'круг') {
//         let radius = param1
//         let side = param1

//         const circle = document.createElement('div')
//         circle.innerHTML = name
//         circle.style.background = background
//         circle.style.marginTop = marginTop + 'px'
//         circle.style.marginLeft = marginLeft + 'px'
//         circle.style.width = side + 'px'
//         circle.style.height = side + 'px'
//         circle.style.borderRadius = radius + 'px'

//         document.body.prepend(circle)
//     }else if(name === 'square' || name === 'квадрат') {
//         let sideSq = param1

//         const square = document.createElement('div')
//         square.innerHTML = name
//         square.style.background = background
//         square.style.marginTop = marginTop + 'px'
//         square.style.marginLeft = marginLeft + 'px'
//         square.style.width = sideSq + 'px'
//         square.style.height = sideSq + 'px'

//         document.body.prepend(square)
//     }else if(name === 'прямоуголник' || name === 'rectangle'){
//         let sideRect1 = param1
//         let sideRect2 = param2

//         const rectangle = document.createElement('div')
//         rectangle.innerHTML = name
//         rectangle.style.background = background
//         rectangle.style.marginTop = marginTop + 'px'
//         rectangle.style.marginLeft = marginLeft + 'px'
//         rectangle.style.width = sideRect1 + 'px'
//         rectangle.style.height = sideRect2 + 'px'

//         document.body.prepend(rectangle)
//     }
    
// }

// document.addEventListener('keydown', function() {
//     if(event.code === 'KeyQ'){
//         drawFigure("circle", "red", 100, 200, 800);
//     }else if(event.code === 'KeyW'){ 
//         drawFigure("square", "red", 100, 200, 100);
//     }else if(event.code === 'KeyR'){
//         drawFigure("rectangle", "red", 100, 200, 200, 40);
//     }
// })











