const { axiosClient } = require("./axiosClient");

document
  .querySelector(".body__bottom--btnSigin")
  .addEventListener("click", async function (event) {
    event.preventDefault();

    const username = document.querySelector(".inputUser_signIn").value;
    const password = document.querySelector(".inputPass_signIn").value;

    const res = await login_api({ username, password });
    if (res.statusCode === 200) {
      location.href = "/index.html";
    }
  });

const login_api = async (reqBody) => {
  try {
    const res = await axiosClient.post("/auth/login", reqBody);
    console.log(res);
    return res;
  } catch (error) {
    console.log("error => " + error);
  }
};
