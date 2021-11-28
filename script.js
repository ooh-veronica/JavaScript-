
//2)  Необходимо реализовать опросник, в котором будет от 3 до 10 шагов с разными видами полей(checkbox, radio, input, select) которые могут быть опциональными и обязательными. Вопросы могут быть любыми. По своему усмотрению можно добавить прогрессбар с прогрессом пройденных вопросов. После прохождения опросника показывается модалка со списком отвеченных вопросов.



const div = document.createElement("div")
div.style.display = "block"
div.classList = "main_content"
document.body.prepend(div)

const divInput = document.createElement("form")
divInput.classList = "input"
div.appendChild(divInput)

let question1 = document.createElement('h2');
question1.innerHTML = "First question"
divInput.appendChild(question1)

let text1 = document.createElement("p")
text1.innerHTML = "Выберите наиболее подходящий ответ! “What does your husband do?"

divInput.appendChild(text1)


const divContainer = document.createElement("form")
divContainer.classList = "divContainer"
divInput.appendChild(divContainer)


let input1 = document.createElement("input")
input1.classList = "inputCheck"
input1.type = "checkbox"
input1.name = "checkbox"
input1.id = "input1"
let label1 = document.createElement("label")
label1.classList = "label"
label1.textContent = "He is feeding the dog."


let input2 = document.createElement("input")
input2.type = "checkbox"
input2.classList = "inputCheck"
input2.name = "checkbox"
input2.id = "input2"
let label2 = document.createElement("label")
label2.classList = "label"
label2.textContent = "He is a doctor." //правильный


let input3 = document.createElement("input")
input3.type = "checkbox"
input3.classList = "inputCheck"
input3.name = "checkbox"
input3.id = "input3"
let label3 = document.createElement("label")
label3.classList = "label"
label3.textContent = "Yes, he does."


let input4 = document.createElement("input")
input4.type = "checkbox"
input4.classList = "inputCheck"
input4.name = "checkbox"
input4.id = "input4"
let label4 = document.createElement("label")
label4.classList = "label"
label4.textContent = "Yes, he is."
        
label1.prepend(input1)
divContainer.appendChild(label1)
label2.prepend(input2)
divContainer.appendChild(label2)
label3.prepend(input3)
divContainer.appendChild(label3)
label4.prepend(input4)
divContainer.appendChild(label4)


// *****************************************************
// *****************************************************
// *****************************************************


const divRadio = document.createElement("div")
divRadio.classList = "inputRadio"
div.appendChild(divRadio)

let question2 = document.createElement('h2');
question2.innerHTML = "Second question"
divRadio.appendChild(question2)

let text2 = document.createElement("p")
text2.innerHTML = "Yesterday I ................. a bird."
divRadio.appendChild(text2)


const divRadioContainer = document.createElement("form")
divRadioContainer.classList = "divRadioContainer"
divRadioContainer.id = "radioCont"
divRadio.appendChild(divRadioContainer)


let radio1 = document.createElement("input")
radio1.classList = "radioCheck"
radio1.type = "radio"
radio1.id = "radio1"
let labelR_1 = document.createElement("label")
labelR_1.classList = "label"
labelR_1.textContent = "saw" //правильный




let radio2 = document.createElement("input")
radio2.type = "radio"
radio2.classList = "radioCheck"
radio2.id = "radio2"
let labelR_2 = document.createElement("label")
labelR_2.classList = "label"
labelR_2.textContent = "sawed" 


let radio3 = document.createElement("input")
radio3.type = "radio"
radio3.classList = "radioCheck"
radio3.id = "radio3"
let labelR_3 = document.createElement("label")
labelR_3.classList = "label"
labelR_3.textContent = "see"


let radio4 = document.createElement("input")
radio4.type = "radio"
radio4.classList = "radioCheck"
radio4.id ="radio4"
let labelR_4 = document.createElement("label")
labelR_4.classList = "label"
labelR_4.textContent = "seed"



labelR_1.prepend(radio1)
divRadioContainer.appendChild(labelR_1)
labelR_2.prepend(radio2)
divRadioContainer.appendChild(labelR_2)
labelR_3.prepend(radio3)
divRadioContainer.appendChild(labelR_3)
labelR_4.prepend(radio4)
divRadioContainer.appendChild(labelR_4)


// *****************************************************
// *****************************************************
// *****************************************************




const divInputType = document.createElement("div")
divInputType.classList = "divInputType"
div.appendChild(divInputType)

let question3 = document.createElement('h2');
question3.innerHTML = "Third question"
divInputType.appendChild(question3)

let text3 = document.createElement("p")
text3.innerHTML = "Переведите слово `близнецы` на английский"
divInputType.appendChild(text3)


const divInputTypeContainer = document.createElement("form")
divInputTypeContainer.classList = "divInputTypeContainer"
divInputTypeContainer.name = "divInputTypeCont"
divInputType.appendChild(divInputTypeContainer)

