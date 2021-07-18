//Setting variables
let input = document.querySelector("input"); //the place to write
let btnadd = document.querySelector(".addtask > button"); //add btn
let deleteAllBtn = document.querySelector(".del button");
let taskcount = document.querySelector(".listNum span"); //numbers of task
let noTaskMsg = document.querySelector(".message");

//Local storage def.
btnadd.addEventListener("click", function () {
  inputBtnaddVal = input.value;
  let webtask = localStorage.getItem("New Todo");
  if (webtask == null) {
    taskObj = [];
  } else {
    taskObj = JSON.parse(webtask);
  }
  taskObj.push(inputBtnaddVal);
  localStorage.setItem("New Todo", JSON.stringify(taskObj));
  showTasks(); //calling showTasks
});

// //make foucs on Input filed
window.onload = function () {
  input.focus();
};

// //Adding new task to do list

btnadd.onclick = function () {
  //check if the input filed is empty of not >print no value
  if (input.value === "") {
    console.log("No value"); //test
  } else {
    noTaskMsg.remove();

    const elementList = document.querySelector(".elementList .list");
    const newlist = document.createElement("li");
    const deletbtn = document.createElement("button");
    const editbtn = document.createElement("button");

    deletbtn.innerHTML = '<i class="fas fa-trash"></i>';
    editbtn.innerHTML = '<i class="fas fa-edit"></i>';

    newlist.textContent = input.value;
    input.value = "";
    elementList.appendChild(newlist);
    newlist.appendChild(editbtn);
    newlist.appendChild(deletbtn);

    //Delete Btn
    deletbtn.addEventListener("click", function () {
      const parent = this.parentNode;
      parent.remove();
      deleteTask(parent);
    });

    input.value = "";
  }
}; //end add function
//deleting Task from local storage
function deleteTask(index) {
  let webtask = localStorage.getItem("New Todo");
  taskObj = JSON.parse(webtask);
  taskObj.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(taskObj));
}

// function showTasks(){
//   let webtask = localStorage.getItem("New Todo");
//   if (webtask == null) {
//     taskObj = [];
//   } else {
//     taskObj = JSON.parse(webtask);
//   }
//   let newLiTag = '';
//   taskObj.forEach((element, index) => {
//     newLiTag += `<li>${element} <button><i class="fas fa-edit"></i></button><button><i onclick="deleteTask(${index})" class="fas fa-trash"></i></button></li>`;

//   });
//   newlist.innerHTML = newLiTag;

// }
