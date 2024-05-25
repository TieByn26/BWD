const { axiosClient } = require("./axiosClient");

var user_signUp = document.querySelector(".user_signUp");
var password_signUp = document.querySelector(".assword_signUp");
var re_type_password_signUp = document.querySelector(".re_type_password_signUp");
var email_signUp = document.querySelector(".email_signUp");
var btn_signUp = document.querySelector(".btn-signUp");

btn_signUp.addEventListener("click", async function (e) {

    const username = user_signUp.value;
    const pass = password_signUp.value;
    const reType_pass = re_type_password_signUp.value;
    const email = email_signUp.value;

    if(pass !== reType_pass) {
        alert("Password invalid");
    }

    else {
        const res = await login_api({ username, pass, email});
        if (res.statusCode === 200) {
          alert("Registered successfully");
        }
    }
});

const login_api = async (reqBody) => {
  try {
    const res = await axiosClient.post("/auth/register", reqBody);
    console.log(res);
    return res;
  } catch (error) {
    console.log("error => " + error);
  }
};
