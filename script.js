const label = document.getElementById("todo-input");
const addBtn = document.getElementById("todo-add");
const todolist = document.querySelector(".todo-list");

function createItemsDiv() {
    const items = document.createElement("div");
          items.setAttribute('class', 'todo-item');
          const checkbox = createCheckbox();
          items.appendChild(checkbox);
          todolist.appendChild(items);
          return items;
 }
        
function createCheckbox () {
    const label = document.createElement("label");
    label.setAttribute('class', 'checkbox');
    const input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    const span = document.createElement("span");

    label.appendChild(input);
    label.appendChild(span);
    
    return label;
    
}

function createTask () {
    const para = document.createElement("p");
    const divItems = createItemsDiv();
    let labelValue = label.value.trim();
    if(labelValue){
        para.textContent = labelValue;
        divItems.appendChild(para);
        const removeBtn = createRemoveBtn();
        divItems.appendChild(removeBtn);
        label.value = "";

       checkTheTasks(para, divItems.querySelector(".checkbox"));
    }else{
        alert("there is no use of an empty life! feel your time with good things 👍");
        todolist.removeChild(divItems);
    }


    return para;
}

addBtn.addEventListener('click', createTask);

label.addEventListener('keyup', (e) => {
    e.preventDefault();
    if(e.keyCode === 13){
        addBtn.click()
    }
})

function createRemoveBtn() {
    const removeBtn = document.createElement("button");
    removeBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('title', 'remove');
    removeBtn.setAttribute('aria-label', 'remove');
    removeBtn.setAttribute('id', 'todo-remove');
    const svgIcon = '<svg xmlns="http:www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#808692"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>';
    removeBtn.innerHTML = svgIcon;
    
    removeBtn.addEventListener('click', () => {
        removeBtn.parentElement.classList.add('delete');
    })
    
    return removeBtn;
}

function checkTheTasks(para, label) {
    const checkbox = label.querySelector("input");
    checkbox.addEventListener('click', () => {
        if(checkbox.checked){
            para.classList.add('check');
        }else{
            para.classList.remove('check');
        }
    })

}
