
let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button = document.querySelector("button");

button.onclick = () =>{
    let li = document.createElement("li");

    if(input.value == ""){
        alert("You need to enter some value");
    }else{
        let text = document.createTextNode(input.value);
        li.appendChild(text);
        ul.appendChild(li);
        input.value = "";
    }

    // clear or delete an element
    li.onclick = () =>{
        li.parentNode.removeChild(li);
    }
}