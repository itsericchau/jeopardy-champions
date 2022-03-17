const state = {
    userId:null,
    userName:null,
    userScore:0,
    question: null
}

function getQuestion(value=null) {
    
    if(value){
        axios.get(`https://jservice.io/api/clues?value=${value}`)
        .then(res => res.data)
        .then(question => {
            state.question = question[Math.floor(Math.random() * question.length)]
            console.log(state.question)
            renderQuizQuestion()
        })
    } else {
        axios.get('https://jservice.io/api/random')
        .then(res => res.data)
        .then(question => {
            state.question = question[0]
            console.log(state.question)
            renderQuizQuestion()
        })
    }
}

function initialSetting() {
    state.userScore = 0
    state.question = null
}
