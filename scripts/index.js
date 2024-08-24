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
// Delete table
$(document).on('click','.buttonDelete',function() {
  var div = this.parentElement.parentElement;
  div.style.display = "none";
});

// Finished
$(document).on('click','.buttonFinished',function() {
  var element = this;
  element.classList.remove("btn-primary");
  element.classList.add("btn-success");
  element = element.parentElement.parentElement;
  element.classList.add("finished");
});


// Finished Checkbox
$(document).on('checked','.checkboxFinished',function() {
  var element = this;
  element.classList.remove("test");
  element.classList.add("successBro");
  element = element.parentElement.parentElement;
  element.classList.add("finished");
});