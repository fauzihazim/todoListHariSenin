function masuk() {
  const nama = document.getElementById("inputNama").value;
  if (nama.trim().length === 0) {
    alert("Insert Your Name");
    return null;
  }
  function changeID(nama) {
    element.id = nama;
    getID();   
  }
  const jabatan = document.getElementById("jabatanSelect").value;
  if ((jabatan !== 'Manajer') && (jabatan !== 'Staff')) {
    alert("Insert Your Jabatan");
    return null;
  };
  // console.log("Nama :", nama, " Jabatan :", jabatan);
}

document.getElementById('jabatan').value='new value';

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
    cell1.innerHTML = `<input class="form-check-input" type="checkbox" name="finishCheckbox" onchange="finishToDo(this)">`
    // cell1.innerHTML = `<td><button onclick="finishToDo(this)">cek</button></td>`
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

// Finish
// function finishToDo(div) {
//   div.disabled = true;
//   div = div.parentElement.parentElement;
//   div.classList.add("finished");
// };

// const moveTR = (ev) => {
//   console.log("Halo");
  
//   const EL_tr = ev.currentTarget.closest("tr");
//   const sel = EL_tr.closest("table").id === "tableToDo" ? "#finishedTableToDo" : "#tableToDo";
//   document.querySelector(sel).append(EL_tr);
// };

// // function moveIt(div) {
// //   div = div.parentElement.parentElement;
// //   div.forEach(EL => EL.addEventListener('change', moveTR));
// // }
// document.querySelectorAll("table input")
//   .forEach(EL => EL.addEventListener('change', moveTR));
// document.querySelectorAll("table button")
//   .forEach(EL => EL.addEventListener("click", moveTR));