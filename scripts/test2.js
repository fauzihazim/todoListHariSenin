function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}

function addTableToDo() {
    var table = document.getElementById("tableToDo");
    var inputToDo = document.getElementById("inputToDo").value;
    var inputDeadline = document.getElementById("inputDeadline").value;
    if (inputToDo.trim().length === 0) {
        alert("Insert Your Todo List");
        return null;
    };
    if (inputDeadline === '') {
        alert("Insert Your Deadline");
        return null;
    };
    var oTable = document.getElementById('tableToDo');
    var lastRow = oTable.rows.length;
    var row = table.insertRow(lastRow);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    // cell1.innerHTML = `<input class="form-check-input" type="checkbox" value="" aria-label="Checkbox for following text input">`;
    cell1.innerHTML = `<button class="btn btn-primary btn-sm buttonFinished"><span class="material-symbols-outlined" style="padding-top: 5px;">
                            check_small
                            </span>
                        </button>`
    cell2.innerHTML = inputToDo;
    cell3.innerHTML = inputDeadline;
    cell4.innerHTML = `<button class="buttonDelete" style="border: none; background-color: transparent;">
                        <span class="material-symbols-outlined" style="color: #E4A11B;">
                            delete
                        </span>
                      </button>`;
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('.form-check-input');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Delete table
$(document).on('click','.buttonDelete',function() {
  var div = this.parentElement.parentElement;
  div.style.display = "none";
});

$(document).on('click','.buttonFinished',function() {
  // var div = this.parentElement.parentElement;
  // div.style.textDecoration = "line-through";
  var element = this;
  element.classList.remove("btn-primary");  // Remove mystyle class
  element.classList.add("btn-success");  // Add newone class
  element = element.parentElement.parentElement;
  element.classList.add("finished");
});

function myFunction() {
  var element = document.getElementById("myDIV");
  element.classList.add("mystyle");
}
