
// Element selecting and Variable assigning
let inputBox = document.querySelector('#new-task');
let form = document.querySelector('form');
let incompleteUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

let deleteAllButton= document.querySelector('.complete-list h2 button');

deleteAllButton.onclick = function(event){
    event.preventDefault();
    for(let i=0;i<completeUl.children.length;i++){
        completeUl.innerHTML='';
    }
}
// All function needed

let createTask = function(value){
    let checkInput = document.createElement('input');
    let boxLi = document.createElement('li');
    let labelText = document.createElement('label');

    boxLi.className = 'item';
    checkInput.type = 'checkbox';
    labelText.innerText = value;
    checkInput.onchange = finishTask;
    
    boxLi.appendChild(checkInput);
    boxLi.appendChild(labelText);
    return boxLi;
}


let addTask = function(event){
    event.preventDefault();
    let newTask= createTask(inputBox.value);
    incompleteUl.appendChild(newTask);
    inputBox.value='';

    //let checkBox = newTask.querySelector('input[type="checkbox"]');
    //checkBox.onchange = finishTask;
}

let finishTask= function(){
    let parentLi= this.parentNode;
    let deleteButton = document.createElement('button');

    deleteButton.innerText='Delete';
    deleteButton.className='delete';
    parentLi.appendChild(deleteButton);
    let chBox= parentLi.querySelector('input[type="checkbox"]');
    parentLi.removeChild(chBox);
    completeUl.append(parentLi);

    //deleteButton= parentLi.querySelector('button');
    deleteButton.onclick = deleteTask;
}

let deleteTask= function(){
    let task= this.parentNode;
    task.remove();
}

for(let i=0; i<incompleteUl.children.length;i++ ){
    let chBox = incompleteUl.children[i].querySelector('input');
    chBox.onchange = finishTask;
}

for(let i=0; i<completeUl.children.length;i++ ){
    let deleteButton = completeUl.children[i].querySelector('button');
    deleteButton.onclick = deleteTask;
}

form.addEventListener('submit', addTask);