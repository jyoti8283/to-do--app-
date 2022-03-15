let addToButton =document.getElementById("addtoo");
let toDoContainer = document.getElementById("toDoContainer");
let inputfeild = document.getElementById("inputfield");
 
 addToButton.addEventListener('click',function() {
     var paragragh =document.createElement('p');
     paragragh.classList.add("paragragh-styling")
     paragragh.innerText =inputfeild.value;
     toDoContainer.appendChild(paragragh)
     inputfeild.value ="";
     paragragh.addEventListener('click', function(){
        toDoContainer.removeChild(paragragh);
  })

 })
