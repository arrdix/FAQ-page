//u sing selectors inside the element
// traversing the dom

const btnPlus = document.querySelectorAll('.fa-plus-square');
const btnMinus = document.querySelectorAll('.fa-minus-square');
const selectQst = document.querySelectorAll('.question');
let cek;

    selectQst.forEach(function(e, i) { 

        cek = e.classList;

        btnPlus[i].addEventListener('click', function() {

            for (let x = 0; x < selectQst.length; x++) {
                selectQst[x].classList.remove('show-text');
                console.log('d');
            }

            selectQst[i].classList.add('show-text');
            console.log('a');

        })

        btnMinus[i].addEventListener('click', function() {

            selectQst[i].classList.remove('show-text');
            console.log('b');

        })
        
    });







        // if (cek) {

        // if (selectQst[i] == e) {

        //     const btnPlus = querySelectorAll('.fa-plus-square');

        //     console.log(btnPlus);

        // }

        // console.log('a');
    // } else {

    //     console.log('c');

    // }

    //         cek = btnPlusTarget.currentTarget.classList;

    //         console.log(btnPlusLoop);

    //     })



    // btnPlus.forEach(function(btnPlusLoop) {

    //     console.log(btnPlusLoop);

    //     btnPlusLoop.addEventListener('click', function(btnPlusTarget) {

    //         cek = btnPlusTarget.currentTarget.classList;

    //         console.log(btnPlusLoop);

    //     })

    // });