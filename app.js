const btnPlus = document.querySelectorAll('.fa-plus-square');
const btnMinus = document.querySelectorAll('.fa-minus-square');
const question = document.querySelectorAll('.question');

question.forEach(function(e, i) { 
    btnPlus[i].addEventListener('click', function() {
        for (let x = 0; x < question.length; x++) {
            question[x].classList.remove('show-text');
        }
        question[i].classList.add('show-text');
    })
    btnMinus[i].addEventListener('click', function() {
        question[i].classList.remove('show-text');
    })
});