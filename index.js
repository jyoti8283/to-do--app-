let addToButton = document.getElementById("addtoo");
let toDoContainer = document.getElementById("toDoContainer");
let inputfeild = document.getElementById("inputfield");
let addToclearButton = document.getElementById("clear");

addToButton.addEventListener("click", function () {
  var paragragh = document.createElement("p");
  paragragh.classList.add("paragraph-styling");
  paragragh.innerText = inputfeild.value;
  toDoContainer.appendChild(paragragh);
  inputfeild.value = "";

  paragragh.addEventListener("click", function () {
    paragragh.contentEditable = true;
  });

  //  paragragh.addEventListener('click', function(){
  // toDoContainer.removeChild(paragragh);

  addToclearButton.addEventListener("click", function () {
    toDoContainer.removeChild(paragragh);
  });
});
