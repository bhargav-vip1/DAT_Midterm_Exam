let students = []
let questions = []
let result = []
let current = {
  student: null,
  question: null,
  answer: null
}

const student = document.querySelector('span')
const question = document.querySelector('div')

const form = document.querySelector('form')
const answer = document.querySelector('input')

const nextBtn = document.querySelector('#next')
const repeat = document.querySelector('#repeat')

const next = () => {
  answer.value = ''

  if (students.length > 0 && questions.length > 0) {
    let stud = students.pop()
    let ques = questions.pop()

    speak(`Learner name: ${stud}`)
    speak(`Question: ${ques}`)

    current.student = stud
    current.question = ques
    current.answer = null
    
    student.innerText = stud
    question.innerText = ques
  } else {
    document.querySelector('main').innerHTML = `<h4>Exam Complete<a href="results.html">result</a></h4>`
    
    let temp = ''
    result.forEach(ele => temp += `"${ele.student}","${ele.question}","${ele.answer}"\n`)

    let dataStr = "data:text/plain;charset=utf-8," + encodeURIComponent(temp)
    const link = document.createElement('a')
    link.setAttribute('href', dataStr)
    link.setAttribute('download', 'result.csv')
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}

const speak = (msg) => {
  const speach = new SpeechSynthesisUtterance(msg)
  window.speechSynthesis.speak(speach)
}

form.onsubmit = (e) => {
  e.preventDefault()
  current.answer = answer.value
  result = [...result, {...current}]
}

nextBtn.onclick = () => current.answer && next()

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