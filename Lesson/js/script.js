// let form = document.querySelector(".form");
// let nameInput = document.querySelector(".inputName");
// let lastNameInput = document.querySelector(".inputLastName");
// let age = document.querySelector("#age");
// let male = document.getElementsByName("radio");

// form.addEventListener("submit", handleSubmit);

// function handleSubmit(event) {
//   event.preventDefault();
//   const info = {
//     name: nameInput.value,
//     lastName: lastNameInput.value,
//     age: age.value,
//     male: male[0].checked,
//   };
//   console.log(info);
//   localStorage.setItem("info", JSON.stringify(info));
// }

// if (localStorage.getItem("info")) {
//   const ls = JSON.parse(localStorage.getItem("info"));
//   console.log(ls);
//   nameInput.value = ls.name;
//   lastNameInput.value = ls.lastName;
// }

// let form = document.querySelector("#form");
// let formData = {};

// form.addEventListener("input", function (event) {
//   formData[event.target.name] = event.target.value;
//   localStorage.setItem("formData", JSON.stringify(formData));
// });

// if (localStorage.getItem("formData")) {
//   formData = JSON.parse(localStorage.getItem("formData"));

//   for (let key in formData) {
//     form.elements[key].value = formData[key];
//   }
// }
