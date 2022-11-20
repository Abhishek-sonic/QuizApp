const quizData = [{
    question: "Javascript is an _______ language?",
    a: "Object-oriented",
    b: "Object-based",
    c: "Procedural",
    d: "None of the above",
    correct: "b",
},
{
    question: "Arrays in JavaScript are defined by which of the following statements?",
    a: "It is an ordered list of values",
    b: "It is an ordered list of objects",
    c: " It is an ordered list of string",
    d: " It is an ordered list of functions",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "Which of the following scoping type does JavaScript use?",
    a: "Sequential",
    b: "Segmental",
    c: "Lexical",
    d: "Literal",
    correct: "c",
},{
    question : " What is the basic difference between JavaScript and Java?",
    a:"Functions are considered as fields",
    b:"Functions are values, and there is no hard distinction between methods and fields",
c:"Variables are specific",
d:"There is no difference",
correct:"b",
}

];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);