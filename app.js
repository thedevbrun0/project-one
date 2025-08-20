const form = document.querySelector('.form')
const scoreIndex = document.querySelector('.score')
const containerQuestion1 = document.querySelector('.container-question1')
const containerQuestion2 = document.querySelector('.container-question2')
const containerQuestion3 = document.querySelector('.container-question3')



const answersCorrect = ['A', 'C', 'A']

let score = 0
let textScore = ''
form.addEventListener('submit', event => {


    event.preventDefault()
    const answersRespost = [
        form.answer1.value,
        form.answer2.value,
        form.answer3.value,

    ]


    answersRespost.forEach((value, index) => {
        if (value === answersCorrect[index]) {
            score += 1
        }
        if (form.answer1.value === 'A') {
            containerQuestion1.style.background = 'lightgreen';
        } else {
            containerQuestion1.style.background = 'indianred';
        }

        if (form.answer2.value === 'C') {
            containerQuestion2.style.background = 'lightgreen';
        } else {
            containerQuestion2.style.background = 'indianred';
        }

        if (form.answer3.value === 'A') {
            containerQuestion3.style.background = 'lightgreen';
        } else {
            containerQuestion3.style.background = 'indianred';
        }

        if (value === '') {
            score = ''
            textScore = 'Selecione todas as respostas!'
        }
    })
    scrollTo(0, 0)

    switch (score) {
        case 0:
            textScore = 'Você não acertou nenhuma pergunta =('
            break;
        case 1:
            textScore = 'Você acertou 1 pergunta.'
            break;
        case 2:
            textScore = 'Você acertou 2 perguntas.'
            break;
        case 3:
            textScore = 'Você acertou 3 perguntas.'
            break;

        default:


    }
    scoreIndex.querySelector('h2').textContent = textScore
    scoreIndex.classList.remove('d-none')

})


const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', () => {
    score = 0
    scoreIndex.classList.add('d-none')
    scrollTo(0, 0)
    containerQuestion1.style.background = 'gainsboro'
    containerQuestion2.style.background = 'gainsboro'
    containerQuestion3.style.background = 'gainsboro'
})

