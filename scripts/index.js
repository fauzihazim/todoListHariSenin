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
function showToDoToday() {
  var rowLength = document.getElementById("tableToDo").rows.length;
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log("Current Date: ", currentDate);
  
  var i = 2;
  while (i != rowLength) {
    var tr = document.getElementsByTagName("tr")[i];
    var td = tr.getElementsByTagName("td")[2];
    var td_text = td.innerHTML;
    // console.log(td_text);
    
    let day = td_text.split(" ");
    td_text = day[1];
    console.log(td_text);
    
    if (td_text != currentDate) {
      td = td.parentElement;
      td.classList.add("filteredByDay");
    };
    i++;
  };
}
function showToDoAll() {
  var rowLength = document.getElementById("tableToDo").rows.length;
  var i = 2;
  while (i != rowLength) {
    var element = document.querySelector(".filteredByDay");
    element.classList.remove("filteredByDay");
    i++;
  }
}
function deleteAllToDo() {
  var tbl = document.getElementById("tableToDo");
  tbl.removeChild(tbl.getElementsByTagName("tbody")[0]);
}
function addTableToDo() {
  let table = document.getElementById("tableToDo");
  let inputToDo = document.getElementById("inputToDo").value;
  let inputDeadline = document.getElementById("inputDeadline").value;
  let priority = document.getElementById("prioritySelect").value;
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
  let oTable = document.getElementById('tableToDo');
  let lastRow = oTable.rows.length;
  let row = table.insertRow(lastRow);
  // let row = table.insertRow(1);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
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
  var row = input.parentNode.parentNode;
  row.classList.add("finished");
  input.disabled = true;
  let value1 = input.parentElement.parentElement.children[1].innerHTML;
  console.log(value1);
  let value2 = input.parentElement.parentElement.children[2].innerHTML;
  console.log(value2);
  let value3 = input.parentElement.parentElement.children[3].innerHTML;
  console.log(value3);
  let rowIndex = input.parentElement.parentElement.rowIndex;
  let addedRow = document.getElementById("tableToDo").rows[rowIndex];
  let addRowValue = addedRow.insertCell(5);
  addRowValue.innerHTML = value1;
  addRowValue = addedRow.insertCell(6);
  addRowValue.innerHTML = value2;
  addRowValue = addedRow.insertCell(7);
  addRowValue.innerHTML = value3;
}

var rowLength = document.getElementById("tableToDo").rows.length;
let currentDate = new Date().toJSON().slice(0, 10);
var i = 2;
while (i != rowLength) {
  var tr = document.getElementsByTagName("tr")[i];
  var td = tr.getElementsByTagName("td")[2];
  var td_text = td.innerHTML;
  let day = td_text.split(" ");
  td_text = day[1];
  if (td_text < currentDate) {
    td = td.parentElement;
    td.classList.add("late");
  };
  i++;
};
// function checkDataNewData(deadline, newRow) {
function checkDataNewData(deadline, newRow) {
  // let newRow = 1;
  let currentDate = new Date().toJSON().slice(0, 10);
  if (deadline < currentDate) {
    var tr = document.getElementsByTagName("tr")[newRow];
    tr.classList.add("late");
  }
}
