// UI vars

const form = document.querySelector("form");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
// const items = ["item 1", "item 3", "item 4"];
let items;



//load items
loadItems();

// call event listeners
eventListeners();

// event listener
function eventListeners() {
  // submit event
  form.addEventListener("submit", addNewItem);

  //delete an item
  taskList.addEventListener("click", deleteItem);

  //delete all items
  btnDeleteAll.addEventListener("click", deleteAllItems);
}

//loading items
function loadItems() {
    items = getItemsFromLS();

  items.forEach(function(item) {
    createItem(item);
  });
}

//get items from local storage
function getItemsFromLS(){
    if(localStorage.getItem('items')===null){
        items = [];
    }else{
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

//set item to local storage
function setItemToLS(text){
    items = getItemsFromLS();
    items.push(text);
    localStorage.setItem('items',JSON.stringify(items));


}

//delete item from local storage
function deleteItemFromLS(text){
items= getItemsFromLS();
items.forEach(function(item,index){
    if(item === text){
        items.splice(index,1);
    }
});
localStorage.setItem('items',JSON.stringify(items));



}


// create item
function createItem(text) {
  // create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(text));

  // create a
  const a = document.createElement("a");
  a.classList = "delete-item float-right";
  a.setAttribute("href", "#");
  a.innerHTML = '<i class="fas fa-times"></i>';

  // add a to li
  li.appendChild(a);

  // add li to ul
  taskList.appendChild(li);
}

// add new item
function addNewItem(e) {
  if (input.value === "") {
    alert("add new item");
  }

  createItem(input.value);

  // save to local storage
  setItemToLS(input.value);

  // clear input
  input.value = "";

  e.preventDefault();
}

//delete an item
function deleteItem(e) {
  if (e.target.className === "fas fa-times") {
    //silmek için li leri silmek lazım ve iki parent yukarıda li
    if (confirm("Are you sure?")) {
      e.target.parentElement.parentElement.remove();
      // console.log(e.target);

      //delete item from local storage
      deleteItemFromLS(e.target.parentElement.parentElement.textContent);


    }
  }

  e.preventDefault();
  //  console.log(e.target);
}

//delete all items
function deleteAllItems(e) {
  // node for foreach method.

  if (confirm("Are you sure to delete all items ?")) {

    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // taskList.childNodes.forEach(function(item) {
    //   if (item.nodeType === 1) {
    //     console.log(item);
    //     item.remove();
    //   }
      // console.log(item);
    // });
    localStorage.clear();
  }

  //bir alternatif
  // taskList.innerHTML=''
  e.preventDefault();
}

























