//Setting variables
let input = document.querySelector("input"); //the place to write
let btnadd = document.querySelector(".addtask > button"); //add btn
let deleteAllBtn = document.querySelector(".del button");
let taskcount = document.querySelector(".listNum span"); //numbers of task
let noTaskMsg = document.querySelector(".message");

// //make foucs on Input filed
window.onload = function () {
  input.focus();
};

// //Adding new task to do list

btnadd.onclick = function () {

  //check if the input filed is empty of not >print no value
  if (input.value === "") {
    console.log("No value");//test
  } 
  
  else {
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
    });

    input.value = "";
  }


}//end add function 









