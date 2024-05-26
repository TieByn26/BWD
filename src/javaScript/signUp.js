// chuyen doi khung dang ki -> dang nhap

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

signIn.addEventListener("click", (e) => {
  //remove seted class animate
  remove_seted_class_animate_pane_signUp("animate__zoomInDown", "tinUpIn");
  //set animate
  add_animate_SignUp("rotateLeft_signUp", "slideDown");

  setTimeout((e) => {
    //remove seted class animate
    remove_seted_class_animate_pane_signIn("rotateLeft", "slideDown");
    //set animate
    add_animate_SignIN("animate__zoomInDown", "tinUpIn");

    signUp_container.style.display = "none";
    signIn_container.style.display = "block";
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

//changed type input text -> pass and reverse. animate bear
var RetypePass = document.querySelector(".re_type_password_signUp");
var Pass = document.querySelector(".password_signUp");
let hide_or_show_pass = document.querySelector(
  ".main-signup__container--img--img1"
);
let hide_or_show_reType_pass = document.querySelector(
  ".main-signup__container--img--img2"
);

//variable bear
var hand_left_bear = document.querySelector(".figure-img3");
var hand_right_bear = document.querySelector(".figure-img4");
var board = document.querySelector(".figure-img2");

let is_hide_pass = false;
let is_hide_reType_pass = false;

hide_or_show_pass.addEventListener("click", (e) => {
  if (is_hide_pass == false ) {
    Pass.type = "password";
    setRemoveReActive_handLeft();
    setActive_handLeft();
    is_hide_pass = true;
  } else {
    Pass.type = "text";
    removeActive_HandLeft();
    setReActive_handLeft();
    is_hide_pass = false;
  }
});
hide_or_show_reType_pass.addEventListener("click", (e) => {
  if (is_hide_reType_pass == false) {
    RetypePass.type = "password"

    setRemoveReActive_handRight();
    setActive_handRight();

    is_hide_reType_pass = true;
  } else {
    RetypePass.type = "text";
    removeActive_handRight();
    setReActive_handRight();
    is_hide_reType_pass = false;
  }
});

function setActive_handLeft() {
    hand_left_bear.classList.add("activeSignUp");
    // hand_right_bear.classList.add("activeSignUp");
    board.classList.add("activeSignUp");
}

function setActive_handRight() {
  hand_right_bear.classList.add("activeSignUp");
}

function removeActive_HandLeft() {
    hand_left_bear.classList.remove("activeSignUp");
    board.classList.remove("activeSignUp");
}

function removeActive_handRight() {
  hand_right_bear.classList.remove("activeSignUp");
}

function setReActive_handLeft(){
    hand_left_bear.classList.add("re_activeSignUp");
    board.classList.add("re_activeSignUp");  
}

function setReActive_handRight(){
  hand_right_bear.classList.add("re_activeSignUp");
}

function setRemoveReActive_handLeft(){
    hand_left_bear.classList.remove("re_activeSignUp");
    board.classList.remove("re_activeSignUp");  
}

function setRemoveReActive_handRight(){
  hand_right_bear.classList.remove("re_activeSignUp");
}


