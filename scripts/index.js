function displayDate() {
  var today = new Date();
  var days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  var day = days[today.getDay()];
  var date = today.getDate();
  var month = today.getMonth() + 1; // Januari adalah 0
  var year = today.getFullYear();
  document.getElementById("dateDisplay").innerHTML = day + ", " + date + "/" + month + "/" + year;
}
function addTableToDo() {
    var table = document.getElementById("tableToDo");
    var inputToDo = document.getElementById("inputToDo").value;
    var inputDeadline = document.getElementById("inputDeadline").value;
    var priority = document.getElementById("prioritySelect").value;
    if (inputToDo.trim().length === 0) {
        alert("Insert Your Todo List");
        return null;
    };
    if (inputDeadline === '') {
        alert("Insert Your Deadline");
        return null;
    };
    if (priority === 'Priority :') {
      alert("Insert Your Priority");
      return null;
    }
    var oTable = document.getElementById('tableToDo');
    var lastRow = oTable.rows.length;
    var row = table.insertRow(lastRow);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = `<td><input class="form-check-input" type="checkbox" name="finishCheckbox" onchange="finishToDo(this)"></td>`
    cell2.innerHTML = inputToDo;
    cell3.innerHTML = inputDeadline;
    cell4.innerHTML = priority;
    cell5.innerHTML = `<button class="buttonDelete" style="border: none; background-color: transparent;">
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
// Finish
function finishToDo(div) {
  div.disabled = true;
  div = div.parentElement.parentElement;
  div.classList.add("finished");
};