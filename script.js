// Создать одностраничное приложение “Опросник” на нативном JavaScript.

// 1)  Необходимо реализовать форму авторизации с полями для: имени, фамилии, возраста и кнопкой продолжить(по которой пользователь переходит на опросник). Все поля должны быть обязательными. Форма показывается при загрузки страницы, если пользователь первый раз заходит в приложение. В случае если пользователь уже вводил все данные то данные должны браться к примеру из localStorage и пользователь сразу же переходит к опроснику.
// Дополнение*. Если пользователь уже вводил данные, у него должна показаться кнопка “продолжить как {Имя}”(по нажатию на которую вы переходите к опроснику) и “ввести данные о себе снова”(по нажатию на которую вы снова попадаете на форму авторизации)

"use strict"

const divForm = document.createElement("form"); 
divForm.classList.add("form_container")
divForm.setAttribute("active", "#")
divForm.name = "formName"

// divForm.setAttribute("onsubmit", "return(validate())")

const headingForm = document.createElement("h1")
headingForm.classList.add("form__title")
headingForm.innerHTML = "авторизация пользователя";


const firstNameUser = document.createElement("input")
firstNameUser.classList.add("input__nameUser")
firstNameUser.type = "text";
firstNameUser.placeholder = "имя"
firstNameUser.name = "firstUserName"
firstNameUser.classList.add("field")
firstNameUser.pattern = "^[А-Яа-яЁё\s]+$"


const surnameUser = document.createElement("input")
surnameUser.classList.add("input_surnameUser")
surnameUser.type = "text";
surnameUser.placeholder = "фамилия"
surnameUser.name = "surnameName"
surnameUser.classList.add("field")


const ageUser = document.createElement("input")
ageUser.classList.add("input__age")
ageUser.type = "text";
ageUser.placeholder = "возраст"
ageUser.name = "ageName"
ageUser.classList.add("field")

const buttonNext = document.createElement("button")
buttonNext.classList.add("button_next")
buttonNext.innerHTML = "продолжить"
buttonNext.type = "submit";

document.body.prepend(divForm);
divForm.appendChild(headingForm);
divForm.appendChild(firstNameUser);
divForm.appendChild(surnameUser);
divForm.appendChild(ageUser);  
divForm.appendChild(buttonNext);



divForm.addEventListener("submit", function(event){

    if(!firstNameUser.checkValidity()) {
        event.preventDefault();
        firstNameUser.style.border = "20px solid red"
    }else{
        event.preventDefault();
        firstNameUser.style.border = "10px solid green"
        
    }
    
})
    

// divForm.addEventListener("submit", (event) =>{
//     event.preventDefault()

//     let nameValid = document.forms["formName"]["firstUserName"].value; 
//         if(nameValid == "" || nameValid == null) {
//             firstNameUser.style.border = "2px solid red"
//             return false;
//         }

//     let surnameValid = document.forms["formName"]["surnameName"].value;
//         if(surnameValid == "" || surnameValid == null){
//             surnameUser.style.border = "2px solid red"
//             return false
//         }

//     let ageValid = document.forms["formName"]["ageName"].value;
//         if(ageValid == "" || ageValid == null){
//             ageUser.style.border = "2px solid red"
//         return false
//     }
// })



// divForm.onsubmit = function() {
    
//     const nameVal = firstNameUser.value; 
//         surnameVal = surnameUser.value;
//         ageVal = ageUser.value;
//         emptyInputs = Array.from(firstNameUser).filter(input => input.value == "")

//     // проверяем инпуты на пустоту 
//     firstNameUser.forEach(function(input) {
//         if(input.value == ""){
//             input.classList.add("error")
//             error.style.border= "2px solid red"
//         }else{
//             input.classList.remove("error")
//         }

//         if(emptyInputs.length !== 0){
//             return false
//         }
//     });


//     return false;
// }