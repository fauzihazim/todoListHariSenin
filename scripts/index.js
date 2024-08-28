function masuk() {
  const nama = document.getElementById("inputNama").value;
  if (nama.trim().length === 0) {
    alert("Insert Your Name");
    return null;
  }
  const jabatan = document.getElementById("jabatanSelect").value;
  if ((jabatan !== 'Manajer') && (jabatan !== 'Staff')) {
    alert("Insert Your Jabatan");
    return null;
  };
  document.getElementById("nama").innerHTML = nama;
  document.getElementById("jabatan").innerHTML = jabatan;
  addHiddenClassMasuk();
  removeHiddenClassMasuk();
}
function removeHiddenClassMasuk() {
  var removeHidden = document.getElementById("main");
  removeHidden.classList.remove("hidden");
  removeHidden = document.getElementById("nama");
  removeHidden.classList.remove("hidden");
  removeHidden = document.getElementById("jabatan");
  removeHidden.classList.remove("hidden");
  removeHidden = document.getElementById("logOut");
  removeHidden.classList.remove("hidden");
}
function addHiddenClassMasuk() {
  let addHidden = document.getElementById("masukForm");
  addHidden.classList.add("hidden");
}

function logOut() {
  addHiddenClassLogOut();
  removeHiddenClassLogOut();
  $('#masukForm').children('input').val('')
  $('#masukForm').children('select').val('Jabatan')
}
function addHiddenClassLogOut() {
  let addHidden = document.getElementById("main");
  addHidden.classList.add("hidden");
  addHidden = document.getElementById("nama");
  addHidden.classList.add("hidden");
  addHidden = document.getElementById("jabatan");
  addHidden.classList.add("hidden");
  addHidden = document.getElementById("logOut");
  addHidden.classList.add("hidden");
}
function removeHiddenClassLogOut() {
  const removeHidden = document.getElementById("masukForm");
  removeHidden.classList.remove("hidden");
}

function displayDate() {
  let today = new Date();
  let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let day = days[today.getDay()];
  let date = today.getDate();
  let month = today.getMonth() + 1; // Januari adalah 0
  let year = today.getFullYear();
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
  };
  var oTable = document.getElementById('tableToDo');
  var lastRow = oTable.rows.length;
  var row = table.insertRow(lastRow);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = `<input class="form-check-input" type="checkbox" name="finishCheckbox" onchange="finishToDo(this)">`
  cell2.innerHTML = inputToDo;
  cell3.innerHTML = addDay(inputDeadline);
  cell4.innerHTML = priority;
  cell5.innerHTML = `<button class="buttonDelete" style="border: none; background-color: transparent;">
                      <span class="material-symbols-outlined" style="color: #E4A11B;">
                          delete
                      </span>
                    </button>`;
  checkDataNewData(inputDeadline, lastRow);
}
// Add day on deadline
function addDay(date) {
  let days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  let specificDate = new Date(date);
  let dayOfWeek = days[specificDate.getDay()];
  dayOfWeek = `${dayOfWeek}, ${date}`;
  return dayOfWeek;
}

// Delete table
$(document).on('click','.buttonDelete',function() {
  var div = this.parentElement.parentElement;
  div.style.display = "none";
});
// Finished
function finishToDo(input) {
  // Get the row to be moved
  input.disabled = true;
  var row = input.parentNode.parentNode;
  // Remove the row from the first table
  row.parentNode.removeChild(row);
  row.classList.add("finished");
  // Append the row to the second table
  document.getElementById("finishedTableToDo").appendChild(row);
}

var rowLength = document.getElementById("tableToDo").rows.length;
let currentDate = new Date().toJSON().slice(0, 10);
var i = 1;
while (i != rowLength) {
  var tr = document.getElementsByTagName("tr")[i];
  var td = tr.getElementsByTagName("td")[2];
  var td_text = td.innerHTML;
  let day = td_text.split(" ");
  td_text = day[1];
  if (td_text < currentDate) {
    td = td.parentElement;
    td.classList.add("late");
  }
  i++;
}
function checkDataNewData(deadline, newRow) {
  let currentDate = new Date().toJSON().slice(0, 10);
  if (deadline < currentDate) {
    var tr = document.getElementsByTagName("tr")[newRow];
    tr.classList.add("late");
  }
}
function showToDoToday() {
  var rowLength = document.getElementById("tableToDo").rows.length;
  let currentDate = new Date().toJSON().slice(0, 10);
  var i = 1;
  while (i != rowLength) {
    var tr = document.getElementsByTagName("tr")[i];
    var td = tr.getElementsByTagName("td")[2];
    var td_text = td.innerHTML;
    let day = td_text.split(" ");
    td_text = day[1];
    if (td_text != currentDate) {
      td = td.parentElement;
      td.classList.add("filteredByDay");
    }
    i++;
  }
}
function showToDoAll() {
  var rowLength = document.getElementById("tableToDo").rows.length;
  var i = 1;
  while (i != rowLength) {
    var element = document.querySelector(".filteredByDay");
    element.classList.remove("filteredByDay");
    i++;
  }
}