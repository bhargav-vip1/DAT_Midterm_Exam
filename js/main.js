let students = []
let questions = []

const student = document.querySelector('span')
const question = document.querySelector('div')

const nextBtn = document.querySelector('#next')
const repeat = document.querySelector('#repeat')

const next = () => {
  if (students.length > 0 && questions.length > 0) {
    let stud = students.pop()
    let ques = questions.pop()

    speak(`Learner name: ${stud}`)
    speak(`Question: ${ques}`)

    student.innerText = stud
    question.innerText = ques
  } else {
    document.querySelector('main').innerHTML = `<h4>Exam Complete</h4>`
  }
}

const speak = (msg) => {
  const speach = new SpeechSynthesisUtterance(msg)
  window.speechSynthesis.speak(speach)
}

nextBtn.onclick = next
repeat.onclick = () => speak(question.innerText)

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    students = [...data.students, ...data.students]
    questions = [...data.questions]
  })
  .then(() => {
    students.sort(() => 0.5 - Math.random())
    questions.sort(() => 0.5 - Math.random())
    
    next()
  })  
  .catch(err => console.log(err))