const inputItem = document.createElement("input")
inputItem.classList = "inputItem"
inputItem.name = "inputItem"
inputItem.id = "inputItem"
inputItem.placeholder = "translate word"

divInputTypeContainer.appendChild(inputItem)


// *****************************************************
// *****************************************************
// *****************************************************



const divSelect = document.createElement("form")
divSelect.classList = "inputSelect"
div.appendChild(divSelect)

let question4 = document.createElement('h2');
question4.innerHTML = "Fourth question"
divSelect.appendChild(question4)

let text4 = document.createElement("p")
text4.innerHTML = "................ that weird man sitting over there?"
divSelect.appendChild(text4)


const divOptions = document.createElement("select")
divOptions.classList = "divOptions"
divOptions.id = "select"
divSelect.appendChild(divOptions)

const option1 = document.createElement("option")
option1.classList = "option"
option1.value = "option1"
option1.innerHTML = "Which"

const option2 = document.createElement("option")
option2.classList = "option"
option2.value= "option2"
option2.innerHTML = "Whose"

const option3 = document.createElement("option")
option3.classList = "option"
option3.value = "option3"
option3.innerHTML = "Who's" //правильный

const option4 = document.createElement("option")
option4.classList = "option"
option4.value = "option4"
option4.innerHTML = "Who"



divOptions.appendChild(option1)
divOptions.appendChild(option2)
divOptions.appendChild(option3)
divOptions.appendChild(option4)


const button = document.createElement("button")
button.innerHTML = "THE END"
button.classList = "button"

div.append(button)

// *****************************************************
// *****************************************************
// *****************************************************



    
const modalWindow = document.createElement("div")
modalWindow.classList = "modal"
div.after(modalWindow)




const modalContainer = document.createElement("div")
modalContainer.classList = "modalContainer"
modalWindow.appendChild(modalContainer)

const textRes = document.createElement("h2")
textRes.innerHTML = "RESULTS"
textRes.classList = "textRes"
modalContainer.appendChild(textRes)


let result = document.createElement("p")
result.id= "result"
let result1 = document.createElement("p")
result1.id= "result1"
let result2 = document.createElement("p")
result2.id= "result2"
let result3 = document.createElement("p")
result3.id= "result3"
let result4 = document.createElement("p")
result4.id= "result4"

modalContainer.appendChild(result)
result.appendChild(result1)
result.appendChild(result2)
result.appendChild(result3)
result.appendChild(result4)

// *****************************************************
// *****************************************************
// *****************************************************


button.addEventListener("click" , (event) => {
    event.preventDefault()

    div.style.display = "none"
    modalWindow.style.display = "block"


    // *****************************


    let valueCheckbox = document.getElementById("input2").checked;
    let res1;

    let valueRadio = document.getElementById("radioCont").value;
    let res2; 

    let valueInput = document.forms["divInputTypeCont"]["inputItem"].value
    let res3;

    let valueSelection = document.getElementById("select").value
    let res4;

    let sum;

    // *****************************
    

    if(valueCheckbox){
        res1 = 2
        let result1 = document.createElement("p")
        result1.id= "result1"
        result1.innerHTML = "First Question : Your answer to question 2 is correct."
        modalContainer.append(result1)

    }else {
        res1 = 0

        let result1 = document.createElement("p")
        result1.id= "result1"
        result1.innerHTML = "First Question : The correct answer to question 2"
        modalContainer.append(result1)
    
    }
    
    // *****************************

    if(valueRadio == "radio1"){
        res2 = 0
        let result2 = document.createElement("p")
        result2.id= "result2"
        result2.innerHTML = "Second Question : Your answer to question 1 is correct."
        modalContainer.append(result2)
    }else{
        res2 = 0;
        let result2 = document.createElement("p")
        result2.id= "result2"
        result2.innerHTML = "Second Question : The correct answer to question 1"
        modalContainer.append(result2)
    }

    // *****************************

    if(valueInput == "twins"){
        res3 = 3
        let result3 = document.createElement("p")
        result3.id= "result3"
        result3.innerHTML = "Third Question : Your answer is correct."
        modalContainer.append(result3)
    }else{
        res3 = 0 
        let result3 = document.createElement("p")
        result3.id= "result3"
        result3.innerHTML = "Third Question : Your answer is incorrect. Right answer is twins"
        modalContainer.append(result3)
    }

    // *****************************

    if(valueSelection == "option3"){
        res4 = 3
        let result4 = document.createElement("p")
        result4.id= "result3"
        result4.innerHTML = "Fourth Question : Your answer is correct. "
        modalContainer.append(result4)
    }else{
        res4 = 0 
        let result4 = document.createElement("p")
        result4.id= "result3"
        result4.innerHTML = "Fourth Question : Your answer is incorrect. Right answer is WHO'S"
        modalContainer.append(result4)
    }
   
    sum = res1 + res2 + res3 + res4



    let allResult = document.getElementById("result")
    allResult.innerHTML = ("Your result is " + sum + " out of 10")
    allResult.classList = "allResult"
    modalContainer.appendChild(allResult)

    

})





