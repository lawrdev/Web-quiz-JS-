const quizAnswers = ['B', 'A', 'B', 'A', 'B'];
let form = document.querySelector('.quiz-form');

form.addEventListener('submit', e =>{
    e.preventDefault();
    let score = 0;
    // reference user answers
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value];
    // compare each user answer and give a score
    userAnswers.forEach( (answer, index) => {
        if( answer === quizAnswers[index] ){
            score += 20;
        }
    });

    const result = document.querySelector('.result');
    // to scroll up before outputing result
    scrollTo( 0,0 );
    result.classList.remove('d-none');
    // to animate score
    let output = 0;
    const timer = setInterval( () => {
        result.querySelector('span').textContent = `${output}%`;
        if( output === score ){
            clearInterval( timer );
        } else {
            output ++;
        }
    }, 25);
});



