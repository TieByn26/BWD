function Validator(options) {
  var form = document.querySelector(options.form);

  if (form) {
    options.rule.forEach(element => {
        var input = document.querySelector(element.selector);
        input.onblur = () => {
            if (element.test(input.value)) {
                var span = document.querySelector(`${element.selector} ~ span`);
                span.innerText = "vui long nhap truong nay!";
                span.style.visibility = 'visible';
              }
              else {
                var span = document.querySelector(`${element.selector} ~ span`);
                span.innerText = "thong tin khong dung";
                span.style.visibility = 'hidden';
              }
        }
    });
  }
}

Validator.isRequire = function (selector) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : "vui long nhap truong nay!";
    },
  };
};

Validator.isCorrect = function (selector) {};

Validator({
  form: ".body__form",
  rule: [
    Validator.isRequire(".inputUser_signIn"),
    Validator.isRequire(".inputPass_signIn"),
  ]
});

Validator({
    form: ".main-signup__container--text",
    rule: [
      Validator.isRequire(".user_signUp"),
      Validator.isRequire(".password_signUp"),
      Validator.isRequire(".re_type_password_signUp"),
      Validator.isRequire(".email_signUp")
    ]
  });
  