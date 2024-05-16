var hand_left_bear = document.querySelector('.container-SignIn__heading--hand-left-bear');
var hand_right_bear = document.querySelector('.container-SignIn__heading--hand-right-bear');
var board_bear = document.querySelector('.container-SignIn__heading--board-bear');
var body__form__eyes = document.querySelector('.body__form--eyes');

console.log(body__form__eyes);

var checkClickEyes = true; // kiem tra dang bat hay tat hieu ung che mat con gau

body__form__eyes.addEventListener('click', (e) => {
   if(checkClickEyes) {
    hand_left_bear.classList.add("active");
    hand_right_bear.classList.add("active");
    board_bear.classList.add("active");

    hand_left_bear.classList.remove("re-active");
    hand_right_bear.classList.remove("re-active");
    board_bear.classList.remove("re-active");

    checkClickEyes = false; // da bat hieu ung
   }
   else {
    hand_left_bear.classList.remove("active");
    hand_right_bear.classList.remove("active");
    board_bear.classList.remove("active");

    hand_left_bear.classList.add("re-active");
    hand_right_bear.classList.add("re-active");
    board_bear.classList.add("re-active");

    checkClickEyes = true; // da tat hieu ung
   }
});

