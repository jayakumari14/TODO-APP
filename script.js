let addtxt = document.getElementById("addtxt");
let addbtn = document.getElementById("addbtn");
let list = document.querySelector("list");
let form = document.getElementById("form");
let ulist = document.getElementById("ulist");
let removebtn = document.getElementsByClassName(".removebtn");

// to add items
addbtn.addEventListener("click", () => {
  let newitem = addtxt.value;
  let li = document.createElement("li");
  li.className = "list";
  li.innerHTML = newitem;
  console.log(li);

  // condition check
  if (newitem === "") {
    alert("You must write something!");
  } else {
    document.getElementById("addtxt").value = "";
    var button = document.createElement("button");
    button.className = "removebtn";
    button.innerHTML = "x";
    li.appendChild(button);
    ulist.appendChild(li);
  }
});
// to remove items
ulist.addEventListener("click", (e) => {
  if (e.target.classList.contains("removebtn")) {
    var li = e.target.parentElement;
    ulist.removeChild(li);
  }
});
