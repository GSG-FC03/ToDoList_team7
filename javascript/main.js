//Setting variables
let input = document.querySelector("input"); //the place to write
let btnadd = document.querySelector(".addtask > button"); //add btn
let deleteAllBtn = document.querySelector(".del button");
let noTaskMsg = document.querySelector(".message");
const elementList = document.querySelector(".elementList .list");
var btnclearall = document.getElementById("BtnClearAll");
let pendingCount = document.querySelector(".pendingCount");

let taskcompleted =document.querySelector("#completedtasks");
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
  // showTasks(); //calling showTasks
});

// //make foucs on Input filed
var PendingNum = 0;
window.onload = function () {
  input.focus();
  pendingCount.innerHTML = PendingNum;
};
// //Adding new task to do list

btnadd.onclick = function () {
  //check if the input filed is empty of not >print no value
  if (input.value === "") {
    console.log("No value"); //test
  } else {
    noTaskMsg.remove();

    const newlist = document.createElement("li");
    const deletbtn = document.createElement("button");
    const editbtn = document.createElement("button");
    const checkbtn = document.createElement("button");

    deletbtn.innerHTML = '<i class="fas fa-trash"></i>';
    editbtn.innerHTML = '<i class="fas fa-edit"></i>';
    checkbtn.innerHTML = '<i class="far fa-check-square"></i>';



    newlist.textContent = input.value;
    input.value = "";
    elementList.appendChild(newlist);
    newlist.appendChild(editbtn);
    newlist.appendChild(deletbtn);
    newlist.appendChild(checkbtn);
    PendingNum++;
    pendingCount.innerHTML = PendingNum;

    //Delete Btn
    deletbtn.addEventListener("click", function () {
      const parent = this.parentNode;
      parent.remove();
      deleteTask(parent);
      PendingNum--;
      pendingCount.innerHTML = PendingNum ;
    });

    editbtn.classList.add("editbtn");

    //Edit function >>
    // editbtn.addEventListener("click", () => this.edit(newlist));
   

    input.value = "";
        
    //Check Task function completed 
      checkbtn.addEventListener("click", function () {
        const parent = this.parentNode;
        parent.remove();
        taskcompleted.appendChild(parent);
        checkbtn.style.display = "none";
      });

      deletbtn.addEventListener("click", function () {
        const parent = this.parentNode;
        parent.remove();
      });

    
    
  }
      

   
}; //end add function


//deleting Task from local storage
function deleteTask(parse) {
  let webtask = localStorage.getItem("New Todo");
  taskObj = JSON.parse(webtask);
  taskObj.splice(parse, 1);
  localStorage.setItem("New Todo", JSON.stringify(taskObj));
}

//clearAll Function
function clearAll() {
  if (elementList != null) {
    while (elementList.lastElementChild) {
      elementList.removeChild(elementList.lastElementChild);
      PendingNum = 0;
      pendingCount.innerHTML = PendingNum;
    }
  } else {
    alert("No Data To Delete");
  }
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
