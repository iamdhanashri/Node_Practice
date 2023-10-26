
document.querySelector("form").addEventListener("submit",myTodo)

function myTodo(event){
 event.preventDefault();
 let taskName=document.querySelector("#task").value;
 let taskPrio=document.querySelector("#priority").value;
 let taskObj={
    taskName,
    taskPrio
 }
 displayFun(taskObj)
}

function displayFun(taskObj){
    let row=document.createElement("tr")
    
    let td1=document.createElement("td")
    td1.innerText=taskObj.taskName;
   let td2=document.createElement("td")
    td2.innerText=taskObj.taskPrio;
    if(taskObj.taskPrio=="high"){
        td2.style.backgroundColor="red"
    }else{
        td2.style.backgroundColor="green"
    }
    let td3=document.createElement("td")
    td3.innerText="Add as fav";

    row.append(td1,td2,td3)

    document.querySelector("tbody").append(row)
}