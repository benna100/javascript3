console.log('Script loade 2d');

fetch('https://gist.githubusercontent.com/benna100/c9c38faebea1526fb4e6b6b896a1dc94/raw/8bcaf89d7ed704ff1c0e3f2efa229369ed4dd0a2/quiz-testing.json')
    .then(response => response.json())
    .then(quizData => {
        const questions = quizData.quiz.questions;
        renderQuestions(questions);
        document.querySelector('.loading').style.display = 'none';

        document.querySelector('form').addEventListener('submit', (event) => {
            const answers = getAnswers();

            const score = getScore(answers, questions);
            
            renderScore(score, questions.length);
            
            event.preventDefault();
        });

        const answers = ['Ham (incorrect)', 'here (correct)'];
const score = getScore(answers, quizDataFromApi.quiz.questions);
console.log(score); // logs 1
    });

function getAnswers() {
    const selects = document.querySelectorAll('select');
    
    const answersText = [...selects].map((select) => {
        return select.options[select.selectedIndex].text;
    });

    return answersText;
}


function renderScore(score, numberOfQuestions) {
    document.querySelector('.result').innerHTML = `You got ${score}/${numberOfQuestions} correct`;

    var confettiSettings = { target: 'my-canvas' };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
}

function renderQuestions(questions) {
    let renderedHtml = ''; 
    
    questions.forEach((question) => {
        renderedHtml += `
            <li>
                <h1>
                    ${question.title}
                </h1>
                <p>
                    ${question.content}
                </p>
                <select>
                    ${question.options.map((option) => {
                        return `
                            <option>
                                ${option.content}
                            </option>
                        `
                    })}
                </select>
            </li>
        `
    });

    document.querySelector('ul').innerHTML = renderedHtml;
}

