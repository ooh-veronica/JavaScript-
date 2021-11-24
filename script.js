// Создать одностраничное приложение “Опросник” на нативном JavaScript.

// 1)  Необходимо реализовать форму авторизации с полями для: имени, фамилии, возраста и кнопкой продолжить(по которой пользователь переходит на опросник). Все поля должны быть обязательными. Форма показывается при загрузки страницы, если пользователь первый раз заходит в приложение. В случае если пользователь уже вводил все данные то данные должны браться к примеру из localStorage и пользователь сразу же переходит к опроснику.
// Дополнение*. Если пользователь уже вводил данные, у него должна показаться кнопка “продолжить как {Имя}”(по нажатию на которую вы переходите к опроснику) и “ввести данные о себе снова”(по нажатию на которую вы снова попадаете на форму авторизации)


const divForm = document.createElement("form"); 
divForm.classList.add("form_container")
divForm.setAttribute("active", "#")
divForm.name = "formName"
divForm.id = "form"


const headingForm = document.createElement("h1")
headingForm.classList.add("form__title")
headingForm.innerHTML = "авторизация пользователя";


const firstNameUser = document.createElement("input")
firstNameUser.classList.add("input__nameUser")
firstNameUser.classList.add("fields")
firstNameUser.type = "text";
firstNameUser.placeholder = "имя"
firstNameUser.name = "firstUserName"
firstNameUser.pattern = "^[А-Яа-яЁё\s]+$"
firstNameUser.id = "first"

const textName = document.createElement("p");
textName.classList.add("textName")
textName.innerHTML = "Вам необходимо ввести Ваше имя на русском языке"
textName.style.display ="block"


const surnameUser = document.createElement("input")
surnameUser.classList.add("input_surnameUser")
surnameUser.classList.add("fields")
surnameUser.type = "text";
surnameUser.placeholder = "фамилия"
surnameUser.name = "surnameName"
surnameUser.pattern = "^[А-Яа-яЁё\s]+$"
surnameUser.id = "second"

const textSurname = document.createElement("p");
textSurname.classList.add("textSurname")
textSurname.innerHTML = "Вам необходимо ввести Вашe фамилию на русском языке"
textSurname.style.display = "block"


const ageUser = document.createElement("input")
ageUser.classList.add("input__age")
ageUser.classList.add("fields")
ageUser.type = "text";
ageUser.placeholder = "возраст"
ageUser.name = "ageName"
ageUser.pattern = "^[ 0-9]+$"
ageUser.id = "third"


const textAge = document.createElement("p");
textAge.classList.add("textAge")
textAge.innerHTML = "Вам необходимо ввести Ваш возраст в числовом формате"
textAge.style.display = "block"


const buttonNext = document.createElement("button")
buttonNext.classList.add("button_next")
buttonNext.innerHTML = "продолжить"
buttonNext.type = "submit";

document.body.prepend(divForm);
divForm.appendChild(headingForm);
divForm.appendChild(firstNameUser);
divForm.appendChild(textName);
divForm.appendChild(surnameUser);
divForm.appendChild(textSurname);
divForm.appendChild(ageUser);
divForm.appendChild(textAge);  
divForm.appendChild(buttonNext);





let correctForm = divForm.addEventListener("submit", (event) =>{
    event.preventDefault()

    let nameValid = document.forms["formName"]["firstUserName"].value; 
        if(nameValid == "" || nameValid == null) {
            firstNameUser.classList.add("incorrect")

        }else{
            firstNameUser.classList.add("correct")
        }

    let surnameValid = document.forms["formName"]["surnameName"].value;
        if(surnameValid == "" || surnameValid == null){
            surnameUser.classList.add("incorrect")
            
        }else{
            surnameUser.classList.add("correct")
        }

    let ageValid = document.forms["formName"]["ageName"].value;
        if(ageValid == "" || ageValid == null){
            ageUser.classList.add("incorrect")
        }else{
            ageUser.classList.add("correct")
    }
})



window.onload = () => {

    firstNameUser.value = localStorage.getItem("first");
    surnameUser.value = localStorage.getItem("second")
    ageUser.value = localStorage.getItem("third")

}

buttonNext.addEventListener("click",() => {
    localStorage.setItem("first", firstNameUser.value); 
    localStorage.setItem("second", surnameUser.value); 
    localStorage.setItem("third", ageUser.value); 
})




