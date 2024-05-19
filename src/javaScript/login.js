//animate bear
var hand_left_bear = document.querySelector(
  ".signIn-container__content--hand-left-bear"
);
var hand_right_bear = document.querySelector(
  ".signIn-container__content--hand-right-bear"
);
var board_bear = document.querySelector(
  ".signIn-container__content--board-bear"
);
var body__form__eyes = document.querySelector(".body__form--eyes");

console.log(body__form__eyes);

var checkClickEyes = true; // kiem tra dang bat hay tat hieu ung che mat con gau

body__form__eyes.addEventListener("click", (e) => {
  if (checkClickEyes) {
    hand_left_bear.classList.add("active");
    hand_right_bear.classList.add("active");
    board_bear.classList.add("active");

    hand_left_bear.classList.remove("re-active");
    hand_right_bear.classList.remove("re-active");
    board_bear.classList.remove("re-active");

    checkClickEyes = false; // da bat hieu ung
  } else {
    hand_left_bear.classList.remove("active");
    hand_right_bear.classList.remove("active");
    board_bear.classList.remove("active");

    hand_left_bear.classList.add("re-active");
    hand_right_bear.classList.add("re-active");
    board_bear.classList.add("re-active");

    checkClickEyes = true; // da tat hieu ung
  }
});

//aniamte changed pane sign in and sign up

// biến bên signIn
var container_SignIn = document.querySelector(".container-SignIn");
var signIn_container__content = document.querySelector(
  ".signIn-container__content"
);
var signUp = document.querySelector(".footer__bottom--newMember");
var signIn_container = document.querySelector(".container-SignIn");

// biến bên signUp
var login_container__signup = document.querySelector(
  ".login-container__signup"
);
var header_signup = document.querySelector(".header-signup");
var signIn = document.querySelector(".changed-to-SignIn");
var signUp_container = document.querySelector(".signUp-container");

// chuyen doi khung dang nhap -> dang ki
signUp.addEventListener("click", (e) => {
  //remove seted class animate
  remove_seted_class_animate_pane_signIn("animate__zoomInDown", "tinUpIn");
  add_animate_SignIN("rotateLeft", "slideDown");

  setTimeout((e) => {
    //remove seted class animate
    remove_seted_class_animate_pane_signUp("rotateLeft_signUp", "slideDown");
    add_animate_SignUp("animate__zoomInDown", "tinUpIn");

    signUp_container.style.display = "block";
    signIn_container.style.display = "none";
  }, 2000);
});

function remove_seted_class_animate_pane_signIn(pane_signIn, bear) {
  container_SignIn.classList.remove(`${pane_signIn}`);
  signIn_container__content.classList.remove(`${bear}`);
}

function remove_seted_class_animate_pane_signUp(pane_signUp, bear) {
  login_container__signup.classList.remove(`${pane_signUp}`);
  header_signup.classList.remove(`${bear}`);
}

function add_animate_SignUp(pane_signUp, bear) {
  login_container__signup.classList.add(`${pane_signUp}`);
  header_signup.classList.add(`${bear}`);
}

function add_animate_SignIN(pane_signUp, bear) {
  container_SignIn.classList.add(`${pane_signUp}`);
  signIn_container__content.classList.add(`${bear}`);
}

//changed type input text -> pass and reverse
var inputElement = document.querySelector('.inputPass_signIn');
var hide_or_show_pass = document.querySelector('.body__form--eyes');

var is_hide_pass = false;

hide_or_show_pass.addEventListener('click',(e) => {
 if(is_hide_pass == false) {
  inputElement.type = "password";
  is_hide_pass = true;
 }
 else {
  inputElement.type = "text";
  is_hide_pass = false;
 }
